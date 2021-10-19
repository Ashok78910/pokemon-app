import React,{useState,useCallback,useEffect} from 'react'
import { Card, Button, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToFav } from '../action/FavAction'
import { db } from '../firebase_config'
import firebase from 'firebase/compat/app'
import Flip from 'react-reveal/Flip'
import { ToastContainer, toast } from 'react-toastify'

const Pokemon = ({ pokemon }) => {
  const {id} = pokemon 
  const dispatch = useDispatch()
  const [btndata, setbtnData] = useState('')
  console.log(btndata)

  const fetchData = useCallback((id) => {
    db.collection('favorite')
    .where('id', '==', id)
    .get()
    .then((doc) => {
      if (!doc.empty) {
        setbtnData('Already Added')
      }
      else {
        setbtnData('Add As Fav')
      }
  })}, [])

  useEffect(() => {
    fetchData(id)
  }, [fetchData,id])


  /******************* 
    @Purpose : Adding data to firestore
    @Parameter : {}
    @Author : Ashok
  *****************/

const addtofav = ({ pokemon }) => {
    const data = {
      id: pokemon.id,
      name: pokemon.name,
      added: false,
      photoUrl: pokemon.sprites.front_default || '',
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    }

    /******************* 
    @Purpose : check item is already exist in firestore
    @Parameter : {}
    @Author : Ashok
  *****************/

    db.collection('favorite')
      .where('id', '==', data.id)
      .get()
      .then((doc) => {
        if (!doc.empty) {
          toast.error('Favorite already exist')
          console.log(data.added)
        } else {
          db.collection('favorite').add(data)
          dispatch(addToFav(data))
          setbtnData('Already added')
          toast.success('Favorite added')
        }
      })
  }

  return (
    <>
      <Flip left>
        <Card className="my-3 p-3 rounded text-center shadow mb-5 bg -white ">
          <Link to={`/pokemon/${pokemon.id}`}>
            <Card.Img
              style={{ width: '8rem' }}
              src={pokemon.sprites.front_default}
              variant="top"
            />
          </Link>
          <Card.Body
            className={`${pokemon.types[0].type.name} rounded text white`}
          >
            <Link to={`/pokemon/${pokemon.id}`} className="link-name">
              <Card.Title as="div">
                <strong>
                  {pokemon.id}. {pokemon.name}
                </strong>
              </Card.Title>
            </Link>
            <Col>
             <Button onClick={() => addtofav({ pokemon })}>{btndata}</Button>
            </Col>
          </Card.Body>
        </Card>
      </Flip>
      <ToastContainer />
    </>
  )
}

export default React.memo(Pokemon)

import React from 'react'
import { Card, Button, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToFav } from '../action/FavAction'
import { db } from '../firebase_config'
import firebase from 'firebase/compat/app'
import Flip from 'react-reveal/Flip'
import { ToastContainer, toast } from 'react-toastify'

const Pokemon = ({ pokemon }) => {
  const dispatch = useDispatch()
  

  /******************* 
    @Purpose : Adding data to firestore
    @Parameter : {}
    @Author : Ashok
  *****************/

  const addtofav = ({ pokemon }) => {
    const data = {
      id: pokemon.id,
      name: pokemon.name,
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
        } else {
         
          db.collection('favorite').add(data)
          dispatch(addToFav(data))
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
              <Button onClick={() => addtofav({ pokemon })}>
               Add As Favorite
              </Button>
            </Col>
          </Card.Body>
        </Card>
      </Flip>
      <ToastContainer />
    </>
  )
}

export default React.memo(Pokemon)

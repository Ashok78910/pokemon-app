import React from 'react'
import { Card, Button, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch} from 'react-redux'
import { addToFav } from '../action/FavAction'
import { db } from '../firebase_config'
import firebase from 'firebase/compat/app'
import Flip from 'react-reveal/Flip'

const Pokemon = ({ pokemon }) => {
  const dispatch = useDispatch();

  /******************* 
    @Purpose : Adding data to firestore
    @Parameter : {}
    @Author : Ashok
  ******************/
 
  const addtofav = ({ pokemon }) => {
    const data = {
      id: pokemon.id,
      name: pokemon.name,
      photoUrl: pokemon.sprites.front_default || '',
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    }
    db.collection('favorite').add(data)
    dispatch(addToFav(data))
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
    </>
  )
}

export default React.memo(Pokemon)

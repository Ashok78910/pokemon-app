import React, { useState, useEffect,useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Card, Button, Row, Col } from 'react-bootstrap'
import Cards from '../components/Cards'
import { removeToFav } from '../action/FavAction'
import { db } from '../firebase_config'
import Loader from '../components/Loader'

const FavoritePage = () => {
  const [favorite, setFavorite] = useState([])
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  const length = favorite.length

  /******************* 
    @Purpose : fetching data from the firestore and set to favorite
    @Parameter : {}
    @Author : ashok
    ******************/
  const fetchData = useCallback(() => {
      db.collection('favorite')
        .orderBy('timestamp', 'desc')
        .onSnapshot((snapshot) =>
          setFavorite(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        )
    },[])

    useEffect(() => {
      setLoading(true)
      fetchData()
      setLoading(false)
    }, [fetchData])
   

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Row>
          {favorite.map(({ id, data: { name, photoUrl } }) => (
            <Col key={id}>
              <Card
                key={id}
                style={{ width: '18rem' }}
                className="my-3 p-2 rounded item-center shadow mb-2 bg -white "
              >
                <Card.Img
                  className="text-center"
                  style={{ width: '15rem' }}
                  src={photoUrl}
                  variant="top"
                />

                <Card.Body>
                  <Card.Title as="div">
                    <strong>
                      {name.charAt(0).toUpperCase() + name.slice(1)}
                    </strong>
                  </Card.Title>
                  <Button
                    onClick={() => dispatch(removeToFav(id))}
                    className="btn-danger"
                  >
                    Remove From Favorite
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
      {length === 0 && <Cards>No Pokemon Found</Cards>}
      <Link to="/">
        <div className="text-center">
          <Button className="btn-primary my-3 ">Go back</Button>
        </div>
      </Link>
    </>
  )
}

export default FavoritePage

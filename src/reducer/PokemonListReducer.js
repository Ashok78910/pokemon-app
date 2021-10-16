import { ADD_FAV, REMOVE_FAV } from '../action/actionTypes'
import { db } from '../firebase_config'


const initialState = {
  favorite: [],
}

const PokemonListReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case ADD_FAV:
        return {
       ...state,
        favorite: action.payload
      }

    case REMOVE_FAV:
      const newFav = db.collection('favorite').doc(action.id).delete()

      return {
        ...state,
        favorite: newFav
      }

    default:
      return state
  }
}

export default PokemonListReducer

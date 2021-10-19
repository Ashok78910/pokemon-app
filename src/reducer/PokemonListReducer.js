import { ADD_FAV, REMOVE_FAV} from '../action/actionTypes'
import { db } from '../firebase_config'

const initialState = {
  favorite: [],
}

const PokemonListReducer = (state = initialState, action) => {
  switch (action.type) {
    /******************* 
    @Purpose : Adding data to firestore
    @Parameter : {}
    @Author : Ashok
  ******************/
    case ADD_FAV:
      return {
        ...state,
        favorite: action.payload,
      }

    /******************* 
    @Purpose : removing data to firestore
    @Parameter : {}
    @Author : Ashok
  ******************/

    case REMOVE_FAV:
      const newFav = db.collection('favorite').doc(action.id).delete()

      return {
        ...state,
        favorite: newFav,
      }

    default:
      return state
  }
}

export default PokemonListReducer

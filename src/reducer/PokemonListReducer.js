import { ADD_FAV } from '../action/actionTypes'

const initialState = {
  favorite: [],
}

const PokemonListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        favorite: [
          ...state.favorite,
          action.payload
        ]
      }
    default:
      return state
  }
}

export default PokemonListReducer

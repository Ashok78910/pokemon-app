import { ADD_FAV,REMOVE_FAV} from './actionTypes'

export const addToFav = (data) => {
  return {
    type: ADD_FAV,
    payload: data,
  }
}


export const removeToFav = (id) => {
  return {
    type: REMOVE_FAV,
   id
  }
  
}


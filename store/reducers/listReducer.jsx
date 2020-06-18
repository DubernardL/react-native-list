import AsyncStorage from '@react-native-community/async-storage'

function listReducer(state = [], action) {
  let nextState
  switch(action.type) {
    case 'ADD_ELEMENT':
      nextState = [...state, action.payload]
      try {
        AsyncStorage.setItem('items', JSON.stringify(nextState))
      } catch (e) {
        console.log(e)
      }
      return nextState
    case 'DELETE_ALL':
      nextState = []
      try {
        AsyncStorage.setItem('items', JSON.stringify(nextState))
      } catch (e) {
        console.log(e)
      }
      return nextState
    default:
      return state
  }
}

export default listReducer

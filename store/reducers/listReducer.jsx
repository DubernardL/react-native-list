import AsyncStorage from '@react-native-community/async-storage'

const initialState = []

function listReducer(state = initialState, action) {
  let nextState
  switch(action.type) {
    case 'ADD_ELEMENT':
      console.log(state)
      nextState = [...state, action.data]
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

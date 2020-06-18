export function addElement(item) {
  return {
    type: 'ADD_ELEMENT',
    payload: item
  }
}

export function deleteAll() {
  return {
    type: 'DELETE_ALL'
  }
}

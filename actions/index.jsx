export function addElement(item) {
  return {
    type: 'ADD_ELEMENT',
    data: item
  }
}

export function deleteAll() {
  return {
    type: 'DELETE_ALL'
  }
}

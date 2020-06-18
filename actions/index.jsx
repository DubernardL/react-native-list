export function addElement(item) {
  console.log('item from action : ' + item)
  return {
    type: 'ADD_ELEMENT',
    data: item
  }
}

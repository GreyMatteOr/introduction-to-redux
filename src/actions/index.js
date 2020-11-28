export const addToDo = todo => {
  console.log('inactions')
  return {
    type: 'ADD_TODO',
    todo
  }
};

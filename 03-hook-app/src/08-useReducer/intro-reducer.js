
const initialState = [{
  id: 1,
  todo: 'Recolectar la piedra del alma',
  done: false
}]


const todoReducer = ( state = initialState, action = {} ) => {

  if( action.type === '[TODO] add todo' ) {
    return [...state, action.payload]
  }

  return state;
}


let todos = todoReducer();



const newTodo = {
  id: 2,
  todo: 'Recolectar piedra de poder',
  done: false
}

const addTodoActino = {
  type: '[TODO] add todo',
  payload: newTodo
}


todos = todoReducer(todos, addTodoActino );

console.log( todos )
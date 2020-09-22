import { handleActions } from 'redux-actions';
import { CREATE, CHANGE_ISDONE } from '../action/todo';

const initialState = {
  nextId: 1,
  todos: [],
}

const todoReducer = handleActions(
  {
    [CREATE]: (state, { payload: title }) => ({
      ...state,
      todos: [ ...state.todos, {
        id: state.nextId,
        title: title,
        startedAt: '',
        endAt: '',
        isDone: false,
      } ],
      nextId: state.nextId + 1
    }),
    [CHANGE_ISDONE]: (state, {payload: id}) => ({
      ...state,
      todos: state.todos.map(todo => {
        if (todo.id === id) {
          todo.isDone = !todo.isDone;
        }
        return todo;
      })
    })
  },
  initialState
)

export default todoReducer 
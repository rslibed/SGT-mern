import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
// export default combineReducers({});

export default combineReducers({
  form: formReducer
})
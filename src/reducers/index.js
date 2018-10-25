import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducer from './modules';

const configureStore = (state) => {
  const store = createStore(
    reducer,
    compose(
      applyMiddleware(thunk)
    )
  )

  if (module.hot) {
    module.hot.accept('./modules', () => {
      store.replaceReducer(reducer);
    });
  }

  return store;
}

export default configureStore;
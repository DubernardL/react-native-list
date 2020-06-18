import React from 'react'
import Home from './components/Home'
import { Provider } from 'react-redux'
import Store from './store/configureStore'

export default function App() {
  return (
    <Provider store={Store}>
      <Home />
    </Provider>
  );
}


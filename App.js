import 'react-native-gesture-handler';
import React from 'react';
import store from './src/redux/store';
import ShoppingCart from './src/components/ShoppingCart';
import { Provider } from 'react-redux';

function App(){

  return(
    <Provider store = {store}>
      <ShoppingCart />
    </Provider>
  )
}

export default App;

// import CounterReducer from './Reducers/CounterReducer';
import { Provider } from 'react-redux';
import{ createStore} from 'redux'
import MyRoutes from './MyRoutes';
// import GameReducer from './Reducers/GameReducer';
import finalRootReducer from './Reducers/finalRootReducer';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import { PersistGate } from 'redux-persist/integration/react';

const persistConfig = {
  key: 'root',
  storage,
}

 


function App() {
  // const rootReducer=combineReducers({
  //   counter:CounterReducer,
  //   game:GameReducer
  // })
  // // const Counterstore=createStore(CounterReducer)
  // const GameStore=createStore(rootReducer)
  const persistedReducer = persistReducer(persistConfig, finalRootReducer)
  const store=createStore(persistedReducer)
  const persistor = persistStore(store)



  return (
    <div className="App">
      <Provider store={store}>
      <PersistGate  persistor={persistor}>
<MyRoutes/>
</PersistGate>
      </Provider>
     
    </div>
  );
}

export default App;

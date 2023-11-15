import './App.css';
import { LoginPage } from './pages/auth/LoginPage';
import { store } from './store/store';
import  { Provider } from 'react-redux';

function App() {

  return (
    <>
      <Provider store={store} >
        <LoginPage/>
      </Provider>
    </>
  )
}

export default App

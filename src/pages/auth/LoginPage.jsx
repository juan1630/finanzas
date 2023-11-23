import { useDispatch, useSelector } from 'react-redux';
import { googleSignIn } from '../../slices/';
import { authStates, isLoginValid } from '../../helpers';
import '../../index.css';

export const LoginPage = () => {
  
  const dispatch = useDispatch();
  const { auth } = useSelector(state => state.auth)

    const hanldeSigInGoogle =  () => {
        dispatch(googleSignIn());
    }
  
    return (
    <>
      <form className='form-login-center'>
        <header>
          <h2 className='login-title' > Inicia sesión </h2>
        </header>
        {
          
          isLoginValid ? <section className="form-section">
          <input type="text" name="email" placeholder="Ingresa tu email" />
          <input
            type="password"
            name="password"
            placeholder="Ingresa tu contraseña"
          />
          <button className="button-login rounded-button" disabled={ (auth === authStates.authenticated  ) ?? false }  > Login </button>
        </section> :  null
        }
        <footer className="footer-buttons-social-media">
          <div className="row-buttons">
          <button type="button" className="button-google rounded-button"  disabled={ (auth === authStates.authenticated  ) ?? false }  onClick={hanldeSigInGoogle} >
            <i className="fa-brands fa-google"></i>
          </button>
          </div>
        </footer>
      </form>
    </>
  );
};

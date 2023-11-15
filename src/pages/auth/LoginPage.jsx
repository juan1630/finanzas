import { useDispatch } from 'react-redux';
import { googleSignIn } from '../../slices/';

export const LoginPage = () => {
  
  const dispatch = useDispatch()

    const hanldeSigInGoogle =  () => {
        dispatch(  googleSignIn() );
    }
  
    return (
    <>
      <form>
        <header>
          <h2> Inicia sesión </h2>
        </header>
        <section className="form-section">
          <input type="text" name="email" placeholder="Ingresa tu email" />
          <input
            type="password"
            name="password"
            placeholder="Ingresa tu contraseña"
          />
          <button className="button-login"> Login </button>
        </section>
        <footer className="footer-buttons-social-media">
          <button type="button" className="button-google" onClick={hanldeSigInGoogle} >
            <i className="fa-brands fa-google"></i>
          </button>
        </footer>
      </form>
    </>
  );
};

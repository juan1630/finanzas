import { useDispatch, useSelector } from 'react-redux';
import { onLoggin, onLoggout } from '../slices';

export const useAuth = () => {
 
    const { auth } = useSelector( state  => state.auth);
    const dispatch = useDispatch();
    
    const onCheckingAuth = () => {

        try {
         
        const token = localStorage.getItem('token');
        const user = JSON.parse(localStorage.getItem('user'));

        if( !token ) return dispatch(onLoggout());

        dispatch(onLoggin(user))
   
        } catch (error) {
           console.log(error);
           dispatch(onLoggout()); 
        }
    }

    return {
        auth,
        onCheckingAuth
    }
}
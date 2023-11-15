//los thunks son acciones asyncronas
import { signInWithGoogle } from '../providers/providers';
import { onLoggin, onChecking, onLoggout } from './auhtSlice';


export const googleSignIn = () => {
        return async( dispatch ) =>{

            dispatch( onChecking());
            const resp = await signInWithGoogle();
            
            if(!resp.ok) return  dispatch( onLoggout(resp.errorMessage));
            delete resp.ok;
            dispatch(onLoggin( resp ))

         }
};
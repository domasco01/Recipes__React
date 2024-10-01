
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import { useContext } from 'react';

export default function Auth (){
    const { auth } = useContext(AuthContext);

    // Se l'utente non è autenticato, reindirizza alla pagina di login
    if (auth === 'not-auth') {
        return <Navigate to="/login" />;
    }

    // Mostra le rotte protette
    return <Outlet />;
};


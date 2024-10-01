import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState('not-auth'); // Stato di autenticazione

    const login = () => setAuth('auth'); // Funzione per accedere
    const logout = () => setAuth('not-auth'); // Funzione per disconnettersi

    return (
        <AuthContext.Provider value={{ auth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook per utilizzare il contesto
// export const useAuth = () => useContext(AuthContext);
import React, {
    createContext,
    useContext,
    useEffect,
    useState
} from "react";
import { StorageService } from "../service/storage/auth";

export const AuthManager = createContext({});

const useAuth = () => useContext(AuthManager);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        StorageService.getUser().then((_u) => {
            return _u
        })
        return null
    });

    const Authenticate = (data) => {
        setUser(data)
        StorageService.saveToken(data)
    }


    return (
        <AuthManager.Provider value={{
            isAuthenticated: user ? true : false,
            Authenticate
        }}>
            {children}
        </AuthManager.Provider>
    )
}

export default useAuth;
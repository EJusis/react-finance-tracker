import {useAuthContext} from "./useAuthContext";
import {useEffect, useState} from "react";
import {projectAuth} from "../firebase/config";
import {useNavigate} from "react-router-dom";

export const useLogout = () => {
    const [isCancelled, setIsCancelled] = useState(false)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = useAuthContext()
    const navigate = useNavigate()

    const logout = async () => {
        setError(null)
        setIsPending(true)

        //sign the user out
        try {
            await projectAuth.signOut()

            // dispatch logout action
            dispatch({ type: 'LOGOUT' })

            // update state
            if(!isCancelled) {
                setIsPending(false)
                setError(null)
                navigate('/login')
            }



        } catch (err) {
            if(!isCancelled) {
                console.log(err.message)
                setError(err.message)
                setIsPending(false)
            }
        }
    }

    useEffect(() => {
        setIsCancelled(false)
        return () => setIsCancelled(true)
    }, [])

    return { logout, error, isPending }


}

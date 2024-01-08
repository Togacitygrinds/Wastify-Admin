import { toast } from "react-toastify";
import { Axios } from "axios";

export const UserSignUp = async (info, setLoading, callback) => {
    try {
        
        
    } catch (error) {
        setLoading(false)
        toast.error(error?.response?.data?.message || "Uh oh! User registration failed.")
    }
}
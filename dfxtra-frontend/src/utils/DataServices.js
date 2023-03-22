import axios from "axios"
const URL = "skfkds"


export const submitCert = async (certName)=>{

    try{
        const response = await axios.post(URL, certName)
        return response.data}
    catch(e){
        return {error: e.code, errorMessage: e.message}
    }

}
import { useState } from "react"
import {submitCert} from "../../utils/DataServices.js"

function CertificationForm({setIsCertificationForm}){

const [certificationFormInput, setCertificationFormInput] = useState("")

const handleSubmit = async (e) =>{
    e.preventDefault()
    try{
    const response = await submitCert(certificationFormInput)
    setIsCertificationForm(false)
    return response 
    }
    
    catch(e){
        return {error: e.code, errorMessage: e.message}
    }

}

const handleChange = (e) =>{
    setCertificationFormInput(e.target.value)
}

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="Certification">Certification:</label>
            <input type="text" name="CertificationName" value= {certificationFormInput} onChange={handleChange}/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default CertificationForm;
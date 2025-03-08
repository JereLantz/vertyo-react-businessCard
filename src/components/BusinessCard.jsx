import { useState } from "react"
import "./BusinessCard.css"

export default function BusinessCard({Name, Education,JobTitle,Company,Email,CompanyLogo}){
    const [contactDetails, toggleShowDetails] = useState(false)

    function toggleDetails(){
        if(contactDetails){
            toggleShowDetails(false)
        }
        else{
            toggleShowDetails(true)
        }
    }
    return(
        <div>
        <img src={CompanyLogo}></img>
        <h3>{Name}</h3>
        <p>{JobTitle}</p>
        <p>{Company}</p>
        <p>{Education}</p>
        <button onClick={toggleDetails}>Show contact details</button>
        {contactDetails == true ? <p>{Email}</p> : <p></p>}
        </div>
    )
}

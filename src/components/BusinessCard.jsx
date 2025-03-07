import "./BusinessCard.css"

export default function BusinessCard({Name, Education,JobTitle,Company,Email,CompanyLogo}){
    return(
        <div>
        <img src={CompanyLogo}></img>
        <h3>{Name}</h3>
        <p>{JobTitle}</p>
        <p>{Company}</p>
        <p>{Education}</p>
        <p>{Email}</p>
        </div>
    )
}

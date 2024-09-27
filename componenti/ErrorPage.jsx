import { Link } from "react-router-dom";


export default function ErrorPage(){

    return(
        <div className="error-page">
            <div className="error-text-container">
                <h1>404</h1>
                <h2>Pagina non trovata</h2>
                <p>Questa pagina non esiste o è stata rimossa! <br/> Ti suggeriamo di tornare alla home</p>
                <Link to="/">Torna alla home</Link>
            </div>
            <div className="error-img-container">
                <img src="images/errorPage3.svg" alt="img error" />
            </div>
        </div>
    )
}
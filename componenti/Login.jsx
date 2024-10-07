import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";

export default function Login(){

    const navigate = useNavigate();
    const { login } = useContext(AuthContext); // Usa la funzione di login dal contesto


    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3002/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                // Login riuscito, naviga verso l'area personale
                navigate("/personalArea", {state: {username : formData.email}});
                login();
            } else {
                // Gestisci il login fallito
                console.error('Errore di login:', data.message);
                alert(data.message);
            }
        } catch (error) {
            console.error('Errore:', error);
            alert('Si è verificato un errore. Riprova.');
        }
    };
    return(
        
        <div className="login-page-container"> 
            <div className="login-page-container1">
                <button className="back-button"
                onClick={()=>{
                    navigate(-1)
                }}
                
                ><FontAwesomeIcon icon={faArrowLeft} /></button>
                </div>
                <div className="login-page-container2">
                    <div className="login-page-container22">
                    <h1>Welcome back!</h1>
                    <p>Inizia a salvare e gestire le tue ricette</p>

                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        /><br />
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        /><br />
                        <br />
                        <br />
                        <button type="submit">Continua</button>
                    </form>
                </div>
                
            </div>  
        </div>
    )
}
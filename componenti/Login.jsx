import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

export default function Login(){

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
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
                // Login riuscito, naviga verso la home
                navigate("/");
                console.log('Login riuscito:', data);
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
                    <h1>Hey, hello 👋</h1>
                    <p>Accedi per salvare ricette e ottenere offerte esclusive.</p>

                    <form onSubmit={handleSubmit}>
            <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
            /><br />
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
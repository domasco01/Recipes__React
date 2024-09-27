import { NavLink } from "react-router-dom";

export default function(){

    function submit(e){
        e.preventDefault();
        
    }

    return(
        <footer className="footer">
            <div className="footer-container1">
                <h2>Pronto a cucinare?</h2>
                <p>Iscriviti per ricevere la nostra newsletter settimanale!</p>
                <label for="email-newsletter">
                    <input type="text" id="input-newsletter" name="email-newsletter" placeholder="Enter your email" />
                    <button type="submit" id="submit-newsletter" onSubmit={(e)=>submit(e)}>Iscriviti</button>
                </label>
            </div>
            <div className="footer-container2">
                <ul className="footer-container2-1">
                    <li><NavLink to="/recipes">Ricette</NavLink></li>
                    <li><NavLink to="/recipes">Cene</NavLink></li>
                    <li><NavLink to="/recipes">Ingredienti</NavLink></li>
                    <li><NavLink to="/recipes">Facile e Veloce</NavLink></li>
                </ul>
                <div className="footer-container2-1">
                    <li><NavLink to="/support">About us</NavLink></li>
                    <li><NavLink to="/support">Termini di uso</NavLink></li>
                    <li><NavLink to="/support">Privacy policy</NavLink></li>
                    <li><NavLink to="/contact">Contatti</NavLink></li>
                </div>
            </div>
        </footer>
    )
}
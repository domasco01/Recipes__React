import { NavLink } from "react-router-dom";

export default function(){

    function submit(e){
        e.preventDefault();
        
    }

    return(
        <footer className="footer">
            <div className="footer-container1">
                <h2>Ready to cook?</h2>
                <p>Sign up for our weekly newsletter!</p>
                <label for="email-newsletter">
                    <input type="text" id="input-newsletter" name="email-newsletter" placeholder="Enter your email" />
                    <button type="submit" id="submit-newsletter" onSubmit={(e)=>submit(e)}>Sign Up</button>
                </label>
            </div>
            <div className="footer-container2">
                <ul className="footer-container2-1">
                    <li><NavLink to="/recipes">Recipes</NavLink></li>
                    <li><NavLink to="/recipes">Dinners</NavLink></li>
                    <li><NavLink to="/recipes">Ingredients</NavLink></li>
                    <li><NavLink to="/recipes">Quick & Easy</NavLink></li>
                    <li><NavLink to="/recipes">Holidays & Seasons</NavLink></li>
                </ul>
                <div className="footer-container2-1">
                    <li><NavLink to="/support">About us</NavLink></li>
                    <li><NavLink to="/support">Terms of use</NavLink></li>
                    <li><NavLink to="/support">Editorial guidelines</NavLink></li>
                    <li><NavLink to="/support">Privacy policy</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </div>
            </div>
        </footer>
    )
}
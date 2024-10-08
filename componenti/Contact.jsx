

export default function Contact(){

    return(
        <div className="contact-page-container">
            <div className="contact-page-container1">
                <h1>Contattaci</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum quis iusto 
                    aliquam dicta aliquid nobis alias unde ipsam sequi eos.
                </p>
            </div>
            <div className="contact-page-container2">
                <div className="contact-page-container21">
                    <form className="contact-page-form">
                        <input type="text" id="nome-form" placeholder="Nome" />
                        <input type="text" id="cognome-form" placeholder="Cognome" />
                        <input type="email" id="email-form" placeholder="Email"/>
                        <textarea  id="textarea-form" placeholder="Messaggio"></textarea>
                        <button type="submit" id="btn-form">Invia</button>
                    </form>
                </div>
                <div className="contact-page-container22">
                    <h3>La nostra NewsLetter</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sequi repellendus consequuntur.
                        Repudiandae accusamus animi nam ex, beatae magnam.
                        
                    </p>
                    <input type="email" placeholder="Email" />
                    <button>Iscriviti</button>
                </div>
            </div>
            <div className="contact-page-container3">
                <div className="contact-page-card" id="card1">
                    <h2>(+876) 765 665</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptas vel ad!</p>
                </div>
                <div className="contact-page-card" id="card2">
                    <h2>mail@gmail.com</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nisi placeat in?</p>
                </div>
                <div className="contact-page-card" id="card3">
                    <h2>Lorem Ipsum Sit</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem tenetur soluta eum?</p>
                </div>
            </div>
        </div>
    )
}
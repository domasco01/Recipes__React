
export default function({ name, imgUrl, creataDa }){

    return(
        <div className="card-link">
            <div className="img-card-container"> 
                <img src={imgUrl} alt="Recipe Image" />
            </div>
            <p className="card-link-name"> {name}</p>
            {
                creataDa ? 
                    <p className="card-link-name">Creata da : {creataDa}</p> 
                    :
                    null
            }
            

        </div>
    )
}
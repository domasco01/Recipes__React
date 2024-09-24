
export default function({ name, imgUrl }){

    return(
        <div className="card-link">
            <div className="img-card-container"> 
                <img src={imgUrl} alt="Recipe Image" />
            </div>
            <p className="card-link-name"> {name}</p>

        </div>
    )
}
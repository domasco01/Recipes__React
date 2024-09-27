import { Link, useLoaderData } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";
import Card from "./Card";

export default function Home(){



    const riceps=useLoaderData();

    return(
        <>
            <div className="home-container1">
                <div className="home-container11">
                    <div className="home-container12">
                        <h1>Chefs Academy</h1>
                        <p>Master-Chef fornisce complete e deliziose <br />ricette per tutti i tipi di cibo e per tutte le persone che amano cucinare <br /> in maniera semplice.</p>
                        <br />
                        <Link to="/" className="get-started-link">Get Started</Link>
                    </div>   
                </div>
            </div>
            <div className="home-container2">
                <h1>Antipasti <Link to="/recipes" className="link-arrow-home"><FontAwesomeIcon icon={faArrowRight} className="right-arrow" /></Link></h1>
                <div className="card-link-container">
                    {
                        riceps.filter(recipe => recipe.type==="Antipasto")
                        .slice(0,3)
                        .map(recipe =>(
                            <Link to={`/recipes/${recipe.id}`} key={recipe.id} ><Card imgUrl={recipe.imgUrl}  name={recipe.name}/>    </Link>
                        ))
                    }
                    
                </div>
            </div>
            <div className="home-container3">
                <div className="home-container31">
                    <h1>The Simply Recipes Team</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, perspiciatis tempora tempore, voluptas eaque saepe commodi neque officiis, ipsa
                        fugiat sequi facere temporibus deleniti consectetur eveniet iure veritatis ad veniam!
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi sit odit vel consequatur quam obcaecati dolorum! Illo autem a quaerat quasi 
                    </p>
                    <Link to="/support">Read more</Link>
                </div>
                <div className="home-container32">
                    <div className="home-container321">
                        <div className="home-container3211">
                            <div className="contribution-container">
                                <img src="https://cdn.pixabay.com/photo/2018/11/08/23/52/man-3803551_640.jpg" alt="foto ragazzo" />
                            </div>
                            <p className="contributor-name" >Domenico Ascolese</p>
                            <p className="contributor-role">Contribuiting Writer</p>
                        </div>
                        <div className="home-container3211">
                            <div className="contribution-container">
                                <img src="https://cdn.pixabay.com/photo/2015/01/08/18/30/man-593372_640.jpg" alt="ragazzo foto" />
                            </div>
                            <p className="contributor-name" >Domenico Ascolese</p>
                            <p className="contributor-role">Contribuiting Writer</p>
                        </div>
                        <div className="home-container3211">
                            <div className="contribution-container">
                                <img src="https://cdn.pixabay.com/photo/2020/11/30/17/21/businessman-5791566_640.jpg" alt="ragazzo foto" />
                            </div>
                            <p className="contributor-name" >Domenico Ascolese</p>
                            <p className="contributor-role">Contribuiting Writer</p>
                        </div>
                        <div className="home-container3211">
                            <div className="contribution-container">
                                <img src="https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_640.jpg" alt="ragazzo foto" />
                            </div>
                            <p className="contributor-name" >Domenico Ascolese</p>
                            <p className="contributor-role">Contribuiting Writer</p>
                        </div>
                        
                        
                    </div>
                    <div className="home-container322">
                    <div className="home-container3211">
                            <div className="contribution-container">
                                <img src="https://cdn.pixabay.com/photo/2022/06/21/08/57/male-7275449_640.jpg" alt="ragazzo foto" />
                            </div>
                            <p className="contributor-name">Domenico Ascolese</p>
                            <p className="contributor-role">Contribuiting Writer</p>
                        </div>
                        <div className="home-container3211">
                            <div className="contribution-container">
                                <img src="https://cdn.pixabay.com/photo/2016/11/29/01/34/man-1866574_640.jpg" alt="ragazzo foto" />
                            </div>
                            <p className="contributor-name" >Domenico Ascolese</p>
                            <p className="contributor-role">Contribuiting Writer</p>
                        </div>
                        <div className="home-container3211">
                            <div className="contribution-container">
                                <img src="https://cdn.pixabay.com/photo/2016/03/27/17/40/man-1283231_640.jpg" alt="ragazzo foto" />
                            </div>
                            <p className="contributor-name" >Domenico Ascolese</p>
                            <p className="contributor-role">Contribuiting Writer</p>
                        </div>
                        <div className="home-container3211">
                            <div className="contribution-container">
                                <img src="https://cdn.pixabay.com/photo/2017/08/01/01/33/beanie-2562646_640.jpg" alt="ragazzo foto" />
                            </div>
                            <p className="contributor-name" >Domenico Ascolese</p>
                            <p className="contributor-role">Contribuiting Writer</p>
                        </div>

                    </div>
                </div>
            </div>
            <div className="home-container4">
                <h1>Primi Piatti <Link to="/recipes" className="link-arrow-home"><FontAwesomeIcon icon={faArrowRight} className="right-arrow" /></Link></h1>
                <div className="card-link-container">
                    {
                        riceps.filter(recipe => recipe.type==="Primo")
                        .slice(0,3)
                        .map(recipe =>(
                            <Link to={`/recipes/${recipe.id}`} key={recipe.id} ><Card imgUrl={recipe.imgUrl}  name={recipe.name}/>    </Link>
                        ))
                    }
                    
                </div>
            
            </div>
            <div className="home-container5">
                <h1>Dolci <Link to="/recipes" className="link-arrow-home"><FontAwesomeIcon icon={faArrowRight} className="right-arrow-black" /></Link></h1>
                <div className="card-link-container">
                    {
                        riceps.filter(recipe => recipe.type==="Dolce")
                        .slice(0,3)
                        .map(recipe =>(
                            <Link to={`/recipes/${recipe.id}`} key={recipe.id} ><Card imgUrl={recipe.imgUrl}  name={recipe.name}/>    </Link>
                        ))
                    }
                    
                </div>
            
            </div>
            <div className="home-container6">
                <h1>Vedi Tutto <Link to="/recipes" className="link-arrow-home"><FontAwesomeIcon icon={faArrowRight} className="right-arrow" /></Link></h1>
                <div className="card-link-container">
                    {
                        riceps.slice(10,13)
                        .map(recipe =>(
                            <Link to={`/recipes/${recipe.id}`} key={recipe.id} ><Card imgUrl={recipe.imgUrl}  name={recipe.name}/>    </Link>
                        ))
                    }
                    
                </div>
            
            </div>
        </>
    )
}

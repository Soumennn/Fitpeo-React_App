import React, { useState } from 'react';

import { Link } from 'react-router-dom'; 

function Card({ info }) {

    let [like,setLike] = useState(false);

    const clickHandler = () => {
        setLike( like = !like )
    }



    return (
        <>

        <div className="card" id="card"  style={{width: '90%', marginBottom: '5rem'}}>
            <div className="cardImg">
                <img src={info.image} className="card-img-top" alt="..." />
            </div>
            <div className="card-body">
                <h5 className="card-title" style={{height: '5rem', fontWeight: '500', fontSize: '1.45rem'}}>
                    {info.package}
                </h5>
                <p className="card-text" style={{fontWeight: 'bold', color: '#1d3557'}}>
                     <span> Store: &nbsp; &nbsp; </span>
                    <i className="fas fa-store text-danger"/>
                        {info.store} 
                </p>
                <p className="card-text">
                     <i className="fas fa-user-friends text-warning"></i>
                        &nbsp; {info.pax === 2 ? " Couple" : info.pax+" People"}
                </p>
                <p className="card-text"> <i className="far fa-clock text-primary"/>
                   &nbsp; {info.duration}  
                </p>
                <br />

                <i 
                onClick={clickHandler}
                className = {
                  like === true ? "fas fa-heart text-danger" : "far fa-heart"
                } 
                id="heart"
                /> 
                <h6 
                className="price text-danger d-inline" 
                style={{
                    fontWeight: "bold",
                    float: "right",  
                    marginRight: "1rem"  
                }}> 
                    Price: ${info.price}
                </h6>
                <br />
                <Link 
                className="btn btn-primary d-block my-5" to="/show"
                style={{
                    width:'10rem',
                    margin: 'auto',
                    background: 'lightSeaGreen',
                    border: 'none'}}
                > 
                    Know More 
                </Link>
            </div>
        </div>

        </>
    )
}

export default Card

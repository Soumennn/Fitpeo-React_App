import React from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom';
 
function ShowCard() {
    return (
        <>
        <Router>
        <div className="card" id="showCard" style={{width: '18rem'}}>
                <img src="https://images.unsplash.com/photo-1587387119725-9d6bac0f22fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">showCard title here</h5>
                    <p className="card-text">Here, the data can be sent via axios ( crud operations ) and information regarding every card's detail can be mapped here.</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">An item</li>
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A third item</li>
                </ul>
                <div className="card-body">
                    <Link to="/" className="card-link btn btn-light text-dark">Card link</Link>
                    <Link to="/" className="card-link btn btn-dark text-light">Card link</Link>
                    <Link to="/" className="btn  btn-light card-link ">Another link</Link>
                </div>
            </div>
        </Router>

        </>
    )
}

export default ShowCard

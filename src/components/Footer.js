import React from 'react'

function Footer() {
    return (
        <>
        <div className="footer">
                <div className="col-lg-4 col-md-4 col-sm-4">
                        <ul className="nav footer-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Tour Locator</a>
                            </li>
                        </ul>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 logo-container">
                    <img src="https://th.bing.com/th/id/R.a16c96455c0806ff4cb35423d3341ae1?rik=QkU3kgO7iJryew&riu=http%3a%2f%2fwww.officialpsds.com%2fimages%2fthumbs%2fEarth-Travel-psd87707.png&ehk=yFwkhF7xYbfsUMNWQA9Ss0oicxQ0cBFWK7m8i5ALtNc%3d&risl=&pid=ImgRaw&r=0" alt="" />
                </div>
                <div className=" credits col-lg-4 col-md-4 col-sm-4">
                   <p>All Rights Reserved | &#169; Retour</p> 
                </div>
        </div>

        </>
    )
}

export default Footer

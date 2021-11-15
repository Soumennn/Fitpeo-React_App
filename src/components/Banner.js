import React from 'react'

function Banner() {
    return (
        <>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="left-banner-content">
                    <h2>Find <span>Adventures,</span> <br/> you want to talk about </h2>
                    <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-light" >Search</button>
                    </form>
                </div>
                <div className="carousel-item active">
                <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/enjoying-the-view-royalty-free-image-1582838254.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                <img src="https://images.unsplash.com/photo-1521252517631-1a6549100bd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                <img src="https://images.unsplash.com/photo-1531129630896-1744cab0cafd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1154&q=80" className="d-block w-100" alt="..." />
                </div>
                <div className="right-banner-content">
                    <div className="bannerHow btn btn-dark text-light"> How it works ? </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Banner

import React from 'react'
// import upArrow from ""
// import roadImage from ""

const HomePathCard = () => {
    return (
        <div className='home-path-card'>
            <div className="home-path-card__image-container">
                <img src={null} alt="Home" className="home-path-card__image" />
            </div >

            <img src={null} alt="Up Arrow" className="home-path-card__up-arrow" />

            <h3 className="home-path-card__directions-text">Walk stright ahead</h3>
            <h4 className="home-path-card__final-goal">to go home</h4>

            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="home-path-card__view-map-link">View Map</a>
        </div>
    )
}

export default HomePathCard
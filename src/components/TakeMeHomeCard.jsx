import React from 'react'
// import homeImage from "../assets/images/home"

const TakeMeHomeCard = () => {
    return (
        <div className='take-me-home-card'>
            <div className="take-me-home-card__image-container">
                <img src={null} alt="Home" className="take-me-home-card__image" />
            </div>
            <button className="take-me-home-card__btn">Take me home</button>
        </div>
    )
}

export default TakeMeHomeCard
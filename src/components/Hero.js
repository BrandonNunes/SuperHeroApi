import React from 'react'

export const Hero = (props) => {
    return (
        <div className='heroContainer'>
            {props.hero &&props.hero.map((h)=>(
                <div className='hero' key={h.id}>
                    <div className='image'>
                        <img src={h.image.url} alt="hero"/>
                    </div>
                    <p className="name">{h.name}</p>
                    <div className='skills'>
                        <p>Intelligence: {h.powerstats.intelligence}</p>
                        <p>Strength: {h.powerstats.strength}</p>
                        <p>Speed: {h.powerstats.speed}</p>
                        <p>Power: {h.powerstats.power}</p>
                        <p>Combat: {h.powerstats.combat}</p>
                        <p>Full Name: {h.biography['full-name']}</p>
                        <p>Occupation: {h.work.occupation}</p>
                    </div>
                </div>
                
            ))}
        </div>
    )
}

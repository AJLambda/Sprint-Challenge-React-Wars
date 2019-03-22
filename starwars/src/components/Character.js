import React from 'react';
import './StarWars.css'

function Character(props) {
    return (
        <div className="character-card">
            <img src={props.character.url} alt={props.character.name} />

            <div className="character-info">
                <h2>{props.character.name}</h2>
                    <p>
                        <strong>Homeworld:</strong> {props.character.homeworld}
                    </p>
                    <p>
                        <strong>Gender:</strong> {props.character.gender}
                    </p>
                    <p>
                        <strong>Birth-year:</strong> {props.character.birth_year}
                    </p>
                    <p>
                        <strong>Hair-color:</strong> {props.character.hair_color}
                    </p>
                    <p>
                        <strong>Eye-color:</strong> {props.character.eye_color}
                    </p>
                    <p>
                        <strong>Skin-color:</strong> {props.character.skin_color}
                    </p>
                    <p>
                        <strong>Mass:</strong> {props.character.mass}
                    </p>
                    <p> 
                        <strong>Height:</strong> {props.character.height}
                    </p>
            </div>

        </div>
    )
}





export default Character;
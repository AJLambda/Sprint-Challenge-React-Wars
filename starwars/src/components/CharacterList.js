import React from 'react'
import Character from './Character'
import './StarWars.css'

const CharacterList = (props) => {
    return (

        <div className = "characterList">

            {props.characters.map(item => (
            <Character key= {item.created} character={item} />
        ))}

        </div>
    )
}




export default CharacterList;
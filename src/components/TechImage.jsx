import React from 'react';

const TechImage = (props) => {
    return(
        <div className="techImage">
            <img src={props.imgUrl} alt={props.name}/>
            <p>{props.name}</p>
        </div>
    );
}

export default TechImage;
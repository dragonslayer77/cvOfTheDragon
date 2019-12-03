import React from 'react';

const TechImage = (props) => {
    return(
        <div className="techImage">
            <img src={props.imgUrl} alt={props.name}/>
            <div>{props.name}</div>
        </div>
    );
}

export default TechImage;
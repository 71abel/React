import React from 'react';
import PropTypes from "prop-types";

function UserProfileCard (props){
    return(
        <>
           <div>
            <span>name: {props.name}</span><br/>
            <span>age: {props.age}</span><br/>
            <span>email: {props.email}</span>
           </div>
        </>
    )
}

UserProfileCard.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
};

export default UserProfileCard;


 

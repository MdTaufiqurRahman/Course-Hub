import React from 'react';

const Card = (props) => {
    const{name, price} = props.item;
    return (
        
            
            <li className="list-group-item my-2 ">
            
             <b>Course Name: </b> {name}  
                <br/>
                <br/>
               
                <p> <b>Price:</b>  ${price}</p>

            </li>
       
    );
};

export default Card;
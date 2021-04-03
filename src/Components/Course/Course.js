import React from 'react';
 import './Course.css'

const Course = (props) => {
   const{name, img, price} = props.courses;
    return (
        <div className="col-md-4">
            <div className="single-item text-center my-4">
                <div className="card p-2 display pic">
                  <img className="card-img-top" src={img} alt={name}/>
                  <div className="card-body py-3">
                  
                      <h6 className="card-title"><b>{name}</b></h6>
                   
                          
                          <p className="price">Price: ${price}</p>
                          
                            <button style={{width:'50%'}} className="btn btn-sm btn-info"
                            onClick={()=> props.addToCourse(props.courses)}>
                            Enroll Now
                                </button>
                             
                  </div>
                </div>

            </div>
           
        </div>
    );
};

export default Course;
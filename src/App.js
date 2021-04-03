import React, { useState } from 'react';

import './App.css';
import Header from './Components/Header/Header';
import Course from './Components/Course/Course';
import courses from './fakeData/fakeCourse.js';
import Card from './Components/Card/Card';

function App() {

  //  add useState
  const [course, setCourse] = useState([]);
   //  add item to cart
  const addToCourse = item => {
    const newCourse = [...course, item];
    setCourse(newCourse);
  }

  //  get total price
  const totalPrice = course.reduce((price, current) => price + current.price, 0);

  return (
    <div style={{backgroundColor:'lightcyan'}}>
      <Header></Header>

      <div style={{marginLeft:'20px'}} className="row  course-item">
        <div className="col-md-9 row display">

          {
            courses.map(courses => <Course courses={courses} addToCourse={addToCourse}></Course>)
          }
        </div>


        <div style={{marginLeft:'10px',marginTop:'20px'}} className="col-md-3">
          <h2 style={{
            fontFamily:'fantasy'
          }} className="text-center"> Order Courses: {course.length}</h2>

          <ul style={{padding:'10px', margin:'15px'}} className="list-group">
            {course.map(item => <Card item={item}></Card>)}
         </ul>
          <button style={{width:'85%', marginLeft:'20px',marginBottom:'30px'}} type="button" className="btn btn-info btn-block">
            Checkout <span className="badge badge-light">$ {totalPrice}</span>

          </button>
        </div>

      </div>

    </div>

  );
}

export default App;

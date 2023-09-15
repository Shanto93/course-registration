/* eslint-disable react/jsx-key */
import { useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards'
import Cart from './components/Cart/Cart'
import Header from './components/Header/Header'
import { useEffect } from 'react'

function App() {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);

  useEffect(() => {
    fetch('courses.json')
      .then(res => res.json())
      .then(data => setCourses(data))
  }, [])

  const handleSelect = (course) => {
    const isExist = selectedCourse.find(item => item.course_name === course.course_name);
    if(isExist){
      return alert("Already available")
    }
    else{
      let newCredit = course.credit;
      selectedCourse.forEach(item => {
        newCredit = newCredit + item.credit;
         
      })
      setTotalCredit(newCredit);
      setSelectedCourse([...selectedCourse,course]);

    }
    
  }
  
  return (
    <>
      <Header></Header>
      <div className='ml-10 flex'>
        <div className='grid grid-cols-3 gap-4'>
          {
            courses.map((course, idx) => <Cards key={idx} handleSelect={handleSelect} course={course}></Cards>)
          }
        </div>
        <div className='w-72 ml-5'>
          <Cart totalCredit={totalCredit} selectedCourse={selectedCourse}></Cart>
        </div>
      </div>


    </>
  )
}

export default App

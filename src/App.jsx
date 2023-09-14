import { useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards'
import Cart from './components/Cart/Cart'
import Header from './components/Header/Header'
import { useEffect } from 'react'

function App() {
  const [courses, setCourses] = useState([]);
  const [coursesName, setCoursesName] = useState([]);

  useEffect(() => {
    fetch('courses.json')
      .then(res => res.json())
      .then(data => setCourses(data))
  }, [])

const handleSelect = course_name => {
  // console.log("Kya Bhai,Click kar diya",course_name);
}
  return (
    <>
      <Header></Header>
      <div className='ml-10 flex'>
        <div className='grid grid-cols-3 gap-4'>
          {
            courses.map((course,idx) => <Cards key={idx} handleSelect={handleSelect} course={course}></Cards>)
          }
        </div>
        <div className='w-72 ml-5'>
          <Cart></Cart>
        </div>
      </div>



    </>
  )
}

export default App

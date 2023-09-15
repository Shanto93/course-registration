/* eslint-disable react/jsx-key */
import { useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards'
import Cart from './components/Cart/Cart'
import Header from './components/Header/Header'
import { useEffect } from 'react'

function App() {
  const [courses, setCourses] = useState([]);
  const [coursesName, setCoursesName] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch('courses.json')
      .then(res => res.json())
      .then(data => setCourses(data))
  }, [])

  const handleSelect = (course_name) => {
    const isExist = coursesName.find(item => item === course_name);

    if (isExist) {
      return alert('already exist');
    } else {
      let count = 0
      coursesName.forEach(item => {
        count = count + 1;
        setCount(count)
        console.log(count);
      })
      const newCourseName = [...coursesName, course_name];
      setCoursesName(newCourseName);

      // console.log(coursesName);

    }

  }

  // const count = coursesName.length;
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
          <div className='bg-slate-100 px-4  rounded-xl'>
            <h2 className="py-3 font-semibold text-blue-500">Credit Hour Remaining </h2>
            <hr />
            <h2 className='py-2'><b>Course Name</b></h2>
            {
              coursesName.map((coursesName) => (
                <div className='pb-3'>
                  <h2 className='details'>{coursesName}</h2>
                </div>
              ))
            }
            <hr />
            <h2 className='py-2 font-semibold'>Total Credit Hour :</h2>
            <hr />
            <h2 className='py-2 font-semibold'>Total Price :</h2>
          </div>
        </div>
      </div>


    </>
  )
}

export default App

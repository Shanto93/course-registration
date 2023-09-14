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

  const handleSelect = course_name => {
    const isExist = coursesName.find(item => item === course_name);
    let count = 0;

    if (isExist) {
      return alert('already exixst');
    } else {
      coursesName.forEach((item) =>{
        count = count + 1;
      })
      const newCourseName = [...coursesName, course_name];
      setCoursesName(newCourseName);
      setCount(count);
      // console.log(coursesName);

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
        <div className='w-72 ml-5 bg-gray-300'>
          <h2 className="pl-4 ">Credit Hour Remaining </h2>
          <p>{count} {coursesName}</p>
          {
            coursesName.map((coursesName, idx) => <Cart key={idx} count={count} coursesName={coursesName} ></Cart>)
          }
        </div>
      </div>



    </>
  )
}

export default App

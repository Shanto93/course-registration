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
  const [remainingCredit, setRemainingCredit] = useState(20);
  const [prices, setPrice] = useState(0);

  useEffect(() => {
    fetch('courses.json')
      .then(res => res.json())
      .then(data => setCourses(data))
  }, [])

  const handleSelect = (course) => {
    const isExist = selectedCourse.find(item => item.course_name === course.course_name);
    if (isExist) {
      return alert("This course is already availabe in the list.");
    } else {
      let newCredit = course.credit;
      let newPrice = course.price;
      selectedCourse.forEach(item => {
        newCredit = newCredit + item.credit;
        newPrice = newPrice + item.price;
      })

      const remainingTotal = 20 - newCredit;

      if (newCredit > 20) {
        return alert("Total Credit is more than 20 and remaining credit hour is less than 0.");
      } else {
        setTotalCredit(newCredit);
        setRemainingCredit(remainingTotal);
        setPrice(newPrice);
        setSelectedCourse([...selectedCourse, course]);
      }
    }
  }

  return (
    <>
      <Header></Header>
      <div className='ml-10 flex flex-col lg:flex-row '>
        <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4'>

          {
            courses.map((course, idx) => <Cards key={idx} handleSelect={handleSelect} course={course}></Cards>)
          }

        </div>
        <div className='mt-20 ml-0 w-72 md:mt-4  lg:mt-0 lg:ml-5'>
          <Cart totalCredit={totalCredit} remainingCredit={remainingCredit} prices={prices} selectedCourse={selectedCourse}></Cart>
        </div>
      </div>
    </>
  )
}

export default App

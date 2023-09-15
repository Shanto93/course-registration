/* eslint-disable react/jsx-key */
import './Cart.css'

const Cart = ({ selectedCourse, totalCredit }) => {

    return (
        <>
            <div className='bg-slate-100 px-4  rounded-xl'>
            <h2 className="py-3 font-semibold text-blue-500">Credit Hour Remaining </h2>
            <hr />
            <h2 className='py-2'><b>Course Name</b></h2>
            {
              // eslint-disable-next-line react/prop-types
              selectedCourse.map((courseName,idx) => (
                <div className='pb-3'>
                  <h2 key={idx} className='details'>{idx+1}. { courseName.course_name}</h2>
                </div>
              ))
            }
            <hr />
            <h2 className='py-2 font-semibold'>Total Credit Hour : {totalCredit} </h2>
            <hr />
            <h2 className='py-2 font-semibold'>Total Price :</h2>
          </div>
        </>
    );
};

export default Cart;
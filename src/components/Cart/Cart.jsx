/* eslint-disable react/jsx-key */
import PropTypes from 'prop-types'
import './Cart.css'

const Cart = ({ selectedCourse, totalCredit, remainingCredit, prices }) => {

    return (
        <>
            <div className='bg-slate-100 px-4  rounded-xl'>
                <h2 className="py-3 font-semibold text-blue-500">Credit Hour Remaining {remainingCredit} hr</h2>
                <hr />
                <h2 className='py-2'><b>Course Name</b></h2>
                {
                    // eslint-disable-next-line react/prop-types
                    selectedCourse.map((courseName, idx) => (
                        <div className='pb-3'>
                            <h2 key={idx} className='details'>{idx + 1}. {courseName.course_name}</h2>
                        </div>
                    ))
                }
                <hr />
                <h2 className='py-2 font-semibold'>Total Credit Hour : {totalCredit} </h2>
                <hr />
                <h2 className='py-2 font-semibold'>Total Price : {prices} USD</h2>
            </div>
        </>
    );
};

Cart.propTypes = {
    selectedCourse: PropTypes.func.isRequired,
    totalCredit: PropTypes.func.isRequired,
    remainingCredit: PropTypes.func.isRequired,
    prices: PropTypes.func.isRequired
}
export default Cart;
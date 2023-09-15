import './Cart.css'

const Cart = ({ coursesName }) => {

    return (
        <>
            <div className='bg-red-300'>
                
                <div className=''>
                    <h2 className='pl-4'>{coursesName}</h2>
                    <hr />
                </div>

            </div>


        </>
    );
};

export default Cart;
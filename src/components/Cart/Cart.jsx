import './Cart.css'

const Cart = ({coursesName, count}) => {
    return (
        <>
            <h2 className='pl-4 mt-2'>{count} {coursesName}</h2>
        </>
    );
};

export default Cart;
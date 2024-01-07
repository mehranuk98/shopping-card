import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { increment,decrement,removeFromCart,clearCart } from "../redux/cart/action";
import Swal from 'sweetalert2';


const ShoppingCart = () => {

    const {cart} = useSelector((state => state.shoppingCart))
    const dispatch =  useDispatch()

    const handleIncrement = (productId) => {
        dispatch(increment(productId))
        Swal.fire({
            title: 'Quantity increase succesfully',
            icon: 'success',
            toast: 'true',
            timer: 3000,
            timerProgressBar:true,
            position:'top'

          })
    }

    const handleDecrement = (productId) => {
        dispatch(decrement(productId))
        Swal.fire({
            title: 'Quantity decrease succesfully',
            icon: 'success',
            toast: 'true',
            timer: 3000,
            timerProgressBar:true,
            position:'top'

          })
    }    

    const handleRemoveFromCart = (productId) => {
        dispatch(removeFromCart(productId))
        Swal.fire({
            title: 'Product Has Been Removed',
            icon: 'error',
            toast: 'true',
            timer: 3000,
            timerProgressBar:true,
            position:'top'

          })
    }

    const handleClearCart = () => {
        dispatch(clearCart())
        Swal.fire({
            title: 'Cart Has Been Cleard',
            icon: 'warning',
            showConfirmButton:false,
            toast: 'true',
            timer: 3000,
            timerProgressBar:true,
            position:'top'

          })
    }

    return(
      <>
      {cart.length === 0 ? (
        <div className="container mt-5 text-center">
            <div>
                <i className="bi bi-cart-x-fill" style={{fontSize: '170px'}}></i>
                <h3 className="text-bold">Cart is epmty</h3>
                <Link className="btn btn-outline-dark mt-2" to='/products'>Products</Link>
            </div>
        </div>
      ) : (
        <div className="container">
            <div className="row mt-5">
                <div className="col-lg-12 pl-3 pt-3">
                    <table className="table table-hover border bg-white">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th style={{width: '10%'}}>Quantity</th>
                                <th style={{width: '10%'}}>Subtotal</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            {cart && cart.map(product => (
                                    <tr key={product.id}>
                                    <td className="align-middle">
                                        <div className="row">
                                            <div className="col-lg-2">
                                                <img 
                                                    src={product.image}
                                                    alt='...'
                                                    className="img-fluid"
                                                />
                                            </div>
                                            <div className="col-md-10">
                                                <h5>{product.name}</h5>
                                                <p>{product.description}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="align-middle">{product.price}</td>
                                    <td className="align-middle">
                                        <button onClick={() => handleIncrement(product.id)} className="btn btn-sm btn-dark me-2">+</button>
                                        <span>{product.qty}</span>
                                        <button onClick={() => handleDecrement(product.id)} className="btn btn-sm btn-dark ms-2">-</button>
                                    </td>
                                    <td className="align-middle">{product.price * product.qty}</td>
                                    <td className="align-middle" style={{width: '15%'}}>
                                        <button onClick={() => handleRemoveFromCart(product.id)} className="btn btn-danger btn-sm">delete</button>
                                    </td>
                                    
                                </tr> 
                            ))}
                        
                        </tbody>
                        <tfoot className="table-group-divider">
                            <tr>
                                <td>   
                                    <button onClick={() => handleClearCart()}  className="btn btn-dark">Clear cart</button>
                                </td>
                                <td colSpan="2"></td>
                                <td>
                                    <strong>Total : {cart.reduce((total,product) => {
                                        return total + product.price * product.qty
                                    },0)}</strong>
                                </td>
                                <td>
                                    <Link className="btn btn-success">CheckOut</Link>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>)}
    </>
    )
}

export default ShoppingCart;
import { useSelector } from 'react-redux';
import {Link, NavLink} from 'react-router-dom'
const Header = () => {

    const {cart} = useSelector((state => state.shoppingCart))
 
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Mehran React</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <NavLink className={(navData)=> navData.isActive ? 'nav-link active' : 'nav-link'}  to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/products">Products</NavLink>
                    </li>
                </ul>
                <ul className='navbar-nav ms-auto'>
                    <li className='nav-item'>
                        <NavLink className='nav-link p-1 me-2' to='/cart'>
                        <button type="button" className="btn btn-primary position-relative">
                                <i className='bi bi-basket-fill fs-5'></i>
                            <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger badge rounded-circle">
                                {cart.length}
                            </span>
                        </button>
                        </NavLink>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;
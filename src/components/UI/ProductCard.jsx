
import {motion} from 'framer-motion'
import '../../styles/product-card.css'
import { Col } from 'reactstrap';
import {Link, redirect, useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { addItem } from '../../redux/slices/cartSlice';
import { toast} from 'react-toastify'
import { getAunthentication } from '../../redux/slices/loginSlice';

const ProductCard = ({item, checkAuth}) => {
  const dispatch=useDispatch()
  const isAuthenticated=useSelector(getAunthentication)
  const navigate=useNavigate()


  
 
  const addToCart=()=>{
    dispatch(addItem({
    id:item.id,
    productName:item.productName,
    price:item.price,
    imgUrl:item.imgUrl
  }))
  toast.success('product added successfully')
}
 


  return (
   <Col lg="3" md="4" className='mb-2'>
    <div className="product__item">
    <div className="product__img">
        <motion.img whileHover={{scale:0.9}} src={item.imgUrl} alt="" />
    </div>
    <div className='p-2 product__info'>
    <h3 className="product__name">{item.productName}</h3>
    <span>{item.category.title}</span>
    </div>
    <div className="product__card-bottom d-flex align-items-center justify-content-between p-2">
        <span className="price">Ksh.{item.price}</span>
        <motion.span whileTap={{scale:1.2}}><i className="ri-add-line" onClick={addToCart}></i></motion.span>
    </div>
    {/* id is used to switch between product details */}
    <div className='d-flex align-items-center justify-content-center mt-4'>
      {isAuthenticated?<Link to={`/shop/${item.id}`} whileTap={{scale:1.1}} className="btn btn-sm rounded-pill btn-primary">view</Link>:
      <Link to="/login"  className="btn btn-sm rounded-pill btn-danger" onClick={()=>toast.error("You must log in")}>view</Link>}
    </div>
   </div>
   </Col>
  );
}

export default ProductCard;

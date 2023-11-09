import React, {useState, useEffect} from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row,Col } from 'reactstrap';
import '../styles/home.css'
import {Link, useNavigate} from 'react-router-dom'
import {motion} from 'framer-motion'
import Services from '../services/Services';
import ProductsList from '../components/UI/ProductsList';
// import products from '../assets/data/products'
import counterImg from  '../assets/images/counter-timer-img.png'
import Clock from '../components/UI/Clock';
import Trending from '../components/Trending';
import { useSelector, useDispatch} from 'react-redux';
import { getStatus, getError, selectAll, fetchProducts} from '../redux/slices/product';
import Spinner from '../components/Spinner';
import {toast} from 'react-toastify'



const Home = () => {

  const status=useSelector(getStatus)
  const error=useSelector(getError)
  const products=useSelector(selectAll)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const year= new Date().getFullYear()
  const [trendingProducts, setTrendingProducts]= useState([])
  const [bestSalesProducts, setBestSalesProducts]=useState([])
  const [mobileProducts, setMobileProducts]=useState([])
  const [wirelessProducts, setWirelessProducts]=useState([])
  const [popularProducts, setPopularProducts]=useState([])

  useEffect(()=>{
    if(status==="idle"){
      dispatch(fetchProducts())
    }
  },[status, dispatch])

  if(status==="loading"){
    <Spinner/>  
  }else if(status==="error"){
    <h3 className='text-center'>{error}</h3>
  }

  if(products.length===0){
    return <Spinner/>
  }
  useEffect(()=>{
    if(products.length>0){
    const filteredTrendingProducts=products.filter(
      (item)=>item.category?.title==='chair'
    )
    const filteredBestSalesProducts=products.filter(
      (item)=>item.category?.title==='sofa'
    )
    const filteredMobileProducts=products.filter(
      (item)=>item.category?.title==='mobile'
    )
    const filteredWirelessProducts=products.filter(
      (item)=>item.category?.title==='wireless'
    )
    const filteredPopularProducts=products.filter(
      (item)=>item.category?.title==='watch'
    )
    setTrendingProducts(filteredTrendingProducts)
    setBestSalesProducts(filteredBestSalesProducts)
    setMobileProducts(filteredMobileProducts)
    setWirelessProducts(filteredWirelessProducts)
    setPopularProducts(filteredPopularProducts)
    }
  },[products])

  
  
  return <> {products.length>0 ?(<Helmet title={'Home'}>
    <section className="hero__section">
      <Container>
        <Trending products={products} year={year}/>
      </Container>
    </section>
    <Services/>
    <section className="trending__products">
      <Container>
        <Row>
          <Col lg="12" className='text-center'>
            <h2 className="section__title">Trending Products</h2>
          </Col>
          <ProductsList data={trendingProducts}/>
        </Row>
      </Container>
    </section>
    <section className="best__sales">
      <Container>
      <Row>
          <Col lg="12" className='text-center'>
            <h2 className="section__title">Best Sales</h2>
          </Col>
          <ProductsList data={bestSalesProducts} />
         
        </Row>
      </Container>
    </section>
    <section className="timer__count">
      <Container>
        <Row>
        <Col lg="6" md="12" className="count__down-col">
        <div className="clock__top-content">
          <h4 className='text-white fs-6 mb-2'>Limited Offers</h4>
          <h3 className='text-white fs-5 mb-3'>Quality Armchair</h3>
        </div>
          {/* <Clock/> */}
          <motion.button whileTap={{scale:1.2}} className="buy__btn store__btn"><Link to='/shop'>Visit Store</Link></motion.button>
        </Col>
          <Col lg="6" md="12" className="text-end counter__img">
          <img src={counterImg} alt="" />
          </Col>
          
        </Row>
      </Container>
    </section>
    <section className="new__arrivals">
    <Container> 
      <Row>
        <Col lg="12" className='text-center mb-5'>
          <h2 className="section__title">New Arrivals</h2>
      </Col>
      <ProductsList data={mobileProducts} />
      <ProductsList data={wirelessProducts} />
      </Row>
    </Container> 

    </section>
    <section className="popular__category">
      <Container> 
      <Row>
        <Col lg="12" className='text-center mb-5'>
          <h2 className="section__title">Popular in Category</h2>
      </Col>
      <ProductsList data={popularProducts} />
     
      </Row>
    </Container> 
    </section>
    
  </Helmet>): <Spinner/>
}
</>
}

export default Home;

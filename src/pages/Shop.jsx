import React, {useState} from 'react';
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection';
import { Container, Row,Col } from 'reactstrap';
import '../styles/shop.css'
// import products from '../assets/data/products'
import ProductsList from '../components/UI/ProductsList'
import {useSelector, useDispatch} from 'react-redux'
import { selectAll } from '../redux/slices/product';
import Spinner from '../components/Spinner';

const Shop = () => {
  const products=useSelector(selectAll)
  const [productsData, setProductsData]= useState(products)
  
  const handleFilter=e=>{
    const {value}= e.target
    if(value==="sofa"){
      const filteredProducts=products?.filter(item=>item.category?.title==='sofa')
      setProductsData(filteredProducts)
    }else if(value==="chair"){
      const filteredProducts=products?.filter(item=>item.category?.title==='chair')
      setProductsData(filteredProducts)
    }else if(value==='mobile'){
      const filteredProducts=products?.filter(item=>item.category?.title==='mobile')
      setProductsData(filteredProducts)
    }else if(value==='wireless'){
      const filteredProducts=products?.filter(item=>item.category?.title==='wireless')
      setProductsData(filteredProducts)
    }else if(value==='watch'){
      const filteredProducts=products?.filter(item=>item.category?.title==='watch')
      setProductsData(filteredProducts)
    }else{
      setProductsData(products)
    }
  }

  const handleSearch=e=>{
    const {value}= e.target
    const searchedProducts=products?.filter(item=>
      item.productName.toLowerCase().includes(value.toLowerCase()))
      setProductsData(searchedProducts)
  }
  return <> {products.length>0 ? (
    <div> <Helmet title='Shop'>
      <CommonSection title={'Products'}/>
      <section>
        <Container>
          <Row>
            <Col lg="3" md="6">
                <div className="filter__widget">
                  <select onChange={handleFilter}>
                  <option value="">Fileter By Category</option>
                    <option value="sofa">Sofa</option>
                    <option value="chair">Chair</option>
                    <option value="mobile">Mobile</option>
                    <option value="watch">Watch</option>
                    <option value="wireless">Wireless</option>
                  </select>
                </div>
            </Col>
            <Col lg="3" md="6">
            <div className="filter__widget">
                  <select>
                  <option value="">Sort By</option>
                    <option value="ascending">Ascending</option>
                    <option value="descending">Descending</option>
                  </select>
                </div>
            </Col>
            <Col lg="6" md="12">
                <div className="search__box">
                  <input type="text"  placeholder='search...' onChange={handleSearch}/>
                  <span>
                    <i className='ri-search-line'></i>
                  </span>
                </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='pt-0'>
      <Container>
      <Row>
      {
      productsData.length===0? <h1 className="text-center">No Products Found!!!</h1>:
      <ProductsList data={productsData}/>
      }
      </Row>
      </Container>
      </section>
    </Helmet>
    
    </div>
  ):<Spinner/>
  }
  </>
}

export default Shop;

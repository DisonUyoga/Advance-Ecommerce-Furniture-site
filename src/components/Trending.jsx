
import {Col, Row} from 'reactstrap'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import heroImg from '../assets/images/hero-img.png'
import '../styles/home.css'
import './AnimatedLetters'
import AnimatedLetters from './AnimatedLetters';
import {useState, useEffect} from 'react'

const Trending = ({products, year}) => {
  const [letterClass, setLetterClass]= useState("text-animate")
  const scoreArr=products?.map(item=>parseInt(item.total_rating))   


  const max_score=Math.max(...scoreArr)
  const trending_item=products?.filter(item=>parseInt(item.total_rating)===parseInt(max_score))
  
  const {
    imgUrl,
    description
  }=trending_item[0]

  const image =imgUrl ?? heroImg
  
  const desc =description ?? <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia esse molestias commodi praesentium labore possimus ratione vero aut laborum consequatur?</p>
  const title="Make Your Interior More Minimalistic & Modern"
  const descArray=[]

  if(title){
    for(const i in title){
      descArray.push(title[i])
    }
  }

  useEffect(()=>{
    setTimeout(()=>{
      setLetterClass("text-animate-hover")
    }, 4000)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  
  return <Row>
      <Col lg='6' md='6'>
            <div className="hero__content">
              <p className="hero__subtitle">Trending product in {year}</p>
              <h1>
                <AnimatedLetters
                strArray={descArray}
                letterClass={letterClass}
                idx={15}
                />
              </h1>
              <p>
              {desc}
              </p>
              <motion.button 
              whileTap={{scale:1.2}} 
              className="buy__btn">
              <Link to="/shop">
              SHOP NOW
              </Link>
              </motion.button>
            </div>
          </Col>
          <Col lg='6'
          md='6'>
            <div className="hero__i">
              <img src={image} alt="heroImg" />
            </div>
          </Col>
        </Row>;
}

export default Trending;

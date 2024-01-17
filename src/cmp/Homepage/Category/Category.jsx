import React from 'react'
import "./Category.css"
import { Col,Container,Row } from 'react-bootstrap'


const data=["q","s","ef","ef"]
const Colum=()=>{
  return <>
    <Col></Col>
  </>
}
 
const Category = () => {
  return (
   <>
   <Container>
    <Row>
      
      {
      data.map((item)=>{
        return <Colum />

      })
      }


     
    </Row>
   </Container>
   

   </>
  )
}

export default Category
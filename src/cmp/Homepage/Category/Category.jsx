import React from 'react'
import "./Category.css"
import { Col,Container,Row ,Card ,} from 'react-bootstrap'
import CategoryData from "../../../json-api/Category"



const Colum=(data)=>{
  return <>
    <Col md className='px-4 mt-4 mt-md-0'>
    <Card style={{ width: '13rem' }}>
      
      <Card.Body className='text-center py-4'>
      <div className="icon d-flex justify-content-center align-items-center ">
        <i className={data.catData.icon} style={{fontSize:"50px"}}></i>
      </div>
        <Card.Title>{data.catData.title}</Card.Title>
        <Card.Text>
       {data.catData.desc}
        </Card.Text>
    
      </Card.Body>
    </Card>


    </Col>
  </>
}
 
const Category = () => {
  return (
   <>
   <Container className='cat-box'>
    <Row>
      
      {
      CategoryData.map((item)=>{
        return <Colum  catData={item} id={item.id}/>

      })
      }


     
    </Row>
   </Container>
   

   </>
  )
}

export default Category
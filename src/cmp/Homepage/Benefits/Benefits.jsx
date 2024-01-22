import React from 'react'
import "./Benefits.css"
import {Col ,Row ,Container} from "react-bootstrap";

const data=[{icon:"fa fa-check",
title:"Sketck Heift",
desc:"qwertyuiopasdfghjklzxcvb"},

{icon:"fa fa-edit",
title:"Sketck Heift",
desc:"qwertyuiopasdfghjklzxcvb"},

{icon:"fa fa-share",
title:"Sketck Heift",
desc:"qwertyuiopasdfghjklzxcvb"},]

const Benefits = () => {

    const List=(data)=>{
      return (
        <>
        <div className='d-flex hero mb-4 '>
          <div>
            <div  className="icon-box d-flex justify-content-center align-items-center">
            <i className={data.Catdata.icon} ></i>
</div>
            </div>
            <div className='px-3 '>
              <h5>{data.Catdata.title}</h5>
              <p className="w-25"> {data.Catdata.desc}
              </p>
            </div>
         
          </div>

        </>
      )
    }
  return (
    <Container>
      <Row >
        <Col md className='  px-4 d-flex flex-column align-items-center justify-content-center'>

        {
          data.map((item)=>{
            return <List Catdata={item}/>
          })
        }
          
        </Col>
        <Col  md className=' md px-4'>
        <img  src="man.jpg" className='rounded-circle  man-pic' width="80%"/>
        </Col>
      </Row>
    </Container>
  
  )
}

export default Benefits
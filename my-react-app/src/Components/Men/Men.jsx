import { Card , Col, Row} from 'react-bootstrap';
import 'bootstrap'
import './Men.css'
import { Fragment } from "react";

export default function Men() {
    const menObj = [{id:"1" , image: "src/assets/Images/men1.jpg"},
    {id:"2" , image: "src/assets/Images/men2.jpg"},
    {id:"3" , image: "src/assets/Images/men3.jpg"}];
  return (
    <Fragment>
        <Row className='card__part'>
          {
            menObj.map((p)=>{
              return (
                <Col key={p.id} lg={4}>
                <Card>
                  <Card.Img src={p.image}/>                  
                </Card>
              </Col>
              )
            })
          }
        </Row>
    </Fragment>
  )
}

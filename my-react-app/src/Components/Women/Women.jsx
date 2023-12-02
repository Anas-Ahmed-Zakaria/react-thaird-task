import { Card , Col, Row} from 'react-bootstrap';
import 'bootstrap'
import './Women.css'
import { Fragment } from "react";

export default function Women() {
    const womenObj = [{id:"4" , image: "src/assets/Images/woman1.jpg"},
    {id:"5" , image: "src/assets/Images/women2.jpg"},
    {id:"6" , image: "src/assets/Images/women3.jpg"}];
  return (
    <Fragment>
        <Row className='card__part'>
          {
            womenObj.map((k)=>{
              return (
                <Col key={k.id} lg={4}>
                <Card>
                  {<Card.Img src={k.image}/>}
                </Card>
              </Col>
              )
            })
          }
        </Row>
    </Fragment>
  )
}

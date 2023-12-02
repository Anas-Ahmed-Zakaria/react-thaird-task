import './Kids.css'
import 'bootstrap'
import 'react-bootstrap'
import { Card, Col, Row } from 'react-bootstrap'
export default function Kids() {
    const kidsObj = [
        {id: "7" , image: "src/assets/Images/kids1.jpg"},
        {id: "8" , image: "src/assets/Images/kids2.jpg"},
        {id: "9" , image: "src/assets/Images/kids3.jpg"},
    ]
  return (
    <>
    <Row className='card__part'>
        {kidsObj.map((p)=>{
            return (
                <Col key={p.id} md={4}>
                    <Card>
                        <Card.Img src={p.image}/>
                    </Card>
                </Col>
            )
        })}
    </Row>
    </>
  )
}

import  { Container, Row, Col, Image} from 'react-bootstrap'
import React from 'react' 

function Page() {
return (
<Container style={{ marginTop: "40px", textAlign: "center" }}>
    <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly"}} >
        <Row>
            <Col xs=".5" >
                <Image src="https://www.instacart.com/image-server/100x/www.instacart.com/assets/domains/warehouse/logo/12/2774c343-1319-4720-a54f-0c46e93f956c.png" roundedCircle />
            </Col>
            <Col>
                <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
                <p>Delivery * Pickup</p>
            </Col>
        </Row>
        <Col sm="1"></Col>
        <Row >
            <Col xs=".5">
                <Image src="https://www.instacart.com/image-server/60x60/www.instacart.com/assets/domains/warehouse/logo/264/c9077730-b4b5-4121-a890-2de243af1ac7.jpg" roundedCircle />
            </Col>
            <Col>
                <h5 style={{ fontWeight: "bold" }}> The Fresh Market</h5>
                <p>Delivery * Pickup</p>
            </Col>
        </Row>
        <Col sm="1"></Col>
        <Row >
            <Col xs=".5" >
                <Image src="https://www.instacart.com/image-server/100x/www.instacart.com/assets/domains/warehouse/logo/1925/d6846335-4e58-4fbd-b460-5d7e3266683e.jpg" roundedCircle />
            </Col>
            <Col md="6">
                <h5 style={{ fontWeight: "bold" }}>Harris Teeter</h5>
                <p>Delivery</p>
            </Col>
        </Row>
    </Row>
</Container>
)
}
export default Page
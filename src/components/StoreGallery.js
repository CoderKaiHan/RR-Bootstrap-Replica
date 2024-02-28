import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import SamLogo from '../assets/SamLogo';

const StoreGallery = () =>{
    return (
        <Container >
            <h2>Browse stores in Houston</h2>
            <Row>
                <Col style={{display:"flex", borderBottom: "1px solid #a7a2a2", marginRight: "30px", paddingTop: "50px"}}>
                <Image style={{ height: "55px", width: "50px", border: "1px solid #E8E9EB" }} src="https://d2d8wwwkmhfcva.cloudfront.net/96x96/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/12/2774c343-1319-4720-a54f-0c46e93f956c.png" roundedCircle />
                <div style={{textAlign:"left", paddingLeft: "10px"}}>
                    <h5>ALDI</h5>
                    <p>Delivery • Pickup</p>
                </div>
                </Col>
                <Col style={{display:"flex", borderBottom: "1px solid #a7a2a2", marginRight: "30px", paddingTop: "50px"}}>
                <Image style={{ height: "55px", width: "50px", border: "1px solid #E8E9EB" }} src="https://d2d8wwwkmhfcva.cloudfront.net/96x96/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/279/0d43b5d2-9d07-4a30-a0ee-0e16d5922411.png" roundedCircle />
                <div style={{textAlign:"left", paddingLeft: "10px"}}>
                    <h5>Sprouts Farmers Marke</h5>
                    <p>Delivery • Pickup</p>
                </div>
                </Col>
                <Col style={{display:"flex", borderBottom: "1px solid #a7a2a2", marginRight: "30px", paddingTop: "50px"}}>
                <Image style={{ height: "55px", width: "50px", border: "1px solid #E8E9EB" }} src="https://1000logos.net/wp-content/uploads/2021/03/Kroger-logo.jpg" roundedCircle />
                <div style={{textAlign:"left", paddingLeft: "10px"}}>
                    <h5>Kroger</h5>
                    <p>Delivery</p>
                </div>
                </Col>
            </Row>
            <Row>
            <Col style={{display:"flex", borderBottom: "1px solid #a7a2a2", marginRight: "30px", paddingTop: "50px"}}>
                <Image style={{ height: "55px", width: "50px", border: "1px solid #E8E9EB" }} src="https://d2d8wwwkmhfcva.cloudfront.net/96x96/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/45/d10d0f4b-1fca-4b84-bc19-bbf492c040da.png" roundedCircle />
                <div style={{textAlign:"left", paddingLeft: "10px"}}>
                    <h5>H-E-B</h5>
                    <p>Delivery</p>
                </div>
                </Col>
                <Col style={{display:"flex", borderBottom: "1px solid #a7a2a2", marginRight: "30px", paddingTop: "50px"}}>
                <Image style={{ height: "55px", width: "50px", border: "1px solid #E8E9EB" }} src={SamLogo} roundedCircle />
                <div style={{textAlign:"left", paddingLeft: "10px"}}>
                    <h5>Sam's Club</h5>
                    <p>Delivery</p>
                </div>
                </Col>
                <Col style={{display:"flex", borderBottom: "1px solid #a7a2a2", marginRight: "30px", paddingTop: "50px"}}>
                <Image style={{ height: "55px", width: "50px", border: "1px solid #E8E9EB" }} src="https://1000logos.net/wp-content/uploads/2021/04/Costco-logo.png" roundedCircle />
                <div style={{textAlign:"left", paddingLeft: "10px"}}>
                    <h5>Costco</h5>
                    <p>Delivery</p>
                </div>
                </Col>
            </Row>
        </Container>
    );
}

export default StoreGallery;
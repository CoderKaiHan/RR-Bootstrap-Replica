import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'react-bootstrap/Image';
import FlagLogo from '../assets/FlagLogo';

const Banner = () =>{
    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <div>
                <Card style={{ width: "70vw", minHeight: "428px", marginBottom: "50px", backgroundColor: "#DEEED6", border: "none", borderRadius: 0}}>
                    <div style={{display: "flex", justifyContent: "start", margin: "40px 0 0 20px", }}>
                      <Dropdown>
                        <Dropdown.Toggle variant="info"  id="dropdown-basic" style={{backgroundColor: "white", borderColor:"#a7a2a2"}}>
                          <Image src={ FlagLogo } style={{width: "20px", height: "20px"}} roundedCircle/>
                        </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Have</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">A</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Wonderful Day!</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                    <div style={{ top: "auto", width: "578px", marginLeft: "10vw", marginBottom: "50px", marginTop: "35px"}}>
                        <Card.Text style={{ fontSize: "2.5em", fontWeight: "bold", textAlign: "left" }}>
                            Order groceries for delivery <br /> or pickup today
                        </Card.Text>
                        <Card.Text style={{ fontSize: "1em", textAlign: "left" }}>
                            Whatever you want from local stores, brought right to your door.
                        </Card.Text>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control size="lg" type="text" placeholder="   Enter your address                                                              ->" />
                            </Form.Group>
                        </Form>
                    </div>
                </Card>
            </div>
            <div >
                <img style={{ height: "428px", width: "30vw", position: "absolute", backgroundSize: "contain", backgroundRepeat: "no-repeat" }} src="https://d2d8wwwkmhfcva.cloudfront.net/1500x1520/d2guulkeunn7d8.cloudfront.net/assets/homepage/homepage-mobile-background-m3-high-res-ca3279087ea0a3337f671b694b196d43fd207443d5825e61295b0996974835e9.jpg" alt="Card" />
            </div>
        </div>
    );
}

export default Banner;
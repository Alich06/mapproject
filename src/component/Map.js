import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useEffect, useState } from "react";
import axios from "axios";
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';

function Map({ map }) {
    //const map = useParams();
    const [myData, setMyData] = useState([]);
    const [isError,setIsError]= useState("");
    useEffect(() => {
        axios
            .get("http://sharesensation-backend.herokuapp.com/api/user_activity/")
            .then((res) => setMyData(res.data.results))
            .catch((error) => setIsError(error.message));
                //console.log("~ file:App.jsx ~ line 40 ~ useEffect ~ res", res.data)
            
    }, []);

    return (
        <>
         <Container fluid >
                <Row className="justify-content-center mb-5">
                    <Col md="auto"><b>NAV BAR</b></Col>
                    {isError !== "" && <h2>{isError}</h2>}
                </Row>
                <Row>
                    <Col>
                        <Row>
            {myData.map((results) => {
                const { id, title, description, activity_name, prices,images} = results;
                //const test='https://picsum.photos/id/237/300/310'
                //console.log(images);
                return (
                    <Col sm={6} key={id}>
                              <div>
                              <h6><Badge bg="light" text="dark" style={{position:'absolute', marginTop:7, marginLeft:7}}>{activity_name}</Badge></h6>
                                <img src="https://picsum.photos/id/237/300/310" className="img-rounded" alt="..."></img> 
                                {/* <img src={ali} className="img-rounded" alt="..."></img>    */}             
                                </div>
                                <p>
                                <b>{title}</b>
                                <p style={{marginBottom:0}}>{description}</p>
                                <p><b>Price:$</b>{prices[0].total_price}</p>
                                </p>
                             
                    </Col>
                );
            })}
                        </Row>
                    </Col>

                    
                    <Col md="auto" style={{ marginRight: 5 }}  >
                        <div className="card" style={{
                            top: 0,
                            bottom: 0,
                            position: 'sticky',
                            overflowY: 'scroll',
                            overflowX: 'hidden',
                        }} >
                            {
                                map === undefined ? (

                                    <iframe
                                        width="800px"
                                        height="1800px"
                                        id="gmap_canvas"
                                        src={
                                            "https://maps.google.com/maps?q=" +
                                            "asia" +
                                            "&t=&z=12&ie=UTF8&iwloc=&output=embed"
                                        }
                                        frameBorder="0"
                                        scrolling="no"
                                        marginHeight="0"
                                        marginWidth="0"
                                    ></iframe>
                                ) : (

                                    <iframe
                                        width="1160"
                                        height="970"
                                        id="gmap_canvas"
                                        src={
                                            "https://maps.google.com/maps?q=" +
                                            map +
                                            "&t=&z=12&ie=UTF8&iwloc=&output=embed"
                                        }
                                        frameBorder="0"
                                        scrolling="no"
                                        marginHeight="0"
                                        marginWidth="0"
                                    ></iframe>
                                )
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};
export default Map;

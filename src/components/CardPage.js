import React from "react";
import {Col, Container, Row} from "reactstrap";
import {AiOutlinePlayCircle} from "react-icons/all";
import {Link} from "react-router-dom";

export default function CardPage() {
    return (
        <>
            <Container className="d-flex justify-content-center">
                <Row>
                    <Col md={12} sm={12}>
                        <div className="card1 d-flex justify-content-center align-items-center text-center">
                            <div>
                                <div className="img">
                                    <img src="./img/I`am5.jpg" alt=""/>
                                </div>
                                <div className="text">
                                    <h1 style={{color: '#2833bb'}}>Azamat Azadov</h1>
                                    <p>Web Fullstack developer</p>
                                </div>
                                <div className="social d-flex justify-content-center align-content-center">
                                    <div className="icon facebook align-items-center d-flex justify-content-center">
                                        <a href="https://www.facebook.com/azamat.azadov.9/">
                                            <i className="fa fa-facebook"/>
                                        </a>
                                    </div>
                                    <div className="icon intagram align-items-center d-flex justify-content-center">
                                        <Link to='/video'>
                                            <AiOutlinePlayCircle size={30}/>
                                        </Link>
                                        {/*<a href="https://www.instagram.com/azadov_azamat_life/">*/}
                                        {/*    <i className="fa fa-instagram"/>*/}
                                        {/*</a>*/}
                                    </div>
                                    <div className="icon telegram align-items-center d-flex justify-content-center">
                                        <a href="https://t.me/azadov_azamat">
                                            <i className="fa fa-telegram"/>
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";

//Importing Modal
import ModalSection from '../../components/common/ModalSection';

//Import Image
// import img1 from "../../assets/images/bg-home.jpg";

class Section extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false
        }
        this.callModal.bind(this)
    }

    callModal = () => {
        this.refs.child.openModal();
    }
    
    render() {
        return (
            <React.Fragment>
                <section className="bg-home" id="home">
                    <div className="bg-overlay"></div>
                    <div className="home-center">
                        <div className="home-desc-center">
                            <Container>
                                <Row className="row justify-content-center">
                                    <Col lg="10" className="text-center">
                                        <h6 className="home-title text-white">We help to grow your Contractor work.</h6>
                                        <p className="pt-4 home-sub-title text-white mx-auto">Tankar Computer help about your all e-tendering activities. Here you can prepare your Estimate and DTP. We do all types of Regestration.</p>
                                    </Col>
                                </Row>
                                {/* Render ModalSection Component for Modal */}
                            <ModalSection ref="child" channel='vimeo' videoId='99025203' />
                            </Container>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Section;
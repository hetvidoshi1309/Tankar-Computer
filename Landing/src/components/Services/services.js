import React, { Component } from 'react';
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";

//Import Service Box
import ServiceBox from "./service-box";

class Services extends Component {
    state = {
        services : [
            { title : "Digital Key", icon : "mbri-code", description : "We create, upload, fill out, and open your tender using a digital key known as an e-token." },
            { title : "Online Tendering", icon : "mbri-features", description : "We will assist you in creating, uploading, filling out, and opening your tender." },
            { title : "Regestration", icon : "mbri-growing-chart", description : "Our company will assist you with GST, MSME, and GEM registration for online tendering." },
        ],
        services1 : [
            { title : "Estimate & DTP", icon : "mbri-photos", description : "This will assist you in preparing an estimate as well as a draft tender paper (DTP) for your tenders." },
            { title : "Computer Job Work", icon : "mbri-responsive", description : "We will assist you with gujarati and English typing, page design, and other computer-related tasks." },
            { title : "Printing & Xerox", icon : "mbri-download", description : "Other services provided by our company include printing, xeroxing, and lamination." },
        ],
        
    }
    render() {
        return (
            <React.Fragment>
        <section id="service" className="section">
            <Container>
            <SectionTitle title1="Best" title2="Services" />
                <Row className="pt-4 mt-4">
                <ServiceBox services={this.state.services} />
                </Row>
                <Row>
                <ServiceBox services={this.state.services1} />
                </Row>
            </Container>
        </section>
            </React.Fragment>
        );
    }
}

export default Services;
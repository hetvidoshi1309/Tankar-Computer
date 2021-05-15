import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import GoogleMapReact from 'google-map-react';

//Import Footer link
import FooterLinks from "./footer-links";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Footer extends Component {

    static defaultProps = {
        center: {
          lat: 22.72533,
          lng: 71.62872
        },
        zoom: 15
    };

    state = {
        footerItems : [
            { title : "about Linexon" ,
                links : [
                    { linkTitle : "About Us", link : "#" },
                    { linkTitle : "Features", link : "#" },
                    { linkTitle : "Services", link : "#" },
                    { linkTitle : "Client", link : "#" },
                    { linkTitle : "Team", link : "#" },
                    { linkTitle : "Contact Us", link : "#" },
                ]
            },
            // { title : "Address" ,
            //     links : [
            //         { linkTitle : "Blog", link : "#" },
            //         { linkTitle : "Help Center", link : "#" },
            //         { linkTitle : "Academy", link : "#" },
            //         { linkTitle : "Video Terms", link : "#" },
            //         { linkTitle : "Monitoring Grader", link : "#" },
            //         { linkTitle : "Linexon API", link : "#" },
            //     ]
            // },
            // { title : "more info" ,
            //     links : [
            //         { linkTitle : "Pricing", link : "#" },
            //         { linkTitle : "For Marketing", link : "#" },
            //         { linkTitle : "For CEOs", link : "#" },
            //         { linkTitle : "For Agencies", link : "#" },
            //         { linkTitle : "Our Apps", link : "#" },
            //     ]
            // },
        ]
    }
    render() {
        return (
            <React.Fragment>
            <section className="section bg-light"> 
            <Container>
                <Row>
                    <Col lg="4">
{/* 
                        <p className="text-uppercase footer-title">Help center</p>
                        <ul className="list-unstyled company-sub-menu">
                            <li><Link to="#">Accounting </Link></li>
                            <li><Link to="#">Billing</Link></li>
                            <li><Link to="#">General Question</Link></li>
                        </ul>  */}

                        <div style={{ height: '230px', width: '300px' }}>
                            <GoogleMapReact
                            // bootstrapURLKeys={{ key: AIzaSyCEuNVNDq1Wa9Cc9xstGnCXH3ygRWy8sjQ }}
                            defaultCenter={this.props.center}
                            defaultZoom={this.props.zoom}
                            >
                             
                            <AnyReactComponent
                                lat={22.72533}
                                lng={71.62872}
                                text="Tankar Computer"
                            />
                            </GoogleMapReact>
                        </div> 
                    </Col>
                    {
                        this.state.footerItems.map((item, key) =>
                    <Col lg="2" key={key}>
                        <p className="text-uppercase footer-title">{item.title}</p>
                        <ul className="list-unstyled company-sub-menu">
                        {
                            item.links.map((fLink, key) =>
                                <li key={key}><Link to={fLink.link}>{fLink.linkTitle}</Link></li>
                            )
                        }
                        </ul>
                    </Col>
                        )
                    }

                    <Col lg="3">
                        <p className="text-uppercase footer-title">Address</p>
                        <div className="contact-us">
                            <p>9, Ghanshyam Shopping</p>
                            <p>Near, Hatkeshwar Mandir</p>
                            <p>Tower Road</p>
                            <p>Surendranagar - 363001</p>
                        </div>

                    </Col>
                    
                    <Col lg="3">
                        <p className="text-uppercase footer-title">Contact Us</p>
                        <div className="contact-us">
                            <p>+91 9825829804</p>
                            <p>+91 9909388561</p>
                            <p>tankarcomputer@gmail.com</p>
                            <p>savajadiya123@gmail.com</p>
                        </div>
                        <ul className="footer-icons list-inline mt-4"> 
                            <li className="list-inline-item"><Link to="#" className=""><i className="mdi mdi-facebook"></i></Link></li> 
                            <li className="list-inline-item"><Link to="#" className=""><i className="mdi mdi-twitter"></i></Link></li> 
                            <li className="list-inline-item"><Link to="#" className=""><i className="mdi mdi-google-plus"></i></Link></li>
                            <li className="list-inline-item"><Link to="#" className=""><i className="mdi mdi-apple"></i></Link></li>  
                        </ul>

                    </Col>
                </Row>
            </Container>
        </section>
                {/* Render footer links */}
                <FooterLinks/>
            </React.Fragment>
        );
    }
}

export default Footer;
import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

//Import Components
import SectionTitle from "../../components/common/section-title";

//Import Images
import img1 from "../../assets/images/features/mockup1.png";
import img2 from "../../assets/images/features/mockup2.png";
import FeatureBox from "../common/feature-box";

class Features extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section" id="features">
          <Container>
            <SectionTitle title1="Our" title2="Features" />
            <Row className="mt-4 pt-4 vertical-content">
              <Col lg="6" className="mt-2">
                <div>
                  <img
                    src={img1}
                    alt=""
                    className="img-fluid mx-auto d-block"
                  />
                </div>
              </Col>
              <Col lg="6" className="mt-2 text-center">
                <FeatureBox
                  class=""
                  title="What make us Special?"
                  desc="Our company has more than 25 years of experience, having been founded in 1995. As a result, we are experts in this field. You can get the best results, on-time delivery, and any form of assistance at any time."
                  link="#"
                />
              </Col>
            </Row>
            {/* <Row className="mt-5 vertical-content">
              <Col lg="6" className="mt-2">
                <FeatureBox
                  class="text-center"
                  title="This Is Increase Your Marketing Performance"
                  desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  link="#"
                />
              </Col>
              <Col lg="6" className="mt-2">
                <div>
                  <img
                    src={img2}
                    alt=""
                    className="img-fluid mx-auto d-block"
                  />
                </div>
              </Col>
            </Row> */}
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Features;

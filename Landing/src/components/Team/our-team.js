import React, { Component } from 'react';
import { Container, Row } from "reactstrap";

//Import Components
import SectionTitle from "../../components/common/section-title";

//Import Team Box
import TeamBox from "./team-box";

//Import Images
import team1 from "../../assets/images/team/team-1.png";
import team2 from "../../assets/images/team/team-2.png";

class OurTeam extends Component {
    state = {
        members : [
            { id : 1, name : "Mahendra N Savajadiya", image : team1, post : "Owner / Proprietor",
                socials : [
                    { class : "mdi mdi-facebook", link : "#" },
                    { class : "mdi mdi-google", link : "#" },
                    { class : "mdi mdi-twitter", link : "#" },
                ]
            },
            { id : 2, name : "Parth M Savajadiya", image : team2, post : "Co-Owner",
                socials : [
                    { class : "mdi mdi-facebook", link : "#" },
                    { class : "mdi mdi-google", link : "#" },
                    { class : "mdi mdi-twitter", link : "#" },
                ]
            },
        ]
    }
    render() {
        return (
            <React.Fragment>
        <section className="section" id="team">
            <Container>
                <SectionTitle title1="Our" title2="Team" />
                <Row className="mt-4 pt-4">
                    <TeamBox members={this.state.members} />
                </Row>
            </Container>
        </section>
            </React.Fragment>
        );
    }
}

export default OurTeam;
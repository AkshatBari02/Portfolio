import { Container, Row ,Col} from "react-bootstrap";
import { ResumeBar } from "./ResumeBar";
import logo from "../assets/images/footer-logo.jpg";
import navIcon1 from '../assets/images/nav-icon1.svg';
import navIcon2 from '../assets/images/nav-icon2.svg';
import navIcon3 from '../assets/images/nav-icon3.svg';


export const Footer = () => {
    const linkedin = process.env.REACT_APP_LINKEDIN_URL;
    const github = process.env.REACT_APP_GITHUB_URL;
    const instagram = process.env.REACT_APP_INSTAGRAM_URL;

    return(
        <footer className="footer" id="footer">
            <Container>
                <Row className="align-items-center">
                    <ResumeBar />
                    <Col sm={6}>
                        <img src={logo} alt="logo"/>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href={linkedin} target="_blank" rel="noreferrer"><img src={navIcon1} alt="LinkedIn"/></a>
                            <a href={github} target="_blank" rel="noreferrer"><img src={navIcon2} alt="GitHub"/></a>
                            <a href={instagram} rel="noreferrer"><img src={navIcon3} alt="Instagram"/></a>
                        </div>
                        <p>CopyRight akshatbari.ab02.All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
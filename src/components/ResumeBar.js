import { Col, Row} from "react-bootstrap";
import download from "../assets/images/download.svg";

export const ResumeBar = () => {
    const resume_link = process.env.REACT_APP_RESUME_LINK;

  return (
      <Col lg={12} id="resumeBar">
        <div className="resume-bx wow slideInUp">
          <Row>
            <Col lg={12} md={6} xl={8}>
              <h3>Download My Resume for future referece.</h3>
            </Col>
            <Col md={3} xl={3}>
                <a href={resume_link} download="Akshat Resume.pdf" target="_blank" rel="noreferrer">
                    <button type="submit" className="download-button">Download Here <img src={download} alt="download" /></button>
              </a>
            </Col>
          </Row>
        </div>
      </Col>
  )
}
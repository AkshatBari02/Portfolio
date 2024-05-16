import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { htmlProjects,reactProjects,pythonProjects } from "./data";
import colorSharp2 from "../assets/images/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>As a dedicated B.Tech Computer Science student, I've undertaken various projects that encapsulate my passion for technology and problem-solving. Below are some of my key projects that demonstrate my proficiency and commitment to delivering impactful solutions:</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">HTML, CSS & JS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">ReactJS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Python</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    <Row>
                            {
                                htmlProjects.map((project,index) => {
                                return(
                                        <ProjectCard
                                        key= {index}
                                        {...project}/>
                                    )
                                })
                            }
                    </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                            {
                                reactProjects.map((project,index) => {
                                return(
                                    <ProjectCard
                                        key= {index}
                                        {...project}/>
                                    )
                                })
                            }
                    </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                            {
                                pythonProjects.map((project,index) => {
                                return(
                                    <ProjectCard
                                        key= {index}
                                        {...project}/>
                                    )
                                })
                            }
                    </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
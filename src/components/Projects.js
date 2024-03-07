import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/images/project-img1.jpg";
import projImg2 from "../assets/images/project-img2.jpg";
import projImg3 from "../assets/images/project-img3.png";
import projImg4 from "../assets/images/project-img4.jpg";
import projImg5 from "../assets/images/project-img5.png";
import projImg6 from "../assets/images/project-img6.jpg";
import colorSharp2 from "../assets/images/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const htmlProjects = [
        {
            route: "https://akshatbari02.github.io/Countdown-Timer/",
            imgUrl: projImg1,
            title: "Time's Up",
            description: "Countdown timer"
        },
        {
            route: "https://akshatbari02.github.io/Myntra-Product-Card/",
            imgUrl: projImg2,
            title: "Product Card",
            description: "An e-commerce product card"
        },
        {
            route: "https://akshatbari02.github.io/online-meal/",
            imgUrl: projImg3,
            title: "Food Responsive Webpage",
            description: "Design of an online food delivery website"
        },
        {
            route: "https://akshatbari02.github.io/Amplify/",
            imgUrl: projImg4,
            title: "Amplify:It's Your Music ",
            description: "Developed a music player with a playlist"
        },
    ];

    const reactProjects = [
        {
            route: "https://check-weather-e39q.onrender.com/",
            imgUrl: projImg5,
            title: "How's Weather",
            description: "Developed a react-app to check current weather"
        },
        {
            route: "https://her-s-wish.onrender.com",
            imgUrl: projImg6,
            title: "Her's Wish",
            description: "Developed frontend for an e-commerce women wear website"
        },
    ];

    const pythonProjects = [
        {
            route: "https://qumash-world.onrender.com",
            imgUrl: projImg3,
            title: "Qumash World",
            description: "kjshdndskjvgblkjvbdsk"
        },
    ];

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
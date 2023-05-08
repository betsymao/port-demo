// Libraries
import { Fragment } from 'react';

// Bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Projects = () => {
  return (
    <Fragment>
      <section className="projects">
        <Row>
          <h2>Projects</h2>
          <Col sm="auto" className="project">
            <img src="/assets/project-1.png" alt="1"/>
            <div className="project-card">
              <div className="project-text">
                <h3>Melbourne Dog Salon</h3>
                <p>Responsive website using HTML and CSS.</p>
                <a className="btn-link" rel="noreferrer" target="_blank" href="https://github.com">Demo</a>
              </div>
            </div>
          </Col>

          <Col sm="auto" className="project">
          <img src="/assets/project-2.png" alt="1"/>

          <div className="project-card">
              <div className="project-text">
                <h3>Space Media</h3>
                <p>React project using Bootstrap and connecting to an API.</p>
                <a className="btn-link" rel="noreferrer" target="_blank" href="https://github.com">Demo</a>
              </div>
          </div>
          
  

          </Col>
        </Row>
      </section>
    </Fragment>
  )
};

export default Projects;
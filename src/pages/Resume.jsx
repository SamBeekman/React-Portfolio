import { Container, Row, Col } from "react-bootstrap";

export default function Resume() {
  return (
    <Container style={{ paddingTop: '20px' }}>
      <Row>
        <Col xs={12} md={6}>
          <a href="/Resume.pdf">
            <img className="img-fluid img-thumbnail" src="/tech/resume.png" alt="logo" />
            View Resume
          </a>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3 className="text-center">Proficiencies:</h3>
          <Container>
            <Col >
              <ul style={{ listStyleType: 'none' }}>
                <li>HTML</li>
                <li>CSS + Bootstrap</li>
                <li>Javascript + jQuery</li>
                <li>SQL + MySQL + Sequelize</li>
                <li>NoSQL + MongoDB + Mongoose</li>
                <li>Node + Express</li>
                <li>JWT + DotEnv + Bcrypt</li>
                <li>React</li>
                <li>MERN Stack</li>
                <li>GitHub</li>
                <li>Heroku</li>
                <li>REST APIs</li>
              </ul>
            </Col>
          </Container>
        </Col>
      </Row>

      <img className="img-fluid img-thumbnail" src="/tech/all.png" alt="list of all logos for tech" />
    </Container>

  );
}

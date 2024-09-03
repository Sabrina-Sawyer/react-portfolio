import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const resumeFilePath = './assets/Fake_Resume';

function Resume() {
    return (
        <Container>
            <Row className="g-3">
                <Col md={6} lg={4}>
                    <Card style={{ width: '100%', margin: '1rem' }}>
                        <Card.Body>
                            <Card.Title>Download Resume</Card.Title>
                            <Card.Text>
                                Click the button below to download my resume.
                            </Card.Text>
                            <Button
                                variant="primary"
                                href={resumeFilePath}
                                download="Resume.pdf"
                            >
                                Download Resume
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>


                <Col md={6} lg={4}>
                    <Card style={{ width: '100%', margin: '1rem' }}>
                        <Card.Header>Coding Languages</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item>JavaScript</ListGroup.Item>
                            <ListGroup.Item>PostgreSQL</ListGroup.Item>
                            <ListGroup.Item>Javascript</ListGroup.Item>
                            <ListGroup.Item>TypeScript</ListGroup.Item>
                            <ListGroup.Item>CSS</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Resume;
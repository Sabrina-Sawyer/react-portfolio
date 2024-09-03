
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';


const styles = {
    sectionStyles: {
        padding: '1rem', 
    },
    image: {
        width: '100px', 
        height: '100px', 
    },
    card: {
        width: '100%',
    },
};

function Aboutme() {
    return (
        <Container fluid style={styles.sectionStyles}>
            <Row>
                <Col xs={12} md={4} className="d-flex justify-content-start">
                    <Image
                        src="path_to_your_image.jpg"
                        roundedCircle
                        style={styles.image}
                    />
                </Col>
                <Col xs={12} md={8}>
                    <Card style={styles.card}>
                        <Card.Header>About Me</Card.Header>
                        <Card.Body>
                            <Card.Title>Sabrina Sawyer</Card.Title>
                            <Card.Text>
                            Results-driven project manager transitioning into technical project management, with experience in managing high-revenue Amazon accounts and leading cross-functional teams. Skilled in strategic planning, data analysis, and digital marketing. Demonstrated ability to facilitate effective communication between teams and clients to ensure project alignment and success. Experienced in creating training materials and guiding team alignment with business goals. Ready to apply strong leadership and analytical skills to drive technical project success.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Aboutme;

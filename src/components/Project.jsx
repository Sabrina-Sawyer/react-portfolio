import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function PortfolioCard({ title, text, imgSrc, linkUrl }) {
    return (
        <Card style={{ width: '18rem', margin: '1rem' }}>
            <Card.Img 
                variant="top" 
                src={imgSrc} 
                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
            />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
                <a href={linkUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="primary">Go to project</Button>
                </a>
            </Card.Body>
        </Card>
    );
}

export default PortfolioCard;
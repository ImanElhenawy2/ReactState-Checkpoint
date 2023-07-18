import Card from 'react-bootstrap/Card';
import data from './data';

const Person = ({fullName,bio, imgSrc, profession}) => {
    return<>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imgSrc} alt = "myImage" />
      <Card.Body>
        <Card.Title><h2>{fullName}</h2></Card.Title>
        <Card.Text>
            <h5>{profession}</h5>
         {bio}
        </Card.Text>
        <Card.Link href="#">Hire me!</Card.Link>
      </Card.Body>
    </Card>
    </>;
}

export default Person;
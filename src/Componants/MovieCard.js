import Card from "react-bootstrap/Card";
import ReactStars from "react-stars";

const MovieCard = ({ title, description, posterURL, rating }) => {
  return (
    <Card className="card">
      <Card.Img variant="top" src={posterURL} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <ReactStars
          count={5}
          size={24}
          value={rating}
          edit={false}
          color2={"#ffd700"}
        />
      </Card.Body>
    </Card>
  );
};

export default MovieCard;

import { useState } from "react";
import Modal from "react-modal";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import ReactStars from "react-stars";

Modal.setAppElement("#root");

const AddMovie = ({ addMovie }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterUrl] = useState("");
  const [rating, setRating] = useState(0);
  const [trailerURL, setTrailerURL] = useState("");

  const toggleModal = () => setIsOpen(!modalIsOpen);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = { 
      title, 
      description, 
      posterURL, 
      rating,
      trailerURL 
    };
    addMovie(newMovie);
    toggleModal();
    setTitle("");
    setDescription("");
    setPosterUrl("");
    setTrailerURL("");
    setRating(0);
  };

  return (
    <>
      <div className="add-movie-container">
        <button className="add-movie-btn" onClick={toggleModal}>
          +
        </button>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        contentLabel="Add Movie Modal"
      >
        <div className="modal-header">
          <h2 className="modal-title">Add New Movie</h2>
          <button className="modal-close-btn" onClick={toggleModal}>×</button>
        </div>

        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Title</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Movie Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Description</Form.Label>
              <Form.Control
                required
                as="textarea"
                rows={3}
                placeholder="Movie Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Poster URL</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Poster URL"
                value={posterURL}
                onChange={(e) => setPosterUrl(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Trailer URL</Form.Label>
            <Form.Control
              type="text"
              value={trailerURL}
              onChange={(e) => setTrailerURL(e.target.value)}
              placeholder="Enter YouTube embed URL (e.g., https://www.youtube.com/embed/xxx)"
            />
            <Form.Text className="text-muted">
              Use YouTube embed URL format
            </Form.Text>
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Rating</Form.Label>
              <div className="rating-container">
                <ReactStars
                  count={5}
                  size={24}
                  value={rating}
                  onChange={(newRating) => setRating(newRating)}
                  color2={"#ffd700"}
                />
              </div>
            </Form.Group>
          </Row>

          <button className="submit-btn" type="submit">
            Add Movie
          </button>
        </Form>
      </Modal>
    </>
  );
};

export default AddMovie;

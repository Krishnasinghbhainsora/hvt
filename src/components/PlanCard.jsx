import React, { useState } from "react";
import { Card, Button, Modal, Row, Col, Form } from "react-bootstrap";
import "../ComponentCss/PlanCard.css";

const PlanCard = ({ plan }) => {
  const [showBookNow, setShowBookNow] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const handleCloseBookNow = () => setShowBookNow(false);
  const handleShowBookNow = () => setShowBookNow(true);

  const handleCloseDetails = () => setShowDetails(false);
  const handleShowDetails = () => setShowDetails(true);

  return (
    <div className="plan-card">
      <Card>
        <Row noGutters>
          <Col md={4}>
            <Card.Img src={plan.imgSrc} alt="Plan image" />
          </Col>
          <Col md={8}>
            <Card.Body>
              <Card.Title>{plan.title}</Card.Title>
              <Card.Text>{plan.details}</Card.Text>
              <div className="button-group">
                <Button
                  variant="primary"
                  onClick={handleShowDetails}
                  className="details-button mr-2"
                >
                  View Details
                </Button>
                <Button
                  variant="success"
                  onClick={handleShowBookNow}
                  className="book-now-button"
                >
                  Book Now
                </Button>
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>

      <Modal show={showDetails} onHide={handleCloseDetails}>
        <Modal.Header closeButton>
          <Modal.Title>Plan Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <img src={plan.imgSrc} alt="Plan" style={{ width: "80%", height:"200px"}} />
            </Col>
            <Col>
              <h4>{plan.title}</h4>
              <p>{plan.details}</p>
              <p>
                <strong>Price: </strong> {plan.pricing[0].cost}
              </p>
            </Col>
          </Row>
          <hr />
          <h5 className="fw-bold mb-3">
            Recommended
            <span className="text main-hover"> Itinerary </span>
          </h5>
          <div className="itinerary">
            {plan.itinerary.map((item, index) => (
              <div key={index} className="itinerary-item mb-4">
                <Row>
                  <Col md={2} className="itinerary-day">
                    <strong>{item.day}</strong>
                    <div className="itinerary-point"></div>
                  </Col>
                  <Col md={10} className="itinerary-content">
                    <h6>{item.location}</h6>
                    <p>{item.description}</p>
                  </Col>
                </Row>
              </div>
            ))}
            <div className="itinerary-line"></div>
          </div>
          <hr />
          <h5>Pricing: </h5>
          <table className="table">
            <thead>
              <tr>
                <th>Hotel Category</th>
                <th>Package cost per adult</th>
              </tr>
            </thead>
            <tbody>
              {plan.pricing.map((item, index) => (
                <tr key={index}>
                  <td>{item.category}</td>
                  <td>{item.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="small">
            Above cost is based on minimum two adults traveling together,
            sharing one double room. All transfers and sightseeing by Non AC
            Wagon R. Any increase/decrease in the strength of the group would
            change the pricing. Rates valid for Indian Nationals only.
          </p>
          <hr />
          <h5>Inclusions:</h5>
          <ul className="small">
            {plan.inclusions.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDetails}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showBookNow} onHide={handleCloseBookNow}>
        <Modal.Header closeButton>
          <Modal.Title>Book Now</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control as="select">
                  <option>- Select -</option>
                  <option>Mr.</option>
                  <option>Mrs.</option>
                  <option>Ms.</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formMobile">
              <Form.Label>Mobile</Form.Label>
              <Form.Control type="text" placeholder="Enter Mobile" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter Email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDateOfTour">
              <Form.Label>Date of Tour</Form.Label>
              <Form.Control type="date" />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formNoOfAdults">
                <Form.Label>No of Adults</Form.Label>
                <Form.Control
                  type="number"
                  min="1"
                  placeholder="Enter number of adults"
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formCategoryOfHotels">
              <Form.Label>Category of Hotels Needed</Form.Label>
              <Form.Control as="select">
                <option>- Select -</option>
                <option> Budget</option>
                <option> Deluxe</option>
                <option> Luxury</option>
              </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default PlanCard;

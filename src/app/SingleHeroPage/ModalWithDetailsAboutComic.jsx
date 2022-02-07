import { Col, Container, Image, ListGroup, Modal, Row } from "react-bootstrap";
import { FaRegWindowClose } from "react-icons/fa";
import "./ModalWithDetailsAboutComic.css";

const ModalWithDetailsAboutComic = ({ modalShow, handleClose, comic }) => {
  return (
    <Modal show={modalShow} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" size="xl">
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter" className="modal-title">
          {comic.title.toUpperCase()}
        </Modal.Title>
        <FaRegWindowClose onClick={handleClose} size="40px" className="close-icon" />
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col xs={12} md={12} lg={4}>
              <Row>
                <Col xs={6} lg={12}>
                  <Image src={`${comic.thumbnail.path}/landscape_medium.${comic.thumbnail.extension}`} className="py-4" />
                </Col>
                <Col xs={6} lg={12}>
                 
                  <h5>Date of print:</h5>
                  <p>{comic.dates[0].date.slice(0, 10).split("-").reverse().join("-").replaceAll("-", ".")}</p>
                  <h5>Price:</h5>
                  <p>$ {comic.prices[0].price}</p>
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <ListGroup>
                <h5 className="pt-3">Characters:</h5>
                {comic.characters.items.map((item) => (
                  <ListGroup.Item action variant="light">
                    {item.name}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <ListGroup>
                <h5 className="pt-3">Creators:</h5>
                {comic.creators.items.map((item) => (
                  <ListGroup.Item action variant="light">
                    {item.name}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default ModalWithDetailsAboutComic;

import { useState } from "react";
import { Card, Col } from "react-bootstrap";
import ModalWithDetailsAboutComic from "./ModalWithDetailsAboutComic";
import "./SingleHeroComics.css";

const SingleHeroComics = ({ comic }) => {
  const [modalShow, setModalShow] = useState(false);

  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);

  return (
    <>
      <Col sm={6} md={4} lg={3} xl={2} className="container-for-comics-img-and-title">
        <Card className="bg-dark text-white" onClick={handleShow}>
          <Card.Img src={`${comic.thumbnail.path}/landscape_medium.${comic.thumbnail.extension}`} alt="Comic image" />
          <Card.ImgOverlay className="">
            <Card.Text className="bg-dark comics-title p-1">{comic.title}</Card.Text>
          </Card.ImgOverlay>
        </Card>
      </Col>

      <ModalWithDetailsAboutComic modalShow={modalShow} handleClose={handleClose} comic={comic} />
    </>
  );
};

export default SingleHeroComics;

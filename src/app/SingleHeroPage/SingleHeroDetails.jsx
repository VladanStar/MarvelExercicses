import { Fragment } from "react";
import { Col, Image, Row } from "react-bootstrap";

const SingleHeroDetails = ({ hero }) => {
  return (
    <Fragment>
      <Row className="gx-3 my-auto">
        <Col sm={12} md={12} lg={6}>
          <Image className="pb-5" src={`${hero.thumbnail?.path}/landscape_incredible.${hero.thumbnail?.extension}`} />
        </Col>

        <Col sm={12} md={12} lg={6}>
          <h5 className="pb-3">{hero.name}</h5>
          <p>{hero.description || 'No Description'}</p>
        </Col>
      </Row>
    </Fragment>
  );
};

export default SingleHeroDetails;

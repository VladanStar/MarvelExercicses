import { ListGroup } from "react-bootstrap";
import { ImBin } from "react-icons/im";

import "./HeroListItem.css";

export const HeroListItem = ({ oneHero, deleteHeroHandler }) => {
  //console.log("addedHero: " + oneHero.name);

  return (
    <ListGroup.Item className="col p-0 my-2 border-3 border-light my-team-list-item">
      <div className="row align-items-center">
        <div className="col-3">
          <img src={`${oneHero.thumbnail.path}/standard_small.${oneHero.thumbnail.extension}`} alt="" className="" />
        </div>

        <div className="col-7 text-start">
          <p className="my-0">{oneHero.name}</p>
        </div>

        <div className="col-2 text-center">
          <ImBin size="25px" className="text-dark bin-icon" onClick={() => deleteHeroHandler(oneHero)} />
        </div>
      </div>
    </ListGroup.Item>
  );
};

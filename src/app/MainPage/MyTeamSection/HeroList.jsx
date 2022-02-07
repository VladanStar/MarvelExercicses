import { ListGroup } from "react-bootstrap";

import { HeroListItem } from "./HeroListItem";

export const HeroList = ({ myTeamList, deleteHeroHandler }) => {
  return (
    <div className="container">
      <ListGroup className="row">
        {myTeamList.map((oneHero) => {
          return <HeroListItem oneHero={oneHero} key={oneHero.id} deleteHeroHandler={deleteHeroHandler} />;
        })}
      </ListGroup>
    </div>
  );
};

import { Container } from "react-bootstrap";
import "./Header.css";
import user from "../SingleHeroPage/marvel-logo.png"


export const Header = () => {
  return (
    <div className="mb-12 header">
      <Container>
        <img src={user} alt="user" className="ui avatar image" width={"100%"} height={"150px"} />
       
      </Container>
    </div>
  );
};

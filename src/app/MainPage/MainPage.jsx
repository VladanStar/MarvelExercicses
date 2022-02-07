import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Header } from "../sharedComponents/Header";
import { SearchSection } from "./SearchSection/SearchSection.jsx";
import { MyTeamSection } from "./MyTeamSection/MyTeamSection.jsx";

export const MainPage = () => {
  const [myTeamList, setMyTeamList] = useState(JSON.parse(localStorage.getItem("myHeroes")) || []);

  const addHandler = (hero) => {
    const indexOfNewHero = myTeamList.findIndex((h) => h.id === hero.id);
    if (indexOfNewHero !== -1) return;
    setMyTeamList((prevState) => [...prevState, hero]);
  };

  useEffect(() => {
    localStorage.setItem("myHeroes", JSON.stringify(myTeamList));
  }, [myTeamList]);

  

  let deleteHeroHandler = (hero) => {
    setMyTeamList((prevState) => prevState.filter((obj) => obj.id !== hero.id));
    localStorage.removeItem("myHeroes");
  };

  return (
    <>
    <Header title={'HERO TEAM'}/>
    <Container>
      <div className="d-flex row">
        <SearchSection addHandler={addHandler} />
        <MyTeamSection myTeamList={myTeamList} deleteHeroHandler={deleteHeroHandler} />
      </div>
    </Container>
    </>
 
  );
};

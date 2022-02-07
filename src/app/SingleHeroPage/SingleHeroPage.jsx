import { Fragment, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";
import { getSingleHero } from "../../services/heroService";
import { Header } from "../sharedComponents/Header";
import SingleHeroDetails from "./SingleHeroDetails";
import ShowComicsSection from "./ShowComicsSection";
import LogoAndBackButton from "./LogoAndBackButton";

export const SingleHeroPage = () => {
  let { id } = useParams("id");

  const [singleHero, setSingleHero] = useState({});

  useEffect(() => {
    async function getHeroAndSetState() {
      const heroData = await getSingleHero(id);
      setSingleHero(heroData);
    }

    getHeroAndSetState();
  }, [id]);

  return (
    <Fragment>
      <Header title={"SINGLE CHARACTER"} />
      <Container className="pb-5">
        <LogoAndBackButton />
        <SingleHeroDetails hero={singleHero} key={singleHero.id} />
        <ShowComicsSection />
      </Container>
    </Fragment>
  );
};

export default SingleHeroPage;

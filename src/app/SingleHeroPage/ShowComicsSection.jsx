import SwitchComponent from "./SwitchComponent";
import { getComics } from "../../services/heroService";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import SingleHeroComics from "./SingleHeroComics";
import { Row } from "react-bootstrap";

const ShowComicsSection = () => {
  let { id } = useParams("id");

  const [checked, setChecked] = useState(false);
  const [comicsList, setComicsList] = useState([]);

  useEffect(() => {
    async function getComicsAndSetState() {
      const comicsData = await getComics(id);
      setComicsList(comicsData);
    }

    getComicsAndSetState();
  }, [id]);

  const switchHandler = () => {
    setChecked(!checked);
  };

  return (
    <>
      <SwitchComponent switchHandler={switchHandler} checked={checked} />
      {checked === true ? (
        <Row className="g-3">
          {comicsList.map((comic) => (
            <SingleHeroComics comic={comic} key={comic.id} />
          ))}
        </Row>
      ) : (
        ""
      )}
    </>
  );
};

export default ShowComicsSection;

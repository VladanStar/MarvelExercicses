import { useRef } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import { getSearchedHeroes } from "../../../services/heroService";
import { RiSearch2Line } from "react-icons/ri";
import styles from "./Search.module.css";

export const Search = ({ updateSearchedHeroesHandler }) => {
  const searchBox = useRef();

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   const searchedString = searchBox.current.value.trim().toLowerCase();
  //   getSearchedHeroes(searchedString).then((res) => updateSearchedHeroesHandler(res));
  // };

  const submitHandler = (e) => {
    e.preventDefault();
    const searchedString = searchBox.current.value.trim().toLowerCase();

    async function searchedHeroesFunction() {
      const res = await getSearchedHeroes(searchedString);
      updateSearchedHeroesHandler(res);
    }

    searchedHeroesFunction();
    
  };

  return (
    <Form className="py-5 mt-5 d-flex col" onSubmit={submitHandler}>
      <RiSearch2Line className="mt-2" size="30px" />
      <FormControl
        type="search"
        placeholder="Search"
        className={`bg-light me-2 border-0 border-bottom border-dark ${styles.search}`}
        aria-label="Search"
        ref={searchBox}
      />
      <Button variant="btn btn-outline-dark rounded" type="submit">
        Search
      </Button>
    </Form>
  );
};

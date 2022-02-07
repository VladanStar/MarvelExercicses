import { CharacterCard } from "./CharacterCard";

export const CardGrid = ({ searchedHeroes, addHandler }) => {
  return (
    <div className="row g-3">
      {searchedHeroes.map((hero) => {
        return <CharacterCard hero={hero} key={hero.id} addHandler={addHandler} />;
      })}
    </div>
  );
};

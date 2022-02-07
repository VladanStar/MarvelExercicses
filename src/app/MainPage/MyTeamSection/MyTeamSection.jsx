import { HeroList } from "./HeroList";

export const MyTeamSection = ({myTeamList, deleteHeroHandler}) => {
  return (
    <div className="col-sm-12 col-md-6 col-xl-4 pt-5 mt-5">
      <h4 className="pb-5 ps-2 mb-3">My Team</h4>
      <HeroList myTeamList={myTeamList} deleteHeroHandler={deleteHeroHandler} />
    </div>
  );
};

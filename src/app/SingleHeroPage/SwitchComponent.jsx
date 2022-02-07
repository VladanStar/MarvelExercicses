import Switch from "react-switch";

const SwitchComponent = ({ switchHandler, checked }) => {
  return (
    <div className="d-flex align-items-center pb-3">
      <Switch
        checked={checked}
        onChange={switchHandler}
        onColor="#fc766d"
        onHandleColor="#f50505"
        handleDiameter={30}
        uncheckedIcon={false}
        checkedIcon={false}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        height={20}
        width={48}
        className="react-switch"
        id="material-switch"
      />
      <span className="ps-3">Show Comics</span>
    </div>
  );
};

export default SwitchComponent;

import "./theme.css";

const Theme = ({ toggle }) => {
  return (
    <div className="theme">
      <label className="switch">
        <input type="checkbox" onChange={toggle} />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default Theme;

import { BACKSTORY_PARAGRAPH } from "./constants";
import "./backstory.css";

const Backstory = () => {
  return (
    <div className="backstory-wrapper">
      <div className="content-wrapper">
        <h1 className="title">Little Lemon</h1>
        <h2 className="subtitle">Chicago</h2>
        <p>{BACKSTORY_PARAGRAPH}</p>
      </div>
      <div className="image-wrapper">
        <img
          src="/images/backstory-1.jpg"
          alt="little lemon backstory picture 1"
          className="image image-first"
        />
        <img
          src="/images/backstory-2.jpg"
          alt="little lemon backstory picture 2"
          className="image image-second"
        />
      </div>
    </div>
  );
};

export default Backstory;

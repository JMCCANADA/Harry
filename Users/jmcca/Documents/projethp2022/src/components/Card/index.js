import { useState } from "react";
import "./index.css";
import Modale from "../Modal";

const Card = (props) => {
  const [show, setShow] = useState(false);

  return (
    <>
      {/* # # # # # # # LA CARTE # # # # # # # */}
      <div
        className="card"
        onClick={() => {
          setShow(true);
        }}
      >
        <img src={props.character.image} />
        <span className="legend"> {props.character.name} </span>
      </div>

      {/* # # # # # # #  LA MODALE # # # # # # #  */}
      {show === true ? (
        <Modale character={props.character} setShow={setShow} />
      ) : null}
    </>
  );
};

export default Card;

import React, { useState, useEffect } from "react";
import { fetchCard } from "../state/action-creators";
import { useSelector, useDispatch } from "react-redux";
import Icons from "./Icons";

const Progressbar4 = () => {
  const dispatch = useDispatch();
  const card = useSelector((state) => state.card.cards);

  const arr = card["Card1"];
  const [header, setHeader] = useState("");
  const [icons, setIcons] = useState("");
  const [CardPart1, setCardPart1] = useState("");
  const [slider, setSlider] = useState("");
  const [CardPart2, setCardPart2] = useState("");

  useEffect(() => {
    if (header !== "" || CardPart1 !== "" || CardPart2 !== "") {
      setIcons(header.temp_icon);
      setSlider(CardPart1.slidervalues);
    } else {
      return null;
    }
  });

  useEffect(() => {
    dispatch(fetchCard());
  }, []);

  useEffect(() => {
    if (typeof arr !== "undefined") {
      if (arr.length > 0) {
        const { Header, Card_Part1, Card_Part2 } = arr[3];

        setHeader(Header);
        setCardPart1(Card_Part1);
        setCardPart2(Card_Part2);
      }
    } else {
      return null;
    }
  });

  const Slider = ({ done }) => {
    const getBackgroundSize = () => {
      return {
        backgroundSize: `${(done * 100) / 10}% 100% `,
      };
    };

    return (
      <div className="slider">
        <input
          max={120}
          type="range"
          style={getBackgroundSize()}
          value={done}
          // onChange={(e) => setValue(e.target.valueAsNumber)}
        />
        <br />
        <span style={{ position: "relative", left: " 210px", bottom: "40px" }}>
          {done}mm
        </span>
        <br />
        <br />
      </div>
    );
  };

  return (
    <>
      <div className="card4">
        <div className="card-body4">
          <div className="d-flex">
            <div className="font"> {header.cooling_title}</div>
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Icons name={icons.icon1} color="currentColor" size={16} />
              <Icons name={icons.icon2} color="currentColor" size={25} />
            </span>
          </div>

          <div
            className="d-flex"
            style={{ borderBottom: "2px dotted rgb(232, 234, 237)" }}
          >
            <div className="font">{header.fans_title}</div>
            <Icons name={CardPart2.temp_icon} color="currentColor" size={24} />
          </div>
          <br />
          <div>
            <span style={{ color: "#96a4b5" }}>{CardPart1.left_fan}</span>
            <span>
              <Slider done={slider.value1} />
            </span>
            <div style={{ position: "relative", top: "18px", left: "210px" }}>
              <div className="font">{CardPart1.max_value}</div>
            </div>
          </div>
          <Icons name={CardPart2.leaficon} color="#7f92a0" size={16} />
          <br />
          <div className="d-flex"></div>
          <br />
          <div>
            <span style={{ color: "#96a4b5" }}>{CardPart1.right_fan}</span>
            <span>
              <Slider done={slider.value2} />
            </span>
            <div style={{ position: "relative", top: "15px", left: "210px" }}>
              <div className="font">{CardPart1.max_value}</div>
            </div>
          </div>
          <Icons name={CardPart2.leaficon} color="#7f92a0" size={16} />
          <br />
          <div className="content-icons" style={{ margin: "6px" }}>
            <div
              style={{
                backgroundColor: "#dee2e6",
                width: "48px",
                height: "29px",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <Icons name={icons.icon1} color="currentColor" size={16} />
            </div>
            <div
              style={{
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Icons name={CardPart2.leaficon} color="#3a454e" size={16} />
            </div>
            <div
              style={{
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                marginTop: "6px",
              }}
            >
              <Icons name={CardPart2.metericon} color="#3a454e" size={22} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Progressbar4;

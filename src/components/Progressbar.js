import React, { useEffect, useState } from "react";
import ChartsLine from "./ChartsLine";
import { fetchCard } from "../state/action-creators";
import { useSelector, useDispatch } from "react-redux";
import Icons from "./Icons";

const Progressbar = () => {
  const dispatch = useDispatch();
  const card = useSelector((state) => state.card.cards);
  const arr = card["Card1"];
  const [header, setHeader] = useState("");
  const [icons, setIcons] = useState("");
  const [icons2, setIcons2] = useState("");
  const [icons3, setIcons3] = useState("");
  const [CardPart1, setCardPart1] = useState("");
  const [CardPart2, setCardPart2] = useState("");
  const [samsungtitle, setSamsungTitle] = useState("");
  const [wdtitle, setWdTitle] = useState("");
  const [pdata, setLinearGraph] = useState("");
  const [cores, setCores] = useState([]);

  useEffect(() => {
    if (header !== "" || CardPart1 !== "" || CardPart2 !== "") {
      setIcons(header.temp_icon);
      setIcons2(CardPart1.temp_value);
      setIcons3(CardPart2.temp_value);
      setSamsungTitle(CardPart2.Samsung_title);
      setWdTitle(CardPart2.Wd);
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
        const { Header, Card_Part1, Card_Part2 } = arr[0];

        setHeader(Header);
        setCardPart1(Card_Part1);
        setCardPart2(Card_Part2);
        setLinearGraph(Card_Part2.Linear_graph);
        setCores(Card_Part1.Cores);
      }
    } else {
      return null;
    }
  });

  const Progress = ({ done }) => {
    return (
      <div className="progress">
        <div
          className="progress-done"
          style={{ width: `${done}%`, opacity: "1" }}
        ></div>
      </div>
    );
  };

  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="d-flex">
            <div className="font">{header.temp_title}</div>
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                columnGap: "11px",
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
            <div className="font">{header.processor_title}</div>
            <Icons
              name={header.arrowdownshorticon}
              color="currentColor"
              size={24}
            />
          </div>
          <div className="d-flex">
            <div>
              <div style={{ color: "#0b2234", fontSize: "30px" }}>
                {icons3.value1}
              </div>
            </div>
            <div
              style={{
                fontSize: "17px",
                color: "#cdd4d8",
              }}
            >
              {icons2.value2}
              <div
                style={{
                  color: "#006bff",
                }}
              >
                <Icons name={CardPart1.temp_icon} color="blue" size={30} />
              </div>
            </div>
          </div>
          {cores.map((e, i) => {
            return (
              <div>
                <div className="progressflex1">
                  Core {i}
                  <Progress done={e} />
                  {e}%
                </div>
              </div>
            );
          })}
          <div className="d-flex">
            <div className="font">{CardPart1.Graphics_title}</div>
            <Icons
              name={header.arrowdownshorticon}
              color="currentColor"
              size={24}
            />
          </div>

          <div className="progressflex1">
            <div>
              <div style={{ color: "#0b2234", fontSize: "30px" }}>
                {icons2.value1}
              </div>
            </div>

            <div
              style={{
                position: "relative",

                top: "6px",
                fontSize: "19px",
                color: "#cdd4d8",
              }}
            >
              <div style={{ color: "#cdd4d8" }} className="font">
                {icons2.value2}
              </div>
              <Icons name={CardPart2.temp_icon} size={30} color="red" />
            </div>
          </div>

          <div className="progressflex1">
            Core
            <Progress done={CardPart2.Core} />
            {CardPart2.Core}%
          </div>

          <div className="d-flex">
            <div className="font">{CardPart2.Storage_title}</div>
            <Icons
              name={header.arrowdownshorticon}
              color="currentColor"
              size={24}
            />
          </div>

          <div className="d-flex-chart">
            <ChartsLine pdata={pdata} />
          </div>

          <div className="d-flex">
            <div className="font"> {samsungtitle.title}</div>
            <div> {samsungtitle.memory}</div>
          </div>
          <div>
            <div className="progressflex1">
              {CardPart2.SSD0title}
              <Progress done={CardPart2.SSD0} />
              {CardPart2.SSD0}º
            </div>
          </div>
          <div className="d-flex">
            <div className="font"> {wdtitle.title}</div>
            <div> {wdtitle.memory}</div>
          </div>

          <div className="progressflex1">
            {CardPart2.HDDtitle}
            <Progress done={CardPart2.HDD} />
            {CardPart2.HDD}%
          </div>
        </div>
      </div>
    </>
  );
};
export default Progressbar;

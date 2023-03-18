import React, { useEffect, useLayoutEffect, useState } from "react";
import ChartArea from "./ChartArea";
import { useSelector, useDispatch } from "react-redux";
import { fetchCard } from "../state/action-creators";
import Icons from "./Icons";

const Progressbar3 = () => {
  const dispatch = useDispatch();
  const card = useSelector((state) => state.card.cards);
  const arr = card["Card1"];
  const [header, setHeader] = useState("");
  const [icons, setIcons] = useState("");
  const [cicleicon, setCircleIcons] = useState("");
  const [CardPart1, setCardPart1] = useState("");
  const [CardPart2, setCardPart2] = useState("");
  const [ram, setRam] = useState("");
  const [pdata, setAreaGraph] = useState("");
  const [readings, setReading] = useState([]);
  const [ramhandling, setRamHandle] = useState("");

  useEffect(() => {
    if (header !== "" || CardPart1 !== "" || CardPart2 !== "") {
      setIcons(header.temp_icon);
      setCircleIcons(CardPart1.icons);
      setRam(CardPart1.ram_desc);
      setReading(CardPart1.multiprogressbar);
      setRamHandle(CardPart1.ram_handling);
    } else {
      return null;
    }
  });

  useLayoutEffect(() => {
    dispatch(fetchCard());
  }, []);

  useEffect(() => {
    if (typeof arr !== "undefined") {
      if (arr.length > 0) {
        const { Header, Card_Part1, Card_Part2 } = arr[2];
        console.log("Header", Header);
        setHeader(Header);
        setCardPart1(Card_Part1);
        setCardPart2(Card_Part2);
        setAreaGraph(Card_Part2.areagraph);
      }
    } else {
      return null;
    }
  });

  const Progress = ({ readings }) => {
    return (
      <div className="progress2">
        {readings.map((item, i) => {
          if (item.value > 0) {
            return (
              <div
                className="value"
                key={i}
                style={{ backgroundColor: item.color, width: item.value + "%" }}
              ></div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  };

  return (
    <>
      <div className="card3">
        <div className="card-body3">
          <div className="d-flex">
            <div className="font"> {header.allocation_title}</div>
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
            style={{ borderBottom: "2px dotted whitesmoke" }}
          >
            <div className="font">{header.ram_title}</div>
            <Icons
              name={header.arrowdownshorticon}
              color="currentColor"
              size={24}
            />
          </div>

          <div className="tableflex">
            <div>{ram.ram_type}</div>
            <div className="tablespecs">{ram.ram_value}</div>
            <div>{ram.ram_base}</div>
            <div className="tablespecs">{ram.ram_base_value}</div>
            <div>{ram.ram_cores}</div>
            <div className="tablespecs">{ram.ram_cores_value}</div>
          </div>

          <div>
            <div className="progressflex3">
              <Progress readings={readings} />
            </div>
          </div>

          <br />

          <div
            style={{
              display: "flex",
              columnGap: "91px",
              borderBottom: "2px dotted #E8EAED",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                columnGap: "14px",
                color: "rgb(150, 164, 181)",
              }}
            >
              <Icons name={cicleicon.circleblue} color="#00b6ff" size={14} />
              {ramhandling.inuse}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                columnGap: "14px",
                color: "rgb(150, 164, 181)",
              }}
            >
              <span
                className="tablespecs"
                style={{
                  columnGap: "10px",
                  color: "#323c48",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {ramhandling.inusevalue}
                <Icons name={cicleicon.arrowupgrey} color="#dde2e6" size={30} />
              </span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              borderBottom: "2px dotted #E8EAED",
              columnGap: "82px",
              color: "#E8EAED",
            }}
          >
            <div
              style={{
                display: "flex",
                columnGap: "15px",
                color: "#96a4b5",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Icons name={cicleicon.circlered} color="red" size={14} />
              {ramhandling.incache}
            </div>
            <div
              className="tablespecs"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                columnGap: "5px",
              }}
            >
              {ramhandling.incachevalue}
              <Icons name={cicleicon.arrowdowngrey} color="#dde2e6" size={30} />
            </div>
          </div>

          <div style={{ display: "flex", columnGap: "71px" }}>
            <div
              style={{
                columnGap: "10px",
                color: "#96a4b5",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Icons
                name={cicleicon.circlegrey}
                color="currentColor"
                size={16}
              />
              {ramhandling.available}
            </div>
            <div
              className="tablespecs"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                columnGap: "9px",
              }}
            >
              {ramhandling.availablevalue}
              <Icons name={cicleicon.arrowdowngrey} color="#dde2e6" size={30} />
            </div>
          </div>

          <br />

          <div className="d-flex-chart">
            <ChartArea pdata={pdata} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Progressbar3;

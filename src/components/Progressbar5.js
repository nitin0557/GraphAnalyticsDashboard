import React, { useEffect, useState } from "react";
import { fetchCard } from "../state/action-creators";
import { useSelector, useDispatch } from "react-redux";
import Icons from "./Icons";

const Progressbar5 = () => {
  const dispatch = useDispatch();
  const card = useSelector((state) => state.card.cards);
  const arr = card["Card1"];
  const [header, setHeader] = useState("");
  const [icons, setIcons] = useState("");
  const [process, setProcess] = useState("");
  const [CardPart1, setCardPart1] = useState("");
  const [CardPart2, setCardPart2] = useState("");
  const [description, setDescription] = useState([]);
  const [specification, setSpecification] = useState([]);

  useEffect(() => {
    if (header !== "" || CardPart1 !== "" || CardPart2 !== "") {
      setProcess(CardPart1.process_desc);
      setIcons(header.temp_icon);
      setDescription(CardPart2.description.specification_value);
      setSpecification(CardPart2.description.specification);
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
        const { Header, Card_Part1, Card_Part2 } = arr[4];

        setHeader(Header);
        setCardPart1(Card_Part1);
        setCardPart2(Card_Part2);
      }
    } else {
      return null;
    }
  });

  return (
    <>
      <div className="card5">
        <div className="card-body5">
          <div className="d-flex">
            <div className="font"> Activity</div>
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
            className="activity-flex"
            style={{ borderBottom: "3px dotted #E8EAED" }}
          >
            <div
              className="font"
              style={{
                borderTop: "3px dotted rgb(232, 234, 237)",
                borderLeft: "3px dotted rgb(232, 234, 237)",
                borderRight: "3px dotted rgb(232, 234, 237)",
                color: "#96a4b5",
              }}
            >
              {header.process_title}
            </div>
            <div className="font">{header.network_title}</div>
            <div className="font">{header.storage_title}</div>
            <div className="font">{header.energy_title}</div>
          </div>

          <br />

          <div className="tableflex5">
            <div>{process.process_os}</div>
            <div className="tablespecs">{process.process_os_type}</div>
            <div> {process.process_build}</div>
            <div className="tablespecs">{process.process_build_value}</div>
            <div>{process.process_admin}</div>
            <div className="tablespecs">{process.process_admin_value}</div>
            <div>{process.process_network}</div>
            <div className="tablespecs">{process.process_network_value}</div>
          </div>
          <br />

          <div
            style={{
              display: "flex",
              borderBottom: "3px dotted #E8EAED",
              columnGap: "30px",
              color: "#96a4b5",
            }}
          >
            {specification.map((e) => {
              return <div>{e}</div>;
            })}
          </div>

          <div
            style={{
              borderBottom: "3px dotted #E8EAED",
              display: "flex",
              columnGap: "36px",
              color: "#96a4b5",
            }}
          >
            {description.map((e) => {
              return <div>{e} </div>;
            })}
            <Icons
              name={CardPart2.arrowdownicon}
              color="currentColor"
              size={24}
            />
            <Icons name={CardPart2.temp_icon} color="currentColor" size={24} />
            <div></div>
          </div>
        </div>

        <br />
      </div>
    </>
  );
};
export default Progressbar5;

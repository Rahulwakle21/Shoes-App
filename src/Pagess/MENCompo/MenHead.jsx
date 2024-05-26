import React, { useState } from "react";
import "./MenHead.css";
import { Col, Container, Row } from "react-bootstrap";
import MenWomCard from "../../common/MenWomCard";
import { shoeData } from "./MenShoeData";
import { Link } from "react-router-dom";

const MenHead = () => {
  const [filterOption, setFilterOption] = useState("select");
  const [shoesData, setShoesData] = useState(shoeData);

  const filterShoes = () => {
    if (filterOption === "high") {
      return shoesData.sort((a, b) => b.price - a.price);
    } else if (filterOption === "low") {
      return shoesData.sort((a, b) => a.price - b.price);
    } else {
      return shoesData;
    }
  };
  return (
    <div className="py-5">
      <Container>
        <div className="filterSec">
          <label
            htmlFor="shoes"
            style={{ color: "white", marginRight: "10px" }}
          >
            Sort By :
          </label>
          <select
            name="shoes"
            value={filterOption}
            onChange={(e) => setFilterOption(e.target.value)}
          >
            <option value="select">--Price--</option>
            <option value="high">Price : High-Low </option>
            <option value="low">Price : Low-High</option>
          </select>
        </div>
        <Row>
          {filterShoes().map((shoe, i) => (
            <Col key={i} sm={12} md={6} xl={3} className="mx-auto mt-4 menCard">
              <Link to={`/shoedetailsmen?id=${i}`}>
                <MenWomCard
                  title={shoe.title}
                  title2={shoe.title2}
                  title3={shoe.title3}
                  price={`MRP : $ ${shoe.price}`}
                  img={shoe.img}
                />
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default MenHead;

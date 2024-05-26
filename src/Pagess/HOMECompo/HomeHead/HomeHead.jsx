import React, { useState } from "react";
import "./HomeHead.css";
import JordenRed from "../../../imaggess/nike-dunk-high-university-red-dd1399-106_1.webp";
// import ShoesmultiOne from "../../../imaggess/nike-dunk-high-chenille-grey-gum-DR8805-003-1-removebg-preview.png";
// import JordanWhite from "../../../imaggess/jordanWhitee-removebg-preview.png";
// import JordanBlue from "../../../imaggess/air-jordanBlue-removebg-preview.png";
// import DunkBlue from "../../../imaggess/air-jordanDunkBlue-removebg-preview.png";
// import DunkWhite from "../../../imaggess/air-jordanDunkWhite-Photoroom.png-Photoroom.png";
// import DunkRed from "../../../imaggess/air-jordan-DunkRed-removebg-preview.png";
// import AZBlue from "../../../imaggess/AZbluejpg-removebg-preview.png";
// import AZWhite from "../../../imaggess/AZWhite_-removebg-preview.png";
// import AZRed from "../../../imaggess/AZRed-removebg-preview.png";
import NewJor from "../../../imaggess/New3 (1).png";
import NewJor2 from "../../../imaggess/New2 (1).png";
import NewJor3 from "../../../imaggess/New1 (1).png";
// import ShoesmyltiThree from "../../../imaggess/menBuggy.png";
import OurCoolection from "../HomeCollection/OurCoolection";
import MenColle from "../HomeMEN/MenColle";
import Homebout from "../HomeAbout/Homebout";
import HomeWom from "../HomeWomen/HomeWom";

const HomeHead = () => {

const [shoeImage, setShoeImage] = useState(JordenRed);


  // const [allShoeImages] = useState([
  //   { name: "JordenRed", image: JordenRed },
  //   { name: "JordanWhite", image: JordanWhite },
  //   { name: "JordanBlue", image: JordanBlue },
  //   { name: "DunkBlue", image: DunkBlue },
  //   { name: "DunkRed", image: DunkRed },
  //   { name: "DunkWhite", image: DunkWhite },
  //   { name: "AZBlue", image: AZBlue },
  //   { name: "AZRed", image: AZRed },
  //   { name: "AZWhite", image: AZWhite },
  // ]);

  // const handleImageChange = (imageUrl) => {
  //   setShoeImage(imageUrl);
  // };
  
  
  // const filterShoesByColor = (colorName) => {
  //   const filteredShoe = allShoeImages.find(
  //     (shoe) => shoe.name.toLowerCase().includes(colorName.toLowerCase())
  //   );
  //   if (filteredShoe) {
  //     setShoeImage(filteredShoe.image); 
  //   }
  // };


  return (
    <div>
     <div className="container mt-5">
        <div className="row">
          <div className="col-md-3 mx-auto mt-4">
            <div className="headContent">
              <h2 style={{ lineHeight: "50px" }}>
                The ULTIMATE <br />
                <span style={{ color: "#D90D0A" }}>SNEAK</span> SHOE <br />
                PARADISE
              </h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aliquam, quos.
              </p>
              <button className="btn mt-3">BUY NOW</button>
              <div className="mt-3">
                <h5>Color</h5>
                <div className="ColorHEad">
                  <div
                    className="colorChange"
                    style={{ backgroundColor: "red" }}
                    onClick={() => setShoeImage(JordenRed)}
                  ></div>
                  <div
                    className="colorChange"
                    style={{ backgroundColor: "blue" }}
                    onClick={() => setShoeImage(NewJor3)}
                  ></div>
                  <div
                    className="colorChange"
                    style={{ backgroundColor: "white" }}
                    onClick={() => setShoeImage(NewJor2)}
                  ></div>
                   <div
                    className="colorChange"
                    style={{ backgroundColor: "gray" }}
                    onClick={() => setShoeImage(NewJor)}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-12 mx-auto">
            <div className="imgHeadShoes">
              <img src={shoeImage} alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-3 col-sm-12 col-12 text-center">
            <div className="multiShoes">
               {/* <div className="shoeOne">
                <img
                  src={DunkBlue}
                  alt=""
                  style={{ height: "80px" }}
                  onClick={() => handleImageChange(DunkBlue)}
                />
              </div>  */}
              <div className="shoeOne">
                <img
                  src={NewJor3}
                  alt=""
                  style={{ height: "140px" }}
                  onClick={() => setShoeImage(NewJor3)}
                />
              </div>
              <div className="shoeOne">
                <img
                  src={NewJor2}
                  alt=""
                  style={{ height: "140px" }}
                  onClick={() => setShoeImage(NewJor2)}
                />
              </div>
              <div className="shoeOne">
                <img
                  src={NewJor}
                  alt=""
                  style={{ height: "140px" }}
                  onClick={() => setShoeImage(NewJor)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <OurCoolection />
      <MenColle />
      <Homebout />
      <HomeWom />
    </div>
  );
};

export default HomeHead;



import React from "react";
import Card from "react-bootstrap/Card";

const MenWomCard = ({img,title,title2,title3,price,style}) => {
  // console.log("imgUrl in MenWomCard:", img);
 
  return (
    <div>
  
      <Card style={{ width: "18rem",style }} >
        <Card.Img variant="top" src={img}  />
        <Card.Body>
          <Card.Title style={{color:"#9E3500"}}>{title}</Card.Title>
          <Card.Text>
            {title2} <br />
            {title3}
          </Card.Text>
        
          <Card.Text>
            {price}
          </Card.Text>

        </Card.Body>
      </Card>
      
    </div>
  );
};

export default MenWomCard;

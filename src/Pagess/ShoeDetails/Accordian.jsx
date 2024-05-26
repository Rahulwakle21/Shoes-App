import React from "react";
import { Accordion } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

const Accordian = () => {
  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Delivery & Return</Accordion.Header>
          <Accordion.Body>
            All purchases are subject to delivery fees.
            <ul>
              <li>Standard delivery 4–9 business days</li>
            </ul>
            Orders are processed and delivered Monday–Friday (excluding public
            holidays) Nike Members enjoy free returns
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>How This Was Made</Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>
                This product was responsibly designed utilising recycled
                materials from post-consumer and/or post-manufactured waste. One
                of our biggest steps on our journey to zero carbon and zero
                waste is in choosing our materials because they account for more
                than 70% of any product's footprint. By reusing existing
                plastics, yarns and textiles, we significantly reduce our
                emissions. Our goal is to use as many recycled materials as
                possible without compromising on performance, durability and
                style.
              </li>
              <li>
                Learn more about our Move to Zero journey towards zero carbon
                and zero waste, including how we're working to design product
                with sustainability in mind and help protect the future of where
                we live and play.
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            Review (4){" "}
            <span className="ms-4">
              <FaStar /> <FaStar /> <FaStar /> <FaStar />
            </span>
          </Accordion.Header>
          <Accordion.Body>
            <b>Great Shoes In Running</b> <br />
            <span className="py-3">
              {" "}
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
            </span>{" "}
            <br />
            RANBIRSINHf66228c1b0714f2ebae244ed4ddd7791 - 10 Apr 2024 Wow! These
            were my first pair of new running shoes in 3 years and the
            difference is incredible. I'm a heavy stepper and the bounce and
            cushion of these make my steps feel so light, they're wide on the
            outsole and super light look good too! My runs are more enjoyable
            Now l🥳 Thank you Nike ✅... More
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Product Information</Accordion.Header>
          <Accordion.Body>
            Declaration of Importer: Direct import by the individual customer
            Marketed by: Nike Global Trading B.V. Singapore Branch, 30 Pasir
            Panjang Road, #10-31/32, Mapletree Business City, Singapore 117 440
            Net Quantity: 1 Pair
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Accordian;

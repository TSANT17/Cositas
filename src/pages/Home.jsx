import React, { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import heroImg from "../assets/images/Fiesta_1.png";
import "../styles/hero-section.css";
import { Link } from "react-router-dom";
import "../styles/home.css";
import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";
import products from "../assets/fake-data/products.js";

const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImg01,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },

  {
    title: "Super Dine In",
    imgUrl: featureImg02,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },
  {
    title: "Easy Pick Up",
    imgUrl: featureImg03,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },
];

const Home = () => {
  const [category, setCategory] = useState("Todas");
  const [allProducts, setAllProducts] = useState(products);

  const [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {
    const filteredPizza = products.filter((item) => item.category === "15 años");
    const slicePizza = filteredPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, []);

  useEffect(() => {
    if (category === "Todas") {
      setAllProducts(products);
    }

    if (category === "BODAS") {
      const filteredProducts = products.filter(
        (item) => item.category === "Bodas"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "15 AÑOS") {
      const filteredProducts = products.filter(
        (item) => item.category === "15 años"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "CUMPLEAÑOS") {
      const filteredProducts = products.filter(
        (item) => item.category === "Cumpleaños"
      );

      setAllProducts(filteredProducts);
    }
  }, [category]);

  return (
    <Helmet title="Home">
      <section className="section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h5 className="mb-3">LAS MEJORES OFERTAS Y PARA TUS EVENTOS ESPECIALES</h5>
                <h1 className="mb-4 hero__title">
                  <span>Disfruta</span> con tus <br /> 
                  <span> seres queridos.</span>
                </h1>
                <p className="textohome">
                Disfruta de tus momentos especiales con las personas que quieren en los mejores lugares de eventos en tu zona.
                </p>

                
                <div className=" hero__service  d-flex align-items-center gap-5 mt-5 ">
                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-car-line"></i>
                    </span>{" "}
                    Cercanía
                  </p>

                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-shield-check-line"></i>
                    </span>{" "}
                   Compra 100% segura
                  </p>
                </div>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero-img" className="w200" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

     

      
    </Helmet>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../assets/cardsStyles.css";
import Filter from "./Filter";

const Cards = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://rickandmortyapi.com/api/character"
      );
      setData(response.data.results);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <div className="cards-wrapper">
        {loading ? (
          <h1 style={{ textAlign: "center", width: "100%" }}>Loading...</h1>
        ) : (
          <>
            <header>
              <h1 className="main-title">All Characters</h1>
              <Filter setCharacters={setData} />
              <hr />
            </header>

            {data.map(({ name, image, gender, id }, index) => (
              <Card
                className="card"
                key={index}
                style={{
                  width: "18rem",
                  boxShadow:
                    "0 4px 8px rgba(0, 0, 0, 0.2), 0 8px 16px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text>{gender}</Card.Text>
                  <Button
                    href={`http://localhost:3000/character/${id}`}
                    variant="primary"
                  >
                    Explore Character
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Cards;

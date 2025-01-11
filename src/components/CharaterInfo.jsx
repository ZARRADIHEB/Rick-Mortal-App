import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../assets/characterInfo.css";
import Button from "react-bootstrap/Button";

const CharaterInfo = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);
  const [found, setFound] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character/${id}`
        );
        setData(response.data);
      } catch (err) {
        console.error(err);
        setFound(false);
      }
    };

    fetchData();
  }, [id]);

  const { name, image, status, gender } = data;

  return (
    <div className="wrapper">
      {!found ? (
        <>
          <h1 className="not-found">Character Not Found 😢</h1>
          <Button className="home-btn" href="/">
            Back To Home!
          </Button>
        </>
      ) : (
        <>
          <Button href="/" className="home-btn">
            Back To Home!
          </Button>
          <div className="img">
            <img className="details" src={image} alt="" />
          </div>
          <div className="infos">
            <h1>{name}</h1>
            <p>Gender: {gender}</p>
            <p>Status: {status}</p>
          </div>
          <div className="buttons">
            <Button
              href={`/character/${parseInt(id) - 1}`}
            >
              ◀ Previous Character
            </Button>
            <Button
              href={`/character/${parseInt(id) + 1}`}
            >
              Next Character ▶
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default CharaterInfo;

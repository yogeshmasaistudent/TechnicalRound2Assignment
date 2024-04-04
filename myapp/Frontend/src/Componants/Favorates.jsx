import axios from "axios";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
function Favorates() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/movie`);
      console.log(res);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "10px",
      }}
    >
      {data &&
        data.map((item, index) => {
          return (
            <div key={index}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={item.Poster} />
                <Card.Body>
                  <Card.Title>{item.Title}</Card.Title>
                  <Card.Text>Year: {item.Year}</Card.Text>
                  <Card.Text>Type: {item.Types}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          );
        })}
    </div>
  );
}

export default Favorates;

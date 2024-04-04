import axios from "axios";
import { Button, Card, Col, Form, Navbar, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function Search() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        `https://www.omdbapi.com/?apikey=41214a7&s=${search}`
      );
      console.log(res);
      setData(res.data.Search);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFav = async (data) => {
    console.log(data);
    try {
      const res = await axios.post(`http://localhost:8080/movie/add`, {
        Poster: data.Poster,
        Title: data.Title,
        Types: data.Type,
        Year: data.Year,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <Navbar className="bg-body-tertiary justify-content-center">
          <Form inline="true">
            <Row>
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Enter Movie Name"
                  className=" mr-sm-2"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </Col>
              <Col xs="auto">
                <Button type="button" onClick={handleSearch} variant="primary">
                  Search
                </Button>
              </Col>
            </Row>
          </Form>
        </Navbar>
      </div>
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
                    <Card.Text>Type: {item.Type}</Card.Text>
                    <Button onClick={() => handleFav(item)} variant="primary">
                      Add to Favourate
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Search;

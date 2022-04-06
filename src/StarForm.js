import axios from "axios";
import "./style.css";
import React from "react";
import { useState, useEffect } from "react";

const StarForm = (props) => {
  const [err, setErr] = useState([]);
  const [formValue, setFormValue] = useState({
    title: null,
    weight: null,
    height: null,
    matches: null,
    wins: null,
    defeats: null,
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setErr([]);
    const starObj = {
      title: event.target.title.value,
      weight: event.target.weight.value,
      height: event.target.height.value,
      matches: event.target.matches.value,
      wins: event.target.wins.value,
      defeats: event.target.defeats.value,
    };

    axios
      .post("/api/v1/stars", starObj)
      .then((result) => {
        if (result.status == 201) {
          alert("Successfully saved to database");
        }
      })
      .catch((error) => {
        setErr([...error.response.data.errors]);
      });
  };

  const handleFormChange = (event) => {
    setErr([]);
    const frObj = JSON.parse(
      `{"${event.target.name}" : "${event.target.value}"}`
    );
    setFormValue({ ...formValue, ...frObj });
  };
  useEffect(
    function validateForm1() {
      axios
        .post("/api/v1/stars/validateStar", formValue)
        .then((result) => {})
        .catch((error) => {
          setErr([...error.response.data.errors]);
        });
    },
    [formValue]
  );

  return (
    <div className="starForm">
      <h1>Enter Star Details</h1>
      <form onSubmit={(event) => handleFormSubmit(event)}>
        <div>
          <label>
            WWE Star Name:
            <input
              type="text"
              name="title"
              required
              onChange={(event) => handleFormChange(event)}
            />
          </label>
        </div>

        <div>
          <label>
            Weight (kgs):
            <input
              type="text"
              name="weight"
              required
              min={0}
              step={1}
              onChange={(event) => handleFormChange(event)}
            />
          </label>
        </div>

        <div>
          <label>
            Height (meters):
            <input
              type="text"
              name="height"
              required
              min={0}
              step={0.01}
              onChange={(event) => handleFormChange(event)}
            />
          </label>
        </div>

        <div>
          <label>
            Matches:
            <input
              type="text"
              name="matches"
              min={0}
              step={1}
              required
              onChange={(event) => handleFormChange(event)}
            />
          </label>
        </div>

        <div>
          <label>
            Wins:
            <input
              type="text"
              name="wins"
              min={0}
              step={1}
              required
              onChange={(event) => handleFormChange(event)}
            />
          </label>
        </div>

        <div>
          <label>
            Defeats:
            <input
              type="text"
              name="defeats"
              required
              min={0}
              step={1}
              onChange={(event) => handleFormChange(event)}
            />
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>

      <div className="errorDiv">
        {err[0] ? err.map((er, index) => <p key={index}>{er}</p>) : <></>}
      </div>
    </div>
  );
};

export default StarForm;

import * as React from "react";
import "../events/Container.css";

export default function DashCard(props) {
  return (
    <>
      <div
        className="card"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0),rgba(0,0,0,1)),url("${props.detail.imageURL}")`,
          marginBottom: "20px",
        }}
      >
        <div className="card-content" style={{ transform: "translateY(0)" }}>
          <h1>{props.detail.title}</h1>
          <h2>score: {props.detail.score}</h2>
          <p>
            {props.detail.day1 ? `Time: ${props.detail.day1}` : ""}
            <br />
            <br />
            {props.detail.day2 ? `Time: ${props.detail.day2}` : ""}
            <br />
            <br />
            {props.detail.day3 ? `Time: ${props.detail.day3}` : ""}
            <br />
            <br />
            Place: {props.detail.place}
          </p>
        </div>
      </div>
    </>
  );
}

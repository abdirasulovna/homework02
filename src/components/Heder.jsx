import React from "react";
import "./Header.css";
import Button from "./Button";

const Heder = () => {
  return (
    <div>
      <h1>
        Favorite Movies
        <div className="">
          <Button
            title="ADD MOVIES"
            color="rgb(231, 125, 59)"
            borderRadius="20px"
          />
        </div>
      </h1>
    </div>
  );
};

export default Heder;

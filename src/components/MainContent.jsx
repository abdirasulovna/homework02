import React from "react";
import Button from "./Button";
import "./MainContent.css";

const MainContent = () => {
  const movies = [
    {
      id: 1,

      title: "Avatar 1",

      rating: 4,

      img: "https://image.cnbcfm.com/api/v1/image/105897632-1557241558937avatar-e1541360922907.jpg?v=1664130328&w=1920&h=1080",
    },

    {
      id: 2,

      title: "Kunfu panda",

      rating: 5,

      img: "https://m.media-amazon.com/images/M/MV5BODJkZTZhMWItMDI3Yy00ZWZlLTk4NjQtOTI1ZjU5NjBjZTVjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg",
    },

    {
      id: 3,

      title: "NarutoShipuden",

      rating: 5,

      img: "https://cdn.europosters.eu/image/1300/posters/naruto-shippuden-i84239.jpg",
    },

    {
      id: 4,

      title: "Hobbit",

      rating: 5,

      img: "https://m.media-amazon.com/images/M/MV5BMTcwNTE4MTUxMl5BMl5BanBnXkFtZTcwMDIyODM4OA@@._V1_FMjpg_UX1000_.jpg",
    },
  ];

  return (
    <div>
      {movies.map((item) => {
        return (
          <div className="items">
            <span>{item.id}</span>
            <img src={item.img} alt="" />
            <div className="buttons">
              <h5>{item.title}</h5>
              <div className="item">
                <Button
                  title={"4/5stars"}
                  text={"5/5 stars"}
                  color="rgb(231, 125, 59)"
                  borderRadius="15px"
                />
                <Button title={"DELETE"} color="red" />
                <Button title={"EDIT"} color="blue" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MainContent;

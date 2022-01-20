import React from "react";

const Mainsidebar = () => {
  let cards = [
    {
      date: "2019-03-22",
      url: "https://apod.nasa.gov/apod/image/0608/exp1Launch_msfc_c22.jpg",
    },
    {
      date: "2019-03-22",
      url: "https://apod.nasa.gov/apod/image/0608/exp1Launch_msfc_c22.jpg",
    },
    {
      date: "2019-03-22",
      url: "https://apod.nasa.gov/apod/image/0608/exp1Launch_msfc_c22.jpg",
    },
  ];
  return (
    <>
      <h3>What You Liked</h3>
      <div className="side-card-container">
        {cards.map((card,index) => {
          const { date, url } = card;
          return (
            <div className="side-card" key={date+index}>
              <img src={`${url}`} alt={date} />
              <p>{date}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Mainsidebar;

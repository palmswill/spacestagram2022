import React,{useEffect,useState} from "react";
import Maincard from "../components/mainCard/MainCard";
import API from "../methods/APIs";

const Displaycards = () => {

  const [cards,setCards]=useState([]);
  
  useEffect(() => {
    API.getRandomPost()
    .then(res=>setCards(res)
    )
  }, []);



  // const cards = [
  //   {
  //     copyright: "Astro Anarchy",
  //     date: "2009-01-31",
  //     explanation:
  //       "It's easy to get lost following the intricate filaments in this detailed image of faint supernova remnant Simeis 147. Also cataloged as Sh2-240 and seen towards the constellation Taurus, it covers nearly 3 degrees (6 full moons) on the sky. That corresponds to a width of 150 light-years at the stellar debris cloud's estimated distance of 3,000 light-years. The remarkable narrow-band composite image in the Hubble color palette includes emission from hydrogen, sulfur, and oxygen atoms tracing regions of shocked, glowing gas. This supernova remnant has an estimated age of about 40,000 years - meaning light from the massive stellar explosion first reached Earth 40,000 years ago. But this expanding remnant is not the only aftermath. The cosmic catastrophe also left behind a spinning neutron star or pulsar, all that remains of the original star's core.   digg_url = 'http://apod.nasa.gov/apod/ap090131.html'; digg_skin = 'compact';",
  //     hdurl:
  //       "https://apod.nasa.gov/apod/image/0901/s147metsavainioNBMedium.jpg",
  //     media_type: "image",
  //     service_version: "v1",
  //     title: "Simeis 147: Supernova Remnant",
  //     url: "https://apod.nasa.gov/apod/image/0901/s147metsavainioNBMedium_c800.jpg",
  //   },
  //   {
  //     copyright: "Eric Mouquet",
  //     date: "2006-10-18",
  //     explanation:
  //       "What created this huge space bubble? Blown by the wind from a star, this tantalizing, ghostly apparition is cataloged as NGC 7635, but known simply as The Bubble Nebula. Astronomer Eric Mouquet's striking view utilizes a long exposure with hydrogen alpha light to reveal the intricate details of this cosmic bubble and its environment. Although it looks delicate, the 10 light-year diameter bubble offers evidence of violent processes at work. Seen here above and right of the Bubble's center is a bright hot star embedded in reflecting dust. A fierce stellar wind and intense radiation from the star, which likely has a mass 10 to 20 times that of the Sun, has blasted out the structure of glowing gas against denser material in a surrounding molecular cloud. The intriguing Bubble Nebula lies a mere 11,000 light-years away toward the boastful constellation Cassiopeia.",
  //     hdurl: "https://apod.nasa.gov/apod/image/0610/bubble_mouquet_big.jpg",
  //     media_type: "image",
  //     service_version: "v1",
  //     title: "NGC 7635: The Bubble",
  //     url: "https://apod.nasa.gov/apod/image/0610/bubble_mouquet.jpg",
  //   },
  // ];

  return (
    <div>
      {cards.map((card, index) => (
        <Maincard info={card} id={card.date + index} key={card.date + index} />
      ))}
    </div>
  );
};

export default Displaycards;

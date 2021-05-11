import { useState, useEffect } from "react";

const Joke = () => {
  const [joke, setJoke] = useState("");
  useEffect(() => {
    if (!navigator.online) {
      if (localStorage.getItem("joke") === null) {
        setJoke("Loading...");
      } else {
        setJoke(localStorage.getItem("joke"));
      }
    }

    fetch(
      //hash=md5(ts+private+public)
      "http://gateway.marvel.com/v1/public/comics?ts=1&apikey=cf5fc55e2c41207d821900811de06200&hash=0075459b11ec3322f7dac924a91cea27"
    )
      .then((result) => result.json())
      .then((result) => {
        localStorage.setItem("joke", result.value);
        setJoke(result.data.count);
        console.log(result);
      });
  }, []);

  return (
    <div>
      <h1>Joke</h1>
      <p>{joke} Marvel info!</p>
    </div>
  );
};

export default Joke;

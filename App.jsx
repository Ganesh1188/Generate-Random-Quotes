import React, { useEffect, useState } from "react";

export default function App() {
  const [quote, setQuote] = useState();
  const [author, setAuthor] = useState();
  const [loading, setLoading] = useState(false);

  const handleButton = () => {
    setLoading(true); 
    fetch("https://dummyjson.com/quotes")
      .then((res) => res.json())
      .then((data) => {
        const randomQuote =
          data.quotes[Math.floor(Math.random() * data.quotes.length)]; 
        setQuote(randomQuote.quote); 
        setAuthor(randomQuote.author); 
        setLoading(false); 
      })
      .catch(() => {
        setLoading(false);
        setQuote("Error fetching quote"); 
      });
  };

  useEffect(()=>{
    handleButton();
  },[]);
  
  return (
    <div>
      <h1>Random Quote generator</h1>
      {loading ? (
        <p>Loading......</p>
      ) : (
        <>
          <p>"{quote}"</p>
          <p>- {author}</p>
          <button onClick={handleButton}>Get New Quote</button>
        </>
      )}
    </div>
  );
}

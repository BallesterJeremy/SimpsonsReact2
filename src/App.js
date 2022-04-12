import "./App.css";
import QuoteCard from "./components/QuoteCard";
import axios from "axios";
import { useState } from "react";

function App() {
  const [quotes, setQuotes] = useState();

  const getQuotes = () => {
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      .then((resp) => resp.data)
      .then((data) => {
        setQuotes(data[0]);
      });
  };

  return (
    <div className="App">
      <QuoteCard quotes={quotes} />
      <button type="button" onClick={getQuotes}>
        Get New Quotes
      </button>
    </div>
  );
}

export default App;

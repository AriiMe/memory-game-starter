import { useState } from "react";
import "./App.css";

// by creating the array of cards here it won't have to be re-created every time the component is reevaluated

// since our images are in the public folder we don't need to specify where they are since for our html they're located in root
const cardImages = [
  { src: "/img/helmet-1.png" },
  { src: "/img/potion-1.png" },
  { src: "/img/ring-1.png" },
  { src: "/img/scroll-1.png" },
  { src: "/img/shield-1.png" },
  { src: "/img/sword-1.png" },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  // we will create a function which will do three things for us
  //1. duplicate each card once so we have a match
  //2. randomize the odd of our cards using sort method
  //3. apply random id to each of the 12 cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
    // since this shuffle function can each time recreate and randomize cards we can aswell set turns back to 0
  };
  console.log(cards, turns);
  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {cards.map((card) => (
          <div key={card.id} className="card">
            <div>
              <img className="front" src={card.src} alt="card front" />
              <img className="back" src="/img/cover.png" alt="card back" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

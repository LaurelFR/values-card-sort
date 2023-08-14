import React from "react";

export default function CardGenerator() {
  const cardList = [
    {
      word: "Acceptance",
      definition: "to be accepted as I am",
    },
    {
      word: "Accuracy",
      definition: "to be accurate in my opinions and beliefs",
    },
    {
      word: "Achievement",
      definition: "to have important accomplishments",
    },
    {
      word: "Adventure",
      definition: "to have new and exciting experiences",
    },
    {
      word: "Attractiveness",
      definition: "to be physically attractive",
    },
    {
      word: "Authority",
      definition: "to be in charge of and responsible for others",
    },
    {
      word: "Autonomy",
      definition: "to be self-determined and independent",
    },
    {
      word: "Beauty",
      definition: "to appreciate beauty around me",
    },
    {
      word: "Caring",
      definition: "to take care of others",
    },
    {
      word: "Challenge",
      definition: "to take on difficult tasks and problems",
    },
    {
      word: "Change",
      definition: "to have a life full of change and variety",
    },
    {
      word: "Comfort",
      definition: "to have a pleasant and comfortable life",
    },
    {
      word: "Commitment",
      definition: "to make enduring, meaninful commitments",
    },
    {
      word: "Compassion",
      definition: "to feel and act on concern for others",
    },
    {
      word: "Contribution",
      definition: "to make a lasting contribution in the world",
    },
    {
      word: "Cooperation",
      definition: "to work collaboratively with others",
    },
    {
      word: "Courtesy",
      definition: "to be considerate and polite toward others",
    },
    {
      word: "Creativity",
      definition: "to have new and original ideas",
    },
    {
      word: "Dependability",
      definition: "to be reliable and trustworthy",
    },
    {
      word: "Duty",
      definition: "to carry out my duties and obligations",
    },
    {
      word: "Ecology",
      definition: "to live in harmony with the environment",
    },
    {
      word: "Excitement",
      definition: "to be accepted as I am",
    },
    {
      word: "Faithfulness",
      definition: "to be loyal and true in relationships",
    },
    {
      word: "Fame",
      definition: "to be known and recognized",
    },
    {
      word: "Family",
      definition: "to have a happy, loving family",
    },
    {
      word: "Fitness",
      definition: "to be physically fit and strong",
    },
  ];
  return (
    <div className="CardGenerator">
      {cardList.map(function (card, index) {
        if (index < 6) {
          return (
            <div className="card" key={index}>
              <h5>{card.word}</h5>
              <p>{card.definition}</p>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}

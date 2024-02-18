import { Button } from "./Button/Button";

import { differences } from "../data";

import { useState } from "react";

export const DifferencesSection = () => {
  const [differencesContentType, setDifferencesContentType] = useState(null);
  
  const handleClick = (type) => {
    setDifferencesContentType(() => type);
  };

  return (
    <section>
      <h3>Чем мы отличаемся от других</h3>

      <Button
        onClick={() => handleClick("way")}
        isActive={differencesContentType === "way"}
      >
        Подход
      </Button>
      <Button
        onClick={() => handleClick("easy")}
        isActive={differencesContentType === "easy"}
      >
        Доступность
      </Button>
      <Button
        onClick={() => handleClick("program")}
        isActive={differencesContentType === "program"}
      >
        Концентрация
      </Button>

      {!differencesContentType && <p>{`Нажми на кнопку`}</p>}

      {differencesContentType && <p>{differences[differencesContentType]}</p>}
    </section>
  );
};

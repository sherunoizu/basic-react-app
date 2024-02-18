import { WayToTeach } from "./WayToTeach";

import { ways } from "../data";

export const TeachingSection = () => {
  return (
    <section>
      <h3>Наш подход к обучению</h3>

      <ul>
        {ways.map((way, index) => (
          <WayToTeach key={way.title} {...way} />
        ))}
      </ul>
    </section>
  );
};

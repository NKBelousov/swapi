import React from "react";
import { useTrail } from "react-spring";

import Person from "~/components/Person";

const config = { mass: 1, tension: 1000, friction: 60 };

function People({ data }) {
  const trail = useTrail(data.length, {
    config,
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <>
      {trail.map(({ opacity }, index) => (
        <Person
          key={data[index].name}
          {...data[index]}
          style={{
            opacity,
            transform: opacity.interpolate(
              o => `translate3d(0, ${(1 - o) * 20}px, 0)`
            ),
          }}
        />
      ))}
    </>
  );
}

export default People;

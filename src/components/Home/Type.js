import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "MERN Stack Developer",
        ],
        autoStart: true,
        loop: false,
        deleteSpeed: 60,
      }}
    />
  );
}

export default Type;

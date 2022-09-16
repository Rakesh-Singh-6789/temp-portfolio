import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Web Application Developer.",
          "Master of Science in Computer Science pursuing student at Cal State Fullerton, California USA.",
          "Front-End Web Developer.",
          "Android Application Developer."
        ],
        autoStart: true,
        loop: true,
        delay: 50,
        deleteSpeed: 20,
      }}
    />
  );
}

export default Type;

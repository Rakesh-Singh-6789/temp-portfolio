import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "A Software Engineer with 4 years of experience.",
          "Graduated with a Master of Science in Computer Science",
          "Front-End/FullStack Web Developer.",
          "Android Application Developer."
        ],
        autoStart: true,
        loop: true,
        delay: 30,
        deleteSpeed: 10,
      }}
    />
  );
}

export default Type;

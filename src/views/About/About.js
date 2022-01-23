import React from "react";
import WhatAmI from "./components/WhatAmI";
import WhatIDo from "./components/WhatIDo";

const About = () => (
  <div className="flex flex-col flex-grow justify-evenly">
    <WhatAmI />
    <WhatIDo />
  </div>
);

export default About;

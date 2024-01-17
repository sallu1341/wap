import "./Homepage.css";

import Bigadd from "./Bigadd/Bigadd"
import Category from "./Category/Category";
import Benefits from "./Benefits/Benefits";

const Homepage = ()=>{
  const design = (
    <>
    <Bigadd/>
    <Category/>
    <Benefits/>
       </>
  );
  return design;
}

export default Homepage;

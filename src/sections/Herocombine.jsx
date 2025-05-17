import Hero from "./Hero";
import Heromain from "./Heromain";

function Herocombine() {
  return (
    <div className="flex flex-col md:flex-row w-full bg-[#0f1115] min-h-screen">
       <div className="w-full md:w-1/2 h-full">
        <Heromain />
      </div>
      <div className="w-full md:w-1/2 h-full">
        <Hero />
      </div>
     
    </div>
  );
}

export default Herocombine;

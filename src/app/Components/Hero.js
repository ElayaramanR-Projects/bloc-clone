import Highlight from "./Highlight";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="text-white h-fit w-8/12 m-auto flex flex-col items-center">
      <p className="text-bold leading-relaxed text-white py-8 text-6xl font-bold  text-center">
        <Highlight text="Quantum" /> Algorithm Development made 10x{" "}
        <Highlight text="Faster" /> and <Highlight text="Easier" />
      </p>
      <Button buttonText='Book a Demo'/>
    </section>
  );
};

export default Hero;

import MainAbilities from "../Abilities";
import Services from "./services";
import Abilities from "./what_I_can_do";

const MainService = () => {
  return (
    <section className="bg-blue-900 h-screen flex flex-col items-center justify-center">
      <div className="flex flex-wrap w-full justify-around items-center">
        <Abilities />
        <MainAbilities />
      </div>

      <Services />
    </section>
  );
};

export default MainService;

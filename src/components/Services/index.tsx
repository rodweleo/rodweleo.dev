import MainAbilities from "../Abilities";
import Services from "./services";
import Abilities from "./what_I_can_do";

const MainService = () => {
  return (
    <section className="main-services relative">
      <div className="flex w-full h-full justify-center items-center">
        <Abilities />
        <MainAbilities />
      </div>
      <div className="w-full h-fit absolute bottom-[-10%]">
        <Services />
      </div>
    </section>
  );
};

export default MainService;

import Ability from "./ability";

const abilities = [
  {
    image: "src/assets/images/web_app_development.png",
    title: "Web Programming",
    projects: 10,
  },
  {
    image: "src/assets/images/Mobile-App-developer-3.png",
    title: "Mobile App Development",
    projects: 3,
  },
];

const abilityList = abilities.map((ability) => (
  <Ability props={{ ability: ability }} />
));
const MainAbilities = () => {
  return <section className="flex flex-col gap-3">{abilityList}</section>;
};

export default MainAbilities;

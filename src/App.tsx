import "./App.css";
import { Header } from "./Header";
import { MyButton } from "./MyButton";

export const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

function App() {
  return (
    <main>
      <Header />
      <MyButton />
    </main>
  );
}

export default App;

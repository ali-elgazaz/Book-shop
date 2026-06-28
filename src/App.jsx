import BestSeller from "./components/BestSeller";
import Hero from "./components/Hero";
import Policy from "./components/Policy";
import Recommended from "./components/Recommended";
import Sale from "./components/Sale";

function App() {
  return (
    <>
      <Hero size="large" />
      <Policy />
      <BestSeller />
      <Recommended />
      <Sale />
    </>
  );
}

export default App;

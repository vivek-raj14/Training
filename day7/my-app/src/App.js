import Cards from "./components/cards/Cards";
import Page from "./components/layout/page";
// import Parent from "./components/Parent";
import LevelOne from "./components/propDrilling/LevelOne";
import Parent from "./components/propsPassingFunction/Parent";
function App() {
  return (
    <div className="App">
      {/* <Parent /> */}
      <LevelOne />
      <Page />
      <Cards />
      <Parent />
    </div>
  );
}

export default App;

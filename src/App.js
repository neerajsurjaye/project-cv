import GeneralInfo from "./Component/GeneralInfo"
import EduExp from "./Component/EduExp"
import PraExp from "./Component/PraExp"


function App() {
  return (
    <div className="App">
      <h1>CV Generator</h1>
      <GeneralInfo />
      <div className="line"></div>
      <EduExp />
      <PraExp />
    </div>

  );
}

export default App;

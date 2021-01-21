import GeneralInfo from "./Component/GeneralInfo"
import EduExp from "./Component/EduExp"
import PraExp from "./Component/PraExp"
import react from "react"
import VisButton from "./VisButton"

class App extends react.Component {
  constructor() {
    super();

    this.state = {
      EduExp: {
        school: "",
        from: 0,
        to: 0,
        Qualification: "",
        edit: 0,
        data: []
      },
      PraExp: {}
    }

    this.getEdu = this.getEdu.bind(this);
  }

  getEdu = (e) => {
    this.setState({ EduExp: e });
  }

  getPra = () => {

  }

  viewBut = () => {

  }

  render() {

    console.log("parent ", this.state);
    return (
      <div className="App" >
        <h1>CV Generator</h1>
        <input type="button" value="preview" onClick={this.viewBut}></input>
        <GeneralInfo />
        <div className="line"></div>
        <EduExp getEdu={this.getEdu} EduExp={this.state.EduExp} />
        <div className="line"></div>
        <PraExp />
        <VisButton value="Click" render="1" className="button" />
      </div>

    );
  }
}

export default App;

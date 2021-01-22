import GeneralInfo from "./Component/GeneralInfo"
import EduExp from "./Component/EduExp"
import PraExp from "./Component/PraExp"
import react from "react"
// import VisButton from "./Component/VisButton"

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
      PraExp: {
        company: "",
        title: "",
        tasks: "",
        exp: "",
        edit: 0,
        data: []
      },
      buttons: "1",
      btnVal: "Preview"

    }

    this.getEdu = this.getEdu.bind(this);
    this.getPra = this.getPra.bind(this);
  }

  getEdu = (e) => {
    this.setState({ EduExp: e });
  }

  getPra = (e) => {
    this.setState({ PraExp: e });
    console.log("practicle Exp changed")
  }

  viewBut = () => {
    if (this.state.buttons === "0") {
      this.setState({
        buttons: "1",
        btnVal: "Preview"
      });
    }
    else {
      this.setState({
        buttons: "0",
        btnVal: "Update CV"
      });
    }
  }

  render() {

    console.log("parent ", this.state);
    return (
      <div className="App" >
        <h1>CV Generator</h1>
        <input className="button" type="button" value={this.state.btnVal} onClick={this.viewBut}></input>
        <GeneralInfo buttons={this.state.buttons} />
        <div className="line"></div>
        <EduExp getEdu={this.getEdu} EduExp={this.state.EduExp} button={this.state.buttons} />
        <div className="line"></div>
        <PraExp getPra={this.getPra} button={this.state.buttons} PraExp={this.state.PraExp} />
      </div>

    );
  }
}

export default App;

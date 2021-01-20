import react from "react";
import ShowData from "./ShowDataSchool";

class EduExp extends react.Component {
    constructor(props) {
        super();
        this.state = {
            school: "",
            from: 0,
            to: 0,
            Qualification: "",
            edit: 0,
            data: []
        }

        this.delEdu = this.delEdu.bind(this);
    }

    delEdu = (index) => {
        this.setState((prevState) => {
            let prevData = prevState.data.map(e => e);
            prevData.splice(index, 1);
            return {
                data: prevData
            }
        })
    }

    updateSchool = (e) => {
        // console.log(e.target.value, "  ", this.state.school);
        this.setState({ school: e.target.value });
    }
    updateFrom = (e) => {
        // console.log(e.target.value, "  ", this.state.school);
        this.setState({ from: e.target.value });
    }
    updateTo = (e) => {
        // console.log(e.target.value, "  ", this.state.school);
        this.setState({ to: e.target.value });
    }
    updateQual = (e) => {
        // console.log(e.target.value, "  ", this.state.school);
        this.setState({ Qualification: e.target.value });
        // console.log(this.state.Qualification);
    }

    addQuali = () => {
        return <div className="addQuali">
            <div>
                <label>School : </label> <input type="text" onChange={this.updateSchool} value={this.state.school}></input>
            </div>
            <div>
                <label>From : </label> <input type="text" onChange={this.updateFrom} value={this.state.from}></input>
            </div>
            <div>
                <label>To : </label> <input type="text" onChange={this.updateTo} value={this.state.to}></input>
            </div>
            <div>
                <label>Qualification : </label> <input type="text" onChange={this.updateQual} value={this.state.Qualification}></input>
            </div>
            <input type="button" value="submit" onClick={this.submitQuali} className="button"></input>
        </div >
    }

    submitQuali = () => {
        let data = {
            school: this.state.school,
            from: this.state.from,
            to: this.state.to,
            Qualification: this.state.Qualification
        };
        console.log(data.Qualifcation);

        this.setState((prevState) => {
            let prevData = prevState.data.map(e => e);
            prevData.push(data);
            return {
                data: prevData,
                edit: 0
            };
        })
    }

    showEdu = () => {
        let subButton = <input type="button" value="Add" onClick={this.setEdit} className="button"></input>;
        if (this.state.data.length === 0) {
            return subButton;
        } else {
            console.log(this.state.data);
            let data = [];
            let ts = this.state;
            for (let i = 0; i < this.state.data.length; i++) {

                data.push(<ShowData key={i} index={i} school={ts.data[i].school} from={ts.data[i].from} to={ts.data[i].to} qual={ts.data[i].Qualification} delData={this.delEdu} />)
            }
            return <div>
                {data}
                {subButton}
            </div>
        }
    }


    setEdit = () => {

        this.setState({ edit: 1 })
    }


    handleRender = () => {
        if (this.state.edit === 0) {
            return this.showEdu();
        }
        if (this.state.edit === 1) {
            return this.addQuali();
        }
    }

    render() {


        return (
            <div>
                {this.handleRender()}
            </div>
        )
    }
}

export default EduExp;
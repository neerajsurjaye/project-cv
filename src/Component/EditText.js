import react from "react";

class EditText extends react.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
            edit: 0
        }
    }

    comp = () => {

        if (this.state.edit === 1) {
            return <div className="Text">
                <input type="text" value={this.state.value} onChange={this.updateValue} ></input>
                <input type="button" value="Save" onClick={this.setEdit} className="button" ></input>
            </div>
        }

        return <div className="Text">
            <div >
                <label >{this.state.value}</label>
            </div>
            <input type="button" value="Edit" onClick={this.setEdit} className="button"></input>
        </div>
    }

    updateValue = (e) => {
        this.setState({ value: e.target.value })
    }

    setEdit = () => {
        this.setState(() => {
            if (this.state.edit === 0) {
                return { edit: 1 }
            }

            return { edit: 0 }
        });

    }

    render() {
        return this.comp();
    }
}

export default EditText;
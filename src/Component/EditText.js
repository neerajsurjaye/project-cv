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
            return <div>
                <input type="text" value={this.state.value} onChange={this.updateValue}></input>
                <input type="button" value="Save" onClick={this.setEdit}></input>
            </div>
        }

        return <div>
            <label >{this.state.value}</label>
            <input type="button" value="Edit" onClick={this.setEdit}></input>
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
        return <div>{this.comp()}</div>
    }
}

export default EditText;
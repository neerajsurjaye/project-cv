import react from "react";

class ShowData extends react.Component {
    render() {
        return <div>
            <label>{this.props.school}</label>
            <label>{this.props.from}</label>
            <label>{this.props.to}</label>
            <label>{this.props.qual}</label>
            <input type="button" value="delete" onClick={() => { this.props.delData(this.props.index) }}></input>
        </div>
    }
}

export default ShowData;
import react from "react";

class ShowData extends react.Component {
    render() {
        return <div>
            <label>School : {this.props.school} </label>
            <label>From : {this.props.from} </label>
            <label>To :{this.props.to} </label>
            <label>Qualifcation : {this.props.qual} </label>
            <input type="button" value="delete" className="button" onClick={() => { this.props.delData(this.props.index) }}></input>
        </div>
    }
}

export default ShowData;
import react from "react";

import EditText from "./EditText"

class GeneralInfo extends react.Component {
    render() {
        return (
            <div className="GeneralInfo">
                <EditText value="First Name" />
                <EditText value="Last Name" />
                <EditText value="Email" />
                <EditText value="PhoneNumber" />
            </div>
        )
    }

}

export default GeneralInfo;
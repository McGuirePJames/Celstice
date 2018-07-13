import * as React from "react";
import "../CompanyMotto/_CompanyMottoStylesheet.scss";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import * as faRocket from "@fortawesome/fontawesome-free-solid/faRocket";
export class CompanyMotto extends React.Component {
    render() {
        return (React.createElement("div", { className: "container-company-motto" },
            React.createElement("div", { className: "company-name" },
                React.createElement("p", null, "Selstice")),
            React.createElement("div", { className: "company-motto" },
                React.createElement("p", null, "Come fly with us"),
                React.createElement("div", { className: "container-icon" },
                    React.createElement(FontAwesomeIcon, { icon: faRocket })))));
    }
}
export default CompanyMotto;

import * as React from "react";
import "../CompanyDetails/_CompanyDetailsStylesheet.scss";
import Button from "../Button/Button";
export var EntryAnimationDirection;
(function (EntryAnimationDirection) {
    EntryAnimationDirection[EntryAnimationDirection["Left"] = 0] = "Left";
    EntryAnimationDirection[EntryAnimationDirection["Right"] = 1] = "Right";
    EntryAnimationDirection[EntryAnimationDirection["Up"] = 2] = "Up";
    EntryAnimationDirection[EntryAnimationDirection["Down"] = 3] = "Down";
})(EntryAnimationDirection || (EntryAnimationDirection = {}));
export class CompanyDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const titleColor = {
            color: this.props.TitleColor
        };
        return (React.createElement("div", { className: this.props.Reversed ? ("reversed company-detail") : ("company-detail") },
            React.createElement("div", { className: "company-detail__container-description" },
                React.createElement("h5", { className: "company-detail__title", style: titleColor }, this.props.Title),
                React.createElement("p", { className: "company-detail__description" }, this.props.Description),
                React.createElement(Button, { Text: this.props.ButtonText, Color: this.props.ButtonColor })),
            React.createElement("div", { className: "company-detail__images" },
                React.createElement("img", { src: this.props.ImagePath, alt: "Company Details Picture" }))));
    }
}
export default CompanyDetails;

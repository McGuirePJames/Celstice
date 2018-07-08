import * as React from "react";
import * as ReactDOM from "react-dom";
import "../CompanyDetails/_CompanyDetailsStylesheet.scss";
import Button from "../Button/Button";
import { MouseEvent, MouseEventHandler, ReactElement } from "react";


export interface ICompanyDetailsProps {
    Title: string;
    Description: string;
    ButtonText: string;
    ButtonColor: string;
    ImagePath: string;
    IconPath: string;
    Reversed: boolean;
}
export enum EntryAnimationDirection {
    Left,
    Right,
    Up,
    Down
}
export class CompanyDetails extends React.Component<ICompanyDetailsProps,  {}> {
    constructor(props) {
        super(props);
        this.state = {

        };
    }     
    public render(): ReactElement<ICompanyDetailsProps> {
        return (
            <div className={this.props.Reversed ? ("reversed company-detail") : ("company-detail")}>
                <div className="company-detail__container-description">
                    <h5 className="company-detail__title">{this.props.Title}</h5>
                    <p className="company-detail__description">{this.props.Description}</p>
                    <Button Text={this.props.ButtonText} Color={this.props.ButtonColor} />
                </div>
                <div className="company-detail__images">
                    <img src={this.props.ImagePath} alt="Company Details Picture"/>
                </div>
            </div>
        );
    }
}
export default CompanyDetails;

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '../Button/_ButtonStylesheet.scss';
import { MouseEvent, MouseEventHandler, ReactElement, CSSProperties, StyleHTMLAttributes } from 'react';
import { BackgroundColorProperty } from 'csstype';

export interface IButtonProps {
    Text: string,
    Color: string
}
export interface IButtonState {

}

export class Button extends React.Component<IButtonProps, IButtonState>{
    constructor(props: IButtonProps) {
        super(props)
        this.state = {

        }
    }
    render(): ReactElement<IButtonProps> {
        return (
            <button className="custom-button" type="button" style={{backgroundColor: this.props.Color}}>
                <span>{this.props.Text}</span>
            </button>
        )
    }
}
export default Button;
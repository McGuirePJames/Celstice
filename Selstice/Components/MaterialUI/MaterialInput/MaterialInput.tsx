import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import '../MaterialInput/_MaterialInput.scss';

export interface IContactUsProps {
    id: string;
    label: string;
    inputType: string;
    multiline: boolean;
    rows: number;
}
export class MaterialInput extends React.Component<IContactUsProps, {}> {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <TextField
                className="material-ui-input"
                id={this.props.id}
                label={this.props.label}
                type={this.props.inputType}
                multiline={this.props.multiline}
                rows={this.props.rows}
                margin="normal"
            />
        );
    }
}
export default MaterialInput
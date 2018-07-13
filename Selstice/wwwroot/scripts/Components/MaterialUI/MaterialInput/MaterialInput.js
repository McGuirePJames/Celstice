import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import '../MaterialInput/_MaterialInput.scss';
export class MaterialInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (React.createElement(TextField, { className: "material-ui-input", id: this.props.id, label: this.props.label, type: this.props.inputType, multiline: this.props.multiline, rows: this.props.rows, margin: "normal" }));
    }
}
export default MaterialInput;

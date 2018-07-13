import * as React from 'react';
import TextField from '@material-ui/core/TextField';
class MaterialUIInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (React.createElement(TextField, { id: this.props.id, label: this.props.label, type: this.props.inputType, multiline: this.props.multiline, rows: this.props.rows, margin: "normal" }));
    }
}
export default MaterialUIInput;

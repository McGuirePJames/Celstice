import * as React from 'react';
import Button from '@material-ui/core/Button';
export class MaterialUIButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (React.createElement(Button, { variant: "raised", color: "primary" }, "Hello World"));
    }
}
export default MaterialUIButton;
//# sourceMappingURL=MaterialUIButton.js.map
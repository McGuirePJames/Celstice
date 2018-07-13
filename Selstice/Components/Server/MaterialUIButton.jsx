import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

export class MaterialUIButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <Button variant="raised" color="primary">
                Hello World
            </Button>
        );
    }
}
export default MaterialUIButton;

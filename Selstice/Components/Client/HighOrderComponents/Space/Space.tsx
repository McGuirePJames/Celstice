import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Moon from '../../Moon/Moon';
import SpaceBackground from '../../SpaceBackground/SpaceBackground';
import '../Space/SpaceStylesheet.css'

export class Space extends React.Component {
    render() {
        return (
            <div className="space-container">
                <SpaceBackground />
                <Moon/>
            </div>
        )
    }
}
export default Space;
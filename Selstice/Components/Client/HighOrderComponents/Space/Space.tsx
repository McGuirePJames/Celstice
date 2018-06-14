import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Moon from '../../Moon/Moon';
import SpaceBackground from '../../SpaceBackground/SpaceBackground';
import '../Space/SpaceStylesheet.css'
import { CompanyMotto } from '../../CompanyMotto/CompanyMotto';

export class Space extends React.Component {
    render() {
        return (
            <div className="space-container">
                <SpaceBackground />
                <CompanyMotto/>
                <Moon/>
            </div>
        )
    }
}
export default Space;
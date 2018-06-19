import * as React from 'react';
import * as ReactDOM from 'react-dom';
import "../NavigationIcons/_NavigationIcons.scss"
import * as faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope'
import * as faHandshake from '@fortawesome/fontawesome-free-solid/faHandshake'
import * as faQuestion from '@fortawesome/fontawesome-free-solid/faQuestion'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

export class NavigationIcons extends React.Component {
    render() {
        return (
            <div className="container-navigation-icons">
                <FontAwesomeIcon icon={faHandshake} />
                <FontAwesomeIcon icon={faQuestion}/>
                <FontAwesomeIcon icon={faEnvelope} />
            </div>
        )
    }
}
export default NavigationIcons;
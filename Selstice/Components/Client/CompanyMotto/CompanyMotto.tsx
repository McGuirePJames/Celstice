import * as React from 'react';
import * as ReactDOM from 'react-dom';
import "../CompanyMotto/CompanyMottoStylesheet.css"
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faRocket } from '@fortawesome/fontawesome-free-solid'

export class CompanyMotto extends React.Component {
    render() {
        return (
            <div className="container-company-motto">
                <div className="company-name">
                    <p>Selstice</p>
                </div>
                <div className="company-motto">
                    <p>Come fly with us</p>
                    <div className="container-icon">
                        <FontAwesomeIcon icon={faRocket} />
                    </div>
                </div>
            </div>
        )
    }
}
export default CompanyMotto;
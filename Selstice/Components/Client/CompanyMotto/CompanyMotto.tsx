import * as React from "react";
import "../CompanyMotto/_CompanyMottoStylesheet.scss";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import * as faRocket from "@fortawesome/fontawesome-free-solid/faRocket";

export class CompanyMotto extends React.Component<{}, {}> {
    public render() {
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
        );
    }
}
export default CompanyMotto;

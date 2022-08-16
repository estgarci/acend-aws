import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer(props) {
    return (
        <>
        <footer className="footer">
            <div className="container main-box mt-0">
                <div className='row'>
                </div>
                <div className="row">
                    <div className="col-4 text-center text-nowrap">
                        <h5>Contact</h5>
                        <FontAwesomeIcon icon={["fab", "linkedin"]} /><a href="linkedin.com/in/esteban-garcia-dev">{' '}LinkedIn</a>
                    </div>
                    <div className="col-4 text-center text-nowrap">
                        <h5>Source code</h5>
                        <FontAwesomeIcon icon={["fab", "github"]} /><a href="https://github.com/estgarci/acend-aws">{' '}GitHub</a>
                    </div>
                    <div className="col-4 text-center text-nowrap">
                        <h5>API used</h5>
                        <FontAwesomeIcon icon={["fab", "fulcrum"]} /><a className="" href="https://flightaware.com/">{' '}Flight Aware</a>
                    </div>
                </div>
            </div>
        </footer>
        </>
    );
}

export default Footer;
import React from 'react';
import { NavLink as NavLinkRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer(props) {
    return (
        <>
        <footer className="footer">
            <div className="container main-box mt-0">
                <div className='row'>
                    {/* <div className='col-12'>
                    <h5>Go Make Something Awesome</h5>

Font Awesome is the internet's icon library and toolkit used by millions of designers, developers, and content creators.


                    </div> */}

                </div>
                <div className="row">
                    {/* <div className="col-sm-4 text-center">
                    
                    </div> */}
                    {/* <div className="col-6 col-sm-3 text-center">
                        <a className="btn btn-social-icon btn-github" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a> 
                    </div> */}
                    <div className="col-4 text-center text-nowrap">
                        <h5>Contact</h5>
                        <FontAwesomeIcon icon={["fab", "linkedin"]} /><a href="https://linkedin/estgarci/acend-aws">{' '}LinkedIn</a>
                    </div>
                    <div className="col-4 text-center text-nowrap">
                        <h5>Source code</h5>
                        <FontAwesomeIcon icon={["fab", "github"]} /><a href="https://github.com/estgarci/acend-aws">{' '}GitHub</a>
                    </div>
                    <div className="col-4 text-center text-nowrap">
                        <h5>API used</h5>
                        <FontAwesomeIcon icon={["fab", "fulcrum"]} /><a className="" href="https://www.github.com/">{' '}Flight Aware</a>
                    </div>
                </div>
            </div>
        </footer>
        </>
    );
}

export default Footer;
import React,{Component} from 'react';

class Contact extends Component {
    render()    {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 content">
                        <h3>Contact Us</h3>
                        <hr />
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            Hostel Avenue<br />
                            A-Zone, Durgapur<br />
                            West Bengal<br />
                            <i className="fa fa-phone"></i>: +91 96145 46545<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:shopondoorstep123@gmail.com">shopondoorstep123@gmail.com</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+91 9614546545"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-whatsapp"></i> WhatsApp</a>
                            <a role="button" className="btn btn-success" href="mailto:shopondoorstep123@gmail.com"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;


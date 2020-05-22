import React, {useState} from "react";

function Contact() {
    return (
        <div className="contact-base">
            <ContactForm/>
            <Info/>
        </div>
    );

}

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: '',
            email: '',
            subject: '',
            message: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({[name]: value});
    };

    handleSubmit = (event) => {
        event.preventDefault();
    };

    render() {
        return (
            <div>
                <h2>Please fill this form and we will get back to you</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="fname">Full name:</label><br/>
                    <input type="text" className="contact-input" name="name" value={this.state.name} onChange={this.handleChange}/><br/>

                    <label htmlFor="phone">Phone Number:</label><br/>
                    <input type="number" className="contact-input" name="phone" value={this.state.phone} onChange={this.handleChange}/><br/>

                    <label htmlFor="email">Email:</label><br/>
                    <input type="text" className="contact-input" name="email" value={this.state.email} onChange={this.handleChange}/><br/>

                    <label htmlFor="subject">Subject:</label><br/>
                    <input type="text" className="contact-input" name="subject" value={this.state.subject} onChange={this.handleChange}/><br/>

                    <label htmlFor="msg">Message:</label><br/>
                    <textarea type="text" className="contact-input" name="message" value={this.state.message} onChange={this.handleChange}/><br/>

                    <button type="button" id="contact-send-btn">Send message</button>
                </form>
            </div>
        );
    }
}

const Info = () => {
    return (
      <div id="contact-info">
          <h3>Get In Touch</h3>
          <p>Need to reach us ASAP? Get in touch with us</p>
          <hr/>

          <h3>Our Office</h3>
          <ul>
              <li>Location: BG 445 5th Banana Lane</li>
              <li>Phone: (+233)206-443-507</li>
              <li>Email: jnbofori@gmail.com</li>
          </ul>
          <hr/>

          <h3>Office Hours</h3>
          <ul>
              <li>Monday to Friday: 8 am - 5 pm</li>
              <li>Saturdays and Sundays: 9 am - 6 pm</li>
          </ul>
      </div>
    );
};

export default Contact;
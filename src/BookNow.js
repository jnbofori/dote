import React from "react";

class BookNow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            phone: "",
            service: "child care",
            hours: "",
            nights: "",
            sessions: "",
            date: "",
            comments: "Please add any extra information or enquiries here..."
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    componentDidMount() {
        let servicePeriod = document.getElementsByClassName('period');
        this.displayPeriodOption(servicePeriod);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        let servicePeriod = document.getElementsByClassName('period');
        for (let i = 0; i < servicePeriod.length; i++){
            servicePeriod[i].style.display = 'none';
        }

        this.displayPeriodOption(servicePeriod);
    }

    displayPeriodOption = (servicePeriod) => {
        if(this.state.service === "child care" || this.state.service === "tutoring" || this.state.service ==="pet day care"){
            servicePeriod[0].style.display = 'block';
        }else if (this.state.service === 'pet hosting' || this.state.service === 'pet sitting') {
            servicePeriod[1].style.display = 'block';
        }else{
            servicePeriod[2].style.display = 'block';
        }
    };

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
            <div style={{marginBottom : 80}}>
                <h2>Make A Reservation</h2>

                <form onSubmit={this.handleSubmit} >
                    <div id="booking">

                    <div>
                    <label htmlFor="fname">Full name:</label><br/>
                    <input type="text" className="contact-input" name="name" value={this.state.name} onChange={this.handleChange}/><br/>
                    </div>

                        <div>
                    <label htmlFor="phone">Phone Number:</label><br/>
                    <input type="number" className="contact-input" name="phone" value={this.state.phone} onChange={this.handleChange}/><br/>
                        </div>

                    <div>
                    <label htmlFor="service">Which service would you like?</label>
                    <select value={this.state.service} onChange={this.handleChange} name="service" className="contact-input">
                        <option value="child care">Child Care</option>
                        <option value="tutoring">Tutoring</option>
                        <option value="pet hosting">Pet Hosting</option>
                        <option value="pet sitting">Pet Sitting</option>
                        <option value="house visits">House Visits</option>
                        <option value="dog walking">Dog Walking</option>
                        <option value="pet day care">Pet Day Care</option>
                        <option value="pet grooming">Pet Grooming</option>
                    </select>
                    </div>

                    <div className="period">
                    <label htmlFor="hours">Hours:</label><br/>
                    <input type="number" className="contact-input" name="hours" value={this.state.hours} onChange={this.handleChange}/><br/>
                    </div>

                    <div className="period">
                    <label htmlFor="nights">Number of nights:</label><br/>
                    <input type="number" className="contact-input" name="nights" value={this.state.nights} onChange={this.handleChange}/><br/>
                    </div>

                    <div className="period">
                    <label htmlFor="sessions">Number of Sessions:</label><br/>
                    <input type="number" className="contact-input" name="sessions" value={this.state.sessions} onChange={this.handleChange}/>
                    </div>

                    <div>
                    <label htmlFor="date">Date:</label><br/>
                    <input type="date" className="contact-input" name="date" value={this.state.date} onChange={this.handleChange}/>
                    </div>

                    <div>
                    <label htmlFor="comments">Comments:</label><br/>
                    <textarea type="text" className="contact-input" name="comments" value={this.state.comments} onChange={this.handleChange}/>
                    </div>

                    </div>

                    <div><button type="button" className="book-btn">Submit</button></div>
                </form>
            </div>
        );
    }
}

export default BookNow;
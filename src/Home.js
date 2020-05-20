import React from "react";
import { Link } from "react-router-dom";
import sitter from './images/woman-reading-book.jpg';
import babe from './svgs/undraw_baby.svg';
import tutor from './svgs/undraw_teaching.svg';
import doggy from './svgs/undraw_good_doggy.svg'
import mode from './svgs/undraw_travel_mode.svg'
import home from './svgs/undraw_coming_home.svg'
import walking from './svgs/undraw_dog_walking.svg'
import day from './svgs/undraw_a_day_at_the_park.svg'
import groom from './svgs/undraw_refreshing_beverage.svg'
import { Service } from "./Service";

function Home() {
    const firstService = new Service(babe, "Child Care", "We offer the traditional baby sitting service for your required number of hours");
    const secondService = new Service(tutor, "Tutoring", "Need a baby sitter who's good at Math? Maybe creative writing? We've got you covered!");
    const thirdService = new Service(doggy,"Pet hosting","Our most popular service involves the sitter, taking an owner's pet into their home and caring for it");
    const fourthService = new Service(mode,"Pet sitting","Unlike Pet hosting, our sitters travel to your home and stay overnight");
    const fifthService = new Service(home,"House Visits","House visiting involves a Sitter travelling to your home to visit the pet 1-2 times per day.");
    const sixthService = new Service(walking,"Dog Walking","Dog Walking is our most flexible and popular daytime service.");
    const seventhService = new Service(day,"Pet Day Care"," Pet daycare involves the Sitter taking care of your pet during the day either at the Sitter's own home or your home.");
    const eigthService = new Service(groom,"Pet Grooming"," Pet Grooming is offered to owners who require premium care for their pet");

    const services = [firstService,secondService,thirdService,fourthService,fifthService,sixthService,seventhService,eigthService];

    return (
        <div>
            <div id="section">
                <div id="top-section-text">
                    <h1>Welcome to Dote</h1>
                    <h2>We put the give in care-giving</h2>
                    <Link to="/contact"><button>Book now >></button></Link>
                </div>
            </div>
            <div id="segment">
                <img id="sitter-img" src={sitter}/>
                <div id="paragraph">
                    Dote Pet and Baby Sitting is an organisation dedicated to providing
                    the best baby-sitting and pet-sitting services in Ghana. Our carefully selected staff
                    provide the best care for your little ones. So take that trip, go for that very important event.
                    Your kids and pets are safe with us.
                </div>
            </div>
            <div>
                <h1>Our Services</h1>
                <div className="service">
                {services.map(service => (
                    <Services image={service.image}
                              heading={service.heading}
                              text={service.text}
                    />
                ))}
                </div>
            </div>
        </div>
    );
}

const Services = ({image,heading,text}) => {
    return(
        <div>
            <img className="service-image" src={image} alt=""/>
            <h2>{heading}</h2>
            <p className="service-text">{text}</p>
        </div>
    );
};

export default Home;
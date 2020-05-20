import React from "react"
import pet from "./images/girl.jpg";
import dog from "./images/pet-care-dog.jpg"

function About() {
    return (
        <div id="about-base">
            <div className="flex-item">
                <h2>A Place where we put <b>your needs first!</b></h2>
                <p>It all started in 2017, when we noticed a need for sitting services in the country.
                    We discerned a lack of easily accessible, affordable and trustworthy baby sitters and decided to fill
                    that gap. Hence Dote was created, and grew into what it is today. An organization that puts your needs first.
                    We understand how difficult it can be to get good help these days, and how even more difficult it is as a
                    parent or pet owner to entrust your child or pet in the hands of another. That is why we make sure we do
                everything we can to make you feel comfortable and safe. Our sitters are required to go through thorough background
                checks and are carefully selected amongst the very best. All our staff must contain a natural skill set of nurturing,
                    compassion and respect. This is a top priority at Dote and a skill set which cannot be taught.</p>
            </div>

            <img src={dog} id="pet-sitter" className="flex-item"/>

            <div className="flex-item" style={{color: "#1A237E"}}><h2>"All our staff must contain a natural skill set of nurturing,
                compassion and respect. This is a top priority at Dote and a skill set which cannot be taught"</h2></div>

               <p className="flex-item">Have an important work dinner? Leaving town for a few days? Whether you plan weeks in advance or only have a
                moments notice for a babysitter – we can help. Our sitters carefully follow your instructions and ensure all
                your requests are fulfilled. At Dote, we know you might have some preferences. A baby sitter who's fluent in French maybe?
                Don't worry, we've got that sorted too. Just let us know what that preference might be.
            In the years since its inception Dote has already set the standard for both baby sitting and pet sitting and we
            expect to serve you for many more years to come.</p>

            <img src={pet} id="dog-sitter" className="flex-item"/>
        </div>
    );

}


export default About;
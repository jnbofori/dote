import React, {useEffect} from "react";

function Services() {
    useEffect(() => {
        document.getElementById("defaultOpen").click();
    });

    const openService = (serviceName, event) => {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(serviceName).style.display = "block";
        event.currentTarget.className += " active";
    };

    return (
       <div>
        <h2>Take a look at what we offer</h2>
        <div id="service-base">
            <div className="tab">
                <button className="tablinks" onClick={(e) => openService('Child Care', e)} id="defaultOpen">Child Care</button>
                <button className="tablinks" onClick={(e) => openService('Tutoring', e)}>Tutoring</button>
                <button className="tablinks" onClick={(e) => openService('Pet hosting', e)}>Pet hosting</button>
                <button className="tablinks" onClick={(e) => openService('Pet Sitting', e)}>Pet Sitting</button>
                <button className="tablinks" onClick={(e) => openService('House Visits', e)}>House Visits</button>
                <button className="tablinks" onClick={(e) => openService('Dog Walking', e)}>Dog Walking</button>
                <button className="tablinks" onClick={(e) => openService('Pet Day Care', e)}>Pet Day Care</button>
                <button className="tablinks" onClick={(e) => openService('Pet Grooming', e)}>Pet Grooming</button>
            </div>

            <div id="Child Care" className="tabcontent">
                <h3>Child Care</h3>
                <p>We offer the traditional baby sitting service for your required number of hours.
                    Our responsibilities include watching the children, making a meal and snacks,
                    and cleaning up after the children. To ensure we’re the
                    best fit for you and your family, we conduct <b>optional</b> complimentary Meet and Greets.
                    These appointments are approx 45 minutes long and allow each of us to become
                    better acquainted with each other, the services required and agree upon the
                    care of your child and your home. We’ll be able to conduct and interview via
                    phone initially then we can meet in person and finalize our paperwork.</p>
                <p><b>Time period - The service is measured per hour. We can discuss a schedule to ensure that
                    you agree on how many hours our sitter will spend with your child.</b></p>
            </div>

            <div id="Tutoring" className="tabcontent">
                <h3>Tutoring</h3>
                <p>Need a baby sitter who's good at Math? Maybe creative writing? We've got you covered!
                A service for parents who want some tutoring for their kids during baby sitting hours. We offer tutoring
                in Math, English, French and Spanish. Tutoring may or may not be included in the price for Child Care.
                However this is up to your discretion and can be discussed</p>
                <p><b>Time period - The service is measured per hour. We can discuss a schedule to ensure that
                    you agree on how many hours our sitter will spend with your child.</b></p>
            </div>

            <div id="Pet hosting" className="tabcontent">
                <h3>Pet hosting</h3>
                <p>Our most popular service for pets, involves the sitter, taking an owner's pet into their home and caring
                    for it. Pet hosting is a service used by owners who are travelling or will be away from their property
                    for a period of time. Dog walking may or may not be included in the price of Pet Hosting, however this
                    is up to the discretion of the Pet Sitter and should be discussed prior to the booking;</p>
                <p><b>Time period - The service is measured by nights. We will discuss a schedule to
                    ensure that you agree on how much time your pet is left alone during their stay.</b></p>
            </div>

            <div id="Pet Sitting" className="tabcontent">
                <h3>Pet Sitting</h3>
                <p> Pet Sitting involves our sitter travelling to an your house and staying overnight to look after
                    your pet. This service is used by owners who are travelling or who have pets who are not comfortable
                    in locations other than their own home. Dog walking may or may not be included in the price of Pet Sitting,
                    however this is up to the discretion of the Pet Sitter and should be discussed prior to the booking.</p>
                <p><b>Time period - The service is measured by nights. We will discuss a schedule to ensure that you agree on
                    how much time your pet is left alone during their stay.</b></p>
            </div>

            <div id="House Visits" className="tabcontent">
                <h3>House Visits</h3>
                <p>A service usually used by busy, working owners. House visiting involves a Sitter travelling to your
                    home to visit the pet 1-2 times per day. During these visits, Sitters will give the pet
                    the appropriate food, water and attention which was agreed upon with the you.</p>
                   <p><b>Time period - The service is measured per session. We will discuss how long
                       you'd like our sitter to spend with your pet when you visit, details regarding food, water and if
                       they need their litter tray cleaned or taken for a walk.</b></p>
            </div>

            <div id="Dog Walking" className="tabcontent">
                <h3>Dog Walking</h3>
                <p>Dog Walking is our most flexible and popular daytime service. Walks usually take between 30-90 minutes
                    depending on the size of the dog. This may be an add on to Pet hosting or Pet Sitting</p>
                   <p><b>Time period - The service is measured per session. We will discuss how long
                       you'd like us to spend walking your dog. Some smaller dogs may only need a short walk.</b></p>
            </div>

            <div id="Pet Day Care" className="tabcontent">
                <h3>Pet Day Care</h3>
                <p> Pet daycare involves the Sitter taking care of an your pet during the day either at
                    the Sitter's own home or the Pet Owner's home. This may involve feeding them, playing with them
                    or just being present to ensure nothing detrimental occurs.</p>
                    <p><b>Time period - The service is measured per hour. We will discuss how long
                        you'd like the session to last and whether you will also need Dog Walking during each session.</b></p>
            </div>

            <div id="Pet Grooming" className="tabcontent">
                <h3>Pet Grooming</h3>
                <p>Pet Grooming is offered to owners who require premium care for their pet. It usually involves the Sitter,
                    who has training in pet cleaning, attending to the pet's every pampering need. Our sitters will have your pet
                looking fresh and new</p>
                   <p><b>Time period - The service is measured per session.</b></p>
            </div>
        </div>
       </div>
    );

}

export default Services;
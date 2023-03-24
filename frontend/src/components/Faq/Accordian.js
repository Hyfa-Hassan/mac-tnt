import React from "react";

export const Accordion =()=>{
    return(
        <section className="accordion-section pb-100 position-relative">
            <div className="map-shapes">
                <div className="map-shape map-shape-2 map-shape-top">
                    <img src="assets/images/shapes/map-2.png" alt="shape"/>
                </div>
            </div>
            <div className="container">
                <div className="section-title">
                    <small style={{color:"#eb2427"}}>Get Your Answers</small>
                    <h2>Lets Discuss About All Of The Free Questions From Your Side</h2>
                </div>
                <div className="accordion box-width-680 m-auto" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Trip Style
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body text-justify" >
                            We offer a variety of trip styles to cater to different interests and preferences. Our trip styles include adventure, cultural immersion, luxury, family-friendly, and solo travel. Each trip style has its own unique itinerary, activities, and accommodations to ensure a customized and personalized travel experience for our clients.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Traveling With Children
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body text-justify">
                            We offer family-friendly trips that are tailored to the needs and interests of families traveling with children. Our itineraries include activities that are suitable for children of different ages, and we ensure that accommodations and transportation are child-friendly. We also provide experienced and knowledgeable guides who can engage and educate children during the trip.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseTwo">
                                Traveling Solo
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body text-justify">
                            Our solo travel packages are carefully crafted to provide a safe, enjoyable and hassle-free travel experience for those who prefer to travel alone. Our itineraries include activities that are ideal for solo travelers, and we ensure that accommodations and transportation are convenient and comfortable. We also provide expert guides who are knowledgeable about the destinations and can provide useful tips and advice. Additionally, we offer the option to join a small group tour with other solo travelers, allowing you to meet like-minded individuals and make new friends while exploring new places.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFour">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseTwo">
                                Room Types
                            </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                            <div className="accordion-body text-justify">
                            We offer a variety of room types to suit different preferences and budgets. Our standard room options usually include single, double and twin rooms, depending on the number of travelers and their requirements. Single rooms are ideal for solo travelers who prefer their own private space, while double and twin rooms are suitable for couples or friends traveling together. We also offer superior room options, such as suites or rooms with a balcony or sea view, for those who want to indulge in a more luxurious experience. 
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFive">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseTwo">
                                Food
                            </button>
                        </h2>
                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                            <div className="accordion-body text-justify">
                            We understand that food is an important aspect of travel, and we strive to provide our customers with a diverse and delicious culinary experience. Our tours usually include breakfast and some meals, which can vary depending on the itinerary and the destination. We always try to incorporate local cuisine into our meals, so you can sample authentic flavors and dishes from the region you are visiting. We also cater to dietary restrictions and preferences, such as vegetarian, vegan, gluten-free, and halal. If you have any specific dietary requirements, please let us know when booking, and we will do our best to accommodate your needs. Overall, our goal is to provide you with a memorable and satisfying dining experience during your travels.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingSix">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseTwo">
                                Accommodation
                            </button>
                        </h2>
                        <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                            <div className="accordion-body text-justify">
                            We offer a range of accommodation options to suit different preferences and budgets. Depending on the tour, you may stay in hotels, guesthouses, lodges, or even camping sites. We carefully select our accommodation partners based on factors such as location, comfort, cleanliness, and safety. We also take into account the local flavor and charm, so you can experience authentic and memorable stays. Our tours usually include standard or superior room categories, with amenities such as private bathrooms, air conditioning, and Wi-Fi. Some tours may offer more luxurious or unique accommodation, such as boutique hotels or traditional homestays. If you have any specific accommodation requests or requirements, please let us know when booking, and we will do our best to accommodate your needs. Our goal is to provide you with comfortable and enjoyable stays during your travels.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingSeven">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseTwo">
                                Acitivities
                            </button>
                        </h2>
                        <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                            <div className="accordion-body text-justify">
                            Our tours offer a wide range of activities to suit different interests and activity levels. Depending on the tour, you may have opportunities to participate in cultural experiences, adventure activities, wildlife encounters, city tours, and more. We design our itineraries to balance free time and organized activities, so you can have flexibility and choice in how you spend your days. Our activities are usually led by experienced and knowledgeable guides or local experts, who can provide insights and context to enhance your experience. We also prioritize safety and sustainability in our activities, and work with reputable partners and suppliers. Our goal is to offer you fun and enriching activities that showcase the best of each destination. If you have any specific activity requests or questions, please let us know when booking, and we will do our best to accommodate your needs.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingEight">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseTwo">
                                Camping
                            </button>
                        </h2>
                        <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                            <div className="accordion-body text-justify">
                            Yes, we offer camping as a type of accommodation on some of our tours. Camping can be a great way to connect with nature, experience the great outdoors, and save on accommodation costs. Our camping options vary depending on the destination and the tour, but typically include tents, sleeping bags, and basic camping gear. We also provide meals and snacks, and access to shared facilities such as showers and toilets. Camping is usually led by experienced guides or campsite managers, who can provide support and guidance as needed. Please note that camping may not be suitable for everyone, and may involve physical activity, exposure to elements, and limited facilities. If you are interested in camping on your tour, please check the tour itinerary and ask our team for more information. We can also help you customize your camping experience based on your preferences and needs.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingNine">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseTwo">
                                Transport
                            </button>
                        </h2>
                        <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
                            <div className="accordion-body text-justify">
                            We use a variety of transport options depending on the tour and the destination. Our aim is to provide safe, comfortable, and efficient transport that allows you to make the most of your tour experience. Some of our transport options include air-conditioned vehicles, buses, minibuses, boats, and trains. Our transport options are carefully selected based on factors such as distance, terrain, group size, and local conditions. We also consider environmental and social impacts when choosing our transport options, and strive to support sustainable and responsible tourism practices. Our experienced drivers and guides will ensure that you reach your destinations safely and on time, and can provide commentary and insights along the way. If you have any specific transport requirements or preferences, please let us know and we will do our best to accommodate them.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
import React from 'react';
// import PropTypes from 'prop-types'

const About = (props) => {
        const handleStyle = {
            color: props.mode==="dark"?"white":"#4D4B4A",
            backgroundColor: props.mode==="dark"?"#7A7775":"white"
        }
        return (
            <>
                <div className="container" >
                    <h1 className="my-3" style={{ color: props.mode === "dark" ? "white" : "#4D4B4A" }}>About Us</h1>
                    <div className="accordion" id="accordionExample" >
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" style={handleStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    What is NewsApp ?
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body" style={handleStyle}>
                                    <strong>NewsApp </strong> is react-based site which provides top headling articles and you can gain the detailed information after clicking on <b>"Read more" </b> button.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" style={handleStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    When it is developed ?
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body" style={handleStyle}>
                                    It is developed in <strong>Jan, 2023</strong> for learning the <i>REACT</i> concepts.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" style={handleStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Contacts
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body" style={handleStyle}>
                                    <i className='fas fa-address-card'></i> <strong>Founder: </strong> XYZ <br />
                                    <i className='fas fa-phone'></i> <strong>Phone: </strong> 98370927 <br />
                                    <i className='fas fa-envelope-open'></i> <strong>Mail: </strong> xyz@gmail.com

                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </>
        )
}


export default About

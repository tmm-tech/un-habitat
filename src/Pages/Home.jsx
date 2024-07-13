import React, { useEffect, useState } from 'react';
import TopBar from '../Components/TopBar';
import Footer from '../Components/Footer';
import CountUp from 'react-countup';
import logo from '../assets/R.png';
import { Element } from 'react-scroll';
import { Link } from 'react-router-dom';
import './Home.css';
const Home = ({ images }) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, [images]);
    return (
        <>
            <TopBar />
            <div className='ImageSlider'>
                <img className='slider-image' src={images[currentIndex].src} alt={images[currentIndex].alt} />
                <div className='carousel-caption'>
                    <div>
                        <h3>Welcome to UN</h3>
                        <p>
                            The United Nations, referred to informally as the UN, is an intergovernmental organization whose stated purposes are to maintain international peace and security, develop friendly relations among nations, achieve international cooperation, and serve as a centre for harmonizing the actions of nations.
                        </p>
                        <Link to="/login"><button className='slider-button'>Get Started</button></Link>
                    </div>
                </div>
            </div>
            {/* Facts Start */}
            <Element name="facts" className="container-xxl py-5">
                <div className="containers">
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="fact-item bg-light rounded text-center h-100 p-5">
                                <i className="fa fa-certificate fa-4x text-primary mb-4"></i>
                                <h5 className="mb-3">Years Experience</h5>
                                <h1 className="display-5 mb-0" data-toggle="counter-up">
                                    <CountUp start={0} end={3455} duration={2} separator="," />
                                </h1>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="fact-item bg-light rounded text-center h-100 p-5">
                                <i className="fa fa-users-cog fa-4x text-primary mb-4"></i>
                                <h5 className="mb-3">Regions</h5>
                                <h1 className="display-5 mb-0" data-toggle="counter-up">
                                    <CountUp start={0} end={6234} duration={2} separator="," />
                                </h1>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="fact-item bg-light rounded text-center h-100 p-5">
                                <i className="fa fa-globe fa-4x text-primary mb-4"></i>
                                <h5 className="mb-3">Countries</h5>
                                <h1 className="display-5 mb-0" data-toggle="counter-up">
                                    <CountUp start={0} end={2234} duration={2} separator="," />
                                </h1>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="fact-item bg-light rounded text-center h-100 p-5">
                                <i className="fa fa-check fa-4x text-primary mb-4"></i>
                                <h5 className="mb-3">Projects Done</h5>
                                <h1 className="display-5 mb-0" data-toggle="counter-up">
                                    <CountUp start={0} end={1234} duration={2} separator="," />
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </Element>
            {/* Facts End */}

            {/* About Start */}
            <div className="container-xxl py-5">
                <div className="containers">
                    <div className="row">
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
                            <img
                                src={logo}
                                alt="About Us"
                                className="img-fluid rounded"
                            />
                        </div>
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.1s">
                            <h2 className="mb-4">About Us</h2>
                            <p>
                                The United Nations, referred to informally as the UN, is an intergovernmental organization whose stated purposes are to maintain international peace and security, develop friendly relations among nations, achieve international cooperation, and serve as a centre for harmonizing the actions of nations.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada, urna vel bibendum ultricies, purus odio convallis odio, a consectetur ipsum elit at massa. Nullam gravida, nisi a elementum accumsan, quam velit sollicitudin metus, eu eleifend velit libero in dolor.
                            </p>
                            <button className="btn btn-primary">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* About End */}
            <Footer />
        </>
    );
};

export default Home;
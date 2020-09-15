import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Subscribe from '../components/Subscribe';
import Header from '../components/Header';

import beachtwo from '../assets/images/beachtwo.jpg';
import arrow from '../assets/images/arrow.png';
import cleaning from '../assets/images/cleaning.jpg';
import stuff from '../assets/images/stuff.jpg';

const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-uppercase">{config.heading}</h1>
          <h2 className="text-white-50 mx-auto mt-2 mb-5">
            {config.subHeading}
          </h2>
          <Scroll type="id" element="about">
            <a href="#about">
              <img src={arrow} className="img-fluid" alt="" />
            </a>
          </Scroll>
        </div>
      </div>
    </header>

    <section id="about" className="about-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-white mb-4">
              OUR MISSION - WHY WE DO WHAT WE DO:
            </h2>
            <h3 className="text-white-50">
              At Sustainable Cleaning, fashion and sustainability go hand in
              hand. We make it our mission to offer luxury retail boutiques a
              unique cleaning experience to what is currently available in the
              marketplace. With a major focus on customer service (and/or retail
              excellence) we believe in delivering exceptional results to a
              demographic that expects nothing but the best. We are truly
              committed to redesigning standards, delivering the concept of
              sustainability and premium cleaning services to the retail
              industry. Here at Sustainable Cleaning we simply want to do less
              damage to the environment. Therefore we offer quality and
              environmentally safe products that are good for you, your
              employees, your customers and our planet. We carefully select
              plant based ecological cleaners and supplies that ensure safety
              and top performance. It’s more than just swapping out cleaning
              chemicals. We strive to raise the bar
            </h3>
          </div>
        </div>
        {/* <img src={car} className="img-fluid" alt="" /> */}
      </div>
    </section>

    <section id="projects" className="projects-section bg-light">
      <div className="container">
        <div className="row align-items-center no-gutters mb-4 mb-lg-5">
          <div className="col-xl-8 col-lg-7">
            <img className="img-fluid mb-3 mb-lg-0" src={stuff} alt="" />
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="featured-text text-center text-lg-left">
              <h3>OUR PROMISE</h3>
              <h3 className="text-black-50 mb-0">
                The concept of sustainability is composed of three pillars:
                people, planet, and product. Sourcing the right cleaning product
                with the right materials and standards takes a lot of
                dedication, meticulous attention to detail and research. It’s
                our promise to find industry professionals and suppliers that
                share the same values and goals as we do: respect for employees,
                limiting environmental impact, long-term vision of
                sustainability, committed to social change, ethical mindset
              </h3>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6">
            <img className="img-fluid" src={cleaning} alt="" />
          </div>
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  {/* <h2 className="text-white">WE ARE SUSTAINABLE</h2> */}
                  <h5 className="mb-0 text-white-50">
                    How your retail space looks says a lot about you. Having a
                    trusted partner to provide a full spectrum of cleaning
                    services customized to your needs allows you to focus on
                    your business, while we keep it spotlessly clean in the
                    greenest way possible
                  </h5>
                  <hr className="d-none d-lg-block mb-0 ml-0" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters">
          <div className="col-lg-6">
            <img className="img-fluid" src={beachtwo} alt="" />
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  {/* <h2 className="text-white">OUR GOAL</h2> */}
                  <h5 className="mb-0 text-white-50">
                    To implement these eco-friendly changes to your business,
                    showing your commitment to social responsibility, as well as
                    your business acumen. The transition to sustainability in
                    cleaning should make companies proud to be doing their part
                    in taking care of our environment, and with the tools
                    available today, it has never been easier. The bottom line
                    is that everyone wins: owners, employees, customers and the
                    environment. We have the experience and knowledge to help
                    your organization become an eco-friendly business.
                  </h5>
                  <hr className="d-none d-lg-block mb-0 mr-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Subscribe />

    <SocialLinks />
    <Footer />
  </Layout>
);

export default IndexPage;

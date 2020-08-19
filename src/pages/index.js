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
            <h2 className="text-white mb-4">WHO WE ARE:</h2>
            <h3 className="text-white-50">
              We specialize in luxury retail boutiques, and we pride ourselves
              on using environmentally conscious cleaning products. Our owners
              have decades of experience working in high end luxury markets, and
              understand what it takes to properly clean, service, and maintain
              luxury venues. After years of frustration with the quality of
              service provided by other companies, we decided to make a change
              for the community. Sustainable Cleaning delivers that white glove
              premium service the industry has been yearning for, while making a
              positive impact on the planet
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
              <h3>WHAT WE DO</h3>
              <h3 className="text-black-50 mb-0">
                Not all business' are created equal, so not all business should
                be serviced the same way. Through our extensive experience in
                luxury markets, we know what it takes to deliver high quality
                cleaning services and what is at risk if your boutique is not in
                pristine conditions
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
                  <h2 className="text-white">WE ARE SUSTAINABLE</h2>
                  <h5 className="mb-0 text-white-50">
                    Chemical exposure from harsh cleaning supplies will have a
                    negative impact on your team, your clients, and the
                    environment
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
                  <h2 className="text-white">OUR GOAL</h2>
                  <h4 className="mb-0 text-white-50">
                    You'll never have to worry about what kind of experience
                    someone will have in your boutique, or harsh chemicals being
                    exposed to your clients, team, products, or environment
                  </h4>
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

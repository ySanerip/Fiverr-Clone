import Slide from '../../components/sliderTop/Slide';
import SlideB from '../../components/sliderBottom/SlideB';
import React from 'react';
import Featured from '../../components/featured/Featured';
import TrustedBy from '../../components/trustedBy/TrustedBy';
import CatCard from '../../components/catCard/CatCard';
import ProjectCard from '../../components/projectCard/ProjectCard';
import { cards, projects } from '../../data';
import './Home.scss';

const Home = () => {
  return (
    <div className='home'>
      <Featured />
      <TrustedBy />
        <Slide>
          {cards.map((card) => (
            <CatCard card={card} key={card.id} />
          ))}
        </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h2>A whole world of freelance talent at your fingertips</h2>
            <div className="title">
              <img src="img/check.png" alt="" />
              The best for every budget
            </div>
            <p>Find high-quality services at every price point. No hourly rates, just project-based pricing.</p>

            <div className="title">
              <img src="img/check.png" alt="" />
              Quality work done quickly
            </div>
            <p>Find the right freelancer to begin working on your project within minutes.</p>
            <div className="title">
              <img src="img/check.png" alt="" />
              Protected payments, every time
            </div>
            <p>Always know what you'll pay upfront. Your payment isn't released until you approve the work.</p>
            <div className="title">
              <img src="img/check.png" alt="" />
              24/7 support
            </div>
            <p>Questions? Our round-the-clock support team is available to help anytime, anywhere.</p>
          </div>
          <div className="item">
            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_700,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png" alt="" />
          </div>
        </div>
      </div>

      <br />

      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>
              fiverr <i>business</i>
            </h1>
            <h1>
              A business solution designed for <i>teams</i>
            </h1>
            <p>
              Upgrade to a curated experience packed with tools and benefits,
              dedicated to businesses
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Connect to freelancers with proven business experience
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Get matched with the perfect talent by a customer success manager
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Manage teamwork and boost productivity with one powerful workspace
            </div>
            <button>Explore Fiverr Business</button>
          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
              alt=""
            />
          </div>
        </div>
      </div>  
        <SlideB>
          {projects.map((card) => (
            <ProjectCard card={card} key={card.id} />
          ))}
        </SlideB>
    

    </div>
  )
}

export default Home
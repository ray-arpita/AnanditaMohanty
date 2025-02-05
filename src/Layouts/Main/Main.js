import React, { useState } from "react";
import HeroBanner from "../../Assets/hero-banner.png";
import Amazon from "../../Assets/logo/amazon.png";
import Dribbble from "../../Assets/logo/dribbble.png";
import Hubspot from "../../Assets/logo/hubspot.png";
import Netflix from "../../Assets/logo/netflix.png";
import Notion from "../../Assets/logo/notion.png";
import Zoom from "../../Assets/logo/zoom.png";
import Card from "../../Components/Card/card";
import SEO from "../../Assets/services/seo.png";
import PPCA from "../../Assets/services/ppca.png";
import SMM from "../../Assets/services/smm.png";
import EM from "../../Assets/services/em.png";
import CC from "../../Assets/services/cc.png";
import AT from "../../Assets/services/at.png";
import CtaImage from "../../Assets/cta-img.png";
import John from '../../Assets/Team/john.png';
import Jane from '../../Assets/Team/jane.png';
import Emily from '../../Assets/Team/emily.png';
import Brian from '../../Assets/Team/brian.png';
import Sarah from '../../Assets/Team/sarah.png';
import Michael from '../../Assets/Team/michael.png';
import FormImage from '../../Assets/form-img.png';
import { Auth } from "../../Components/Auth/auth";

const Main = () => {
  const [active, setActive] = useState(null);
  const handleToggle = (i) => {
    setActive(active === i ? null : i);
  };
  const LogoList = [Amazon, Dribbble, Hubspot, Netflix, Notion, Zoom];
  const Services = [
    {
      title: "Search engine optimization",
      path: "/",
      image: SEO,
    },
    {
      title: "Pay-per-click advertising",
      path: "/",
      image: PPCA,
    },
    {
      title: "Social Media Marketing",
      path: "/",
      image: SMM,
    },
    {
      title: "Email Marketing",
      path: "/",
      image: EM,
    },
    {
      title: "Content Creation",
      path: "/",
      image: CC,
    },
    {
      title: "Analytics and Tracking",
      path: "/",
      image: AT,
    },
  ];
  const Team = [
    {
      name : "John Smith",
      designation : "CEO and Founder", 
      image : John,
      description : '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy'
    },
    {
      name : "Jane Doe",
      designation : "CEO and Founder", 
      image : Jane,
      description : '7+ years of experience in project management and team leadership. Strong organizational and communication skills'
    },
    {
      name : "Michael Brown",
      designation : "CEO and Founder", 
      image : Michael,
      description : '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization'
    },
    {
      name : "Emily Johnson",
      designation : "CEO and Founder", 
      image : Emily,
      description : '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis'
    },
    {
      name : "Brian Williams",
      designation : "CEO and Founder", 
      image : Brian,
      description : '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement'
    },
    {
      name : "Sarah Kim",
      designation : "CEO and Founder", 
      image : Sarah,
      description : '2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries'
    },
  ]
  const Accordion = [
    {
      title: "Consultation",
      content:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      title: "Research and Strategy Development",
      content:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      title: "Implementation",
      content:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      title: "Monitoring and Optimization",
      content:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      title: "Reporting and Communication",
      content:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      title: "Continual Improvement",
      content:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
  ];
  return (
    <div style={{ minHeight: "70vh" }}>
      {/* _________________Hero section_________________________________ */}
      <section className="hero-banner">
        <div className="content">
          <h1>Navigating the digital landscape for success</h1>
          <p>
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <button>Book a consultation</button>
        </div>
        <div className="hero-img">
          <img src={HeroBanner} />
        </div>
      </section>
      {/* _________________Hero section_________________________________ */}
      {/* _________________Logo List_________________________________ */}
      <section className="logo-list">
        {LogoList.map((logo) => {
          return (
            <>
              <img src={logo} />
            </>
          );
        })}
      </section>
      {/* _________________Logo List_________________________________ */}
      {/* _________________Services_________________________________ */}
      <section className="service-list">
        <div className="top-content">
          <h2>Services</h2>
          <p>
            At our digital marketing agency, we offer a range of services to
            help businesses grow and succeed online. These services include:
          </p>
        </div>
        <div className="services">
          {Services.map((service) => {
            return (
              <Card
                title={service?.title}
                image={service?.image}
                path={service?.path}
              />
            );
          })}
        </div>
      </section>

      {/* _________________Services_________________________________ */}
      {/* ___________________CTA________________________________ */}
      <section className="cta">
        <div className="content">
          <h3>Let’s make things happen</h3>
          <p>
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <button>Get your free proposal</button>
        </div>
        <div className="image">
          <img src={CtaImage} />
        </div>
      </section>
      {/* _________________CTA_________________________________ */}
      {/* _________________Case Studies_________________________________ */}
      <section className="case-studies">
        <div className="top-content">
          <h2>Case Studies</h2>
          <p>
            Explore Real-Life Examples of Our Proven Digital Marketing Success
            through Our Case Studies
          </p>
        </div>
        <div className="list-wrp">
          <ul>
            <li>
              <p>
                For a local restaurant, we implemented a targeted PPC campaign
                that resulted in a 50% increase in website traffic and a 25%
                increase in sales.
              </p>
              <a href="/">Learn more</a>
            </li>
            <li>
              <p>
                For a B2B software company, we developed an SEO strategy that
                resulted in a first page ranking for key keywords and a 200%
                increase in organic traffic.
              </p>
              <a href="/">Learn more</a>
            </li>
            <li>
              <p>
                For a national retail chain, we created a social media marketing
                campaign that increased followers by 25% and generated a 20%
                increase in online sales.
              </p>
              <a href="/">Learn more</a>
            </li>
          </ul>
        </div>
      </section>
      {/* _________________Case Studies_________________________________ */}
      {/* _________________Working Process_________________________________ */}
      <section className="working-process">
        <div className="top-content">
          <h2>Our Working Process </h2>
          <p>Step-by-Step Guide to Achieving Your Business Goals</p>
        </div>
        <div className="accordion-wrp">
          {Accordion.map((item, i) => {
            return (
              <div
                className={`accordion ${active === i ? "active" : ""}`}
                key={i}
                onClick={() => handleToggle(i)}
              >
                <div className="title">
                  <h2>{i + 1}</h2>
                  <h3>{item?.title}</h3>
                </div>
                {active === i && (
                  <div className="content">
                    <p>{item.content}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
      {/* _________________Working Process_________________________________ */}
      {/* _________________Team List_________________________________ */}
      <section className="team-list">
        <div className="top-content">
          <h2>Team</h2>
          <p>
            Meet the skilled and experienced team behind our successful digital
            marketing strategies
          </p>
        </div>
        <div className="team-list-wrp">
         {
          Team.map((item)=> {
            return (
              <div className="card">
              <div className="detail">
                <img src={item.image} />
                <div className="detail-item">
                <h4>{item.name}</h4>
                <h6>{item.designation}</h6>
                </div>
              </div>
              <p className="description">
                {item.description}
              </p>
              </div>
            )
          })
         }
        </div>
      </section>
      {/* _________________Team List_________________________________ */}
       {/* _________________Contact Us_________________________________ */}
       <section className="contact-us">
       <div className="top-content">
          <h2>Contact Us</h2>
          <p>
          Connect with Us: Let's Discuss Your Digital Marketing Needs
          </p>
        </div>
        <Auth/>
       </section>
        {/* _________________Contact Us_________________________________ */}
    </div>
  );
};

export default Main;

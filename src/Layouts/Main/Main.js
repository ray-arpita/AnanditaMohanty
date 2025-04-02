import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image1 from '../../Assets/Images/img1.jpg';
import Image2 from '../../Assets/Images/img2.jpeg';
import Image3 from '../../Assets/Images/img3.jpg';
import Image4 from '../../Assets/Images/img4.jpeg';
import Image5 from '../../Assets/Images/img5.jpg';
import About from '../../Assets/logo/about.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 

const Main = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out',
    });
  }, []);


  const Images = [
    Image1,
    Image2,
    Image1,
    Image2,
    Image1,
    Image2,
    Image1,
    Image2,
    Image1,
  ];

  const gallery = [
    {
      title : "Live Painting",
      image : Image1,
      description : "I do live sketches, portraits, watercolor paintings, digital art, and more!",
    },
    {
      title : "Live Painting",
      image : Image1,
      description : "I do live sketches, portraits, watercolor paintings, digital art, and more!",
    },
    {
      title : "Live Painting",
      image : Image1,
      description : "I do live sketches, portraits, watercolor paintings, digital art, and more!",
    },
    {
      title : "Live Painting",
      image : Image1,
      description : "I do live sketches, portraits, watercolor paintings, digital art, and more!",
    }
  ]
  
  const settings = {
    infinite: true,
    slidesToShow: 5, 
    slidesToScroll: 1, 
    autoplay: true,
    autoplaySpeed: 1000, 
    arrows: false, 
    dots: true, 
    centerMode: true, 
    centerPadding: '0', 
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div>
      {/* _________________Hero section_________________________________ */}
      <section className="hero-banner">
        <div className="content">
          <h1 data-aos="zoom-in">
            From Imagination
            <br /> to <span>Canvas</span>
          </h1>
          <p data-aos="zoom-in">
            Hi! I am Anandita Mohanty, an artist.
            <br /> I do live sketches, portraits, watercolor paintings, digital art, and more!
          </p>
          <button className="btn-primary">
          <a target='_blank' href="https://www.instagram.com/_anandita.mohanty_/?igsh=OWl6ZHA2aGJlbzM4#">
            EXPLORE MORE
          </a>
            </button>
        </div>
      </section>
      {/* _________________Hero section_________________________________ */}

      {/* _________________________________________ Image Slider ______________________________ */}
      <section className="img-slider">
        <Slider {...settings}>
          {Images.map((img, index) => (
            <div key={index}>
              <img src={img} alt={`slide-${index}`} />
            </div>
          ))}
        </Slider>
      </section>
       {/* _________________________________________ Image Slider ______________________________ */}
        {/* ___________________________________About ______________________________ */}
        <section className="about" id="about">
        <div className="content">
          <h1 data-aos="zoom-in">
           About <span>Me</span>
          </h1>
          <div className='image-container'>
          <img data-aos="zoom-out-up" src={About}  />
          </div>
          <p data-aos="zoom-in">
          <span>Art</span> has always been my heartbeat, the driving force behind everything I do. My creative journey began from a young age, and it has blossomed into a deep passion for capturing the beauty of life through various forms of art. Growing up in a city rich with culture and history, I’ve always been surrounded by inspiration. It’s not just about creating; it’s about expressing what I feel, what I see, and what I believe through every piece I craft.<br/><br/>

I study at <span>BK Art College in Bhubaneswar.</span> but my true education comes from within—the desire to learn, to grow, and to pour my heart into my art. In the quiet moments of sketching or painting, I find my connection to the world around me. My work is rooted in the culture I was raised in, a culture that speaks through stories, traditions, and emotions, and it’s this cultural influence that infuses every brushstroke and detail.<br/><br/>

Beyond the traditional art forms I’ve learned, my journey has led me to discover the beauty in other artistic expressions. Capturing live moments has become one of my greatest joys—there is something magical about freezing a fleeting emotion, a spontaneous laugh, or a meaningful glance in time. Photography allows me to share these emotions with the world, each image telling its own story.<br/><br/>

Portraits, too, have become a passion of mine. <span>Drawing or painting a portrait</span> is more than just replicating a face; it’s about capturing a person’s essence, their spirit, and the stories they carry within them. Every portrait I create holds a piece of the person, a glimpse into their world, and I strive to bring that out with every stroke of the pencil or brush.<br/><br/>

Art is a constant exploration, a journey without end. It’s not just about creating something beautiful; it’s about connecting with others, evoking emotions, and sharing stories that are often unsaid. I pour my soul into every piece I create, and through my art, I hope to share a part of who I am and how I see the world.

Thank you for being part of this creative journey with me. I hope my art brings you as much joy, inspiration, and reflection as it brings me.<br/>
          </p>
        </div>
      </section>
      {/* ____________________________ Gallery __________________ */}
      <section className="gallery" id="gallery">
  <div className="content">
    <h1 data-aos="zoom-in">
      My Art <span>Gallery</span>
    </h1>
    <div className="gallery-items">
      {gallery.map((item, index) => (
        <div 
        className={`gallery-item ${index % 2 === 0 ? 'even' : 'odd'}`} 
        key={index} data-aos="fade-up">
          <div className="image-container">
            <img src={item.image}  />
          </div>
          <div className="bg">
          <div className="text-container">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
{/* ____________________________Contact __________________ */}
<section className="contact" id='contact-me'>
        <div className="content">
          <h1 data-aos="zoom-in">
           <span> Get In Touch</span>
          </h1>
          <p data-aos="zoom-in">
          Whether you're looking for a personalized portrait, a stunning painting, or a one-of-a-kind custom piece, I'm here to create art that speaks to you. Reach out today to discuss your ideas and bring your artistic vision to life!
          </p>
          <button className="btn-primary">
           <a target='_blank' href="https://www.instagram.com/_anandita.mohanty_/?igsh=OWl6ZHA2aGJlbzM4#">
            CONTACT
            </a>
            </button>
        </div>
      </section>

    </div>
  );
};

export default Main;

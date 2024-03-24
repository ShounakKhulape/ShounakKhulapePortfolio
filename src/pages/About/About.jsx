/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from "react"
import Testimonial from "./Testimonial";
import Service from "./Service";

const servicesData = [
  {
    icon: "/images/icon-design.svg",
    title: "L1L2 Support Engineer",
    description: "Maintains and administers break/fix, configuration issues, troubleshooting, software installation."
  },
  {
    icon: "/images/icon-dev.svg",
    title: "Oracle Utilities Application Support Engineer",
    description: "Perform prototyping applications, debug, test, perform customer installations, and work with customer service teams."
  },
  {
    icon: "/images/icon-app.svg",
    title: "Oracle Fusion Application Administrator",
    description: "Installation and Configuration: Installing and configuring Oracle Fusion Applications and its associated components."
  },
  {
    icon: "/images/icon-photo.svg",
    title: "System Administartion",
    description: "Support, troubleshoot, and maintain computer servers and networks."
  }
];


const About = () => {
  const [testimonials , setTestimonials ] = useState([]);
  useEffect(()=> {
    fetch('testimonials.json').then(res => res.json()).then(data => {
      console.log(data)
      setTestimonials(data)
    });
  }, [])
  return (
    <article className="about  active" data-page="about">

    <header>
      <h2 className="h2 article-title">About me</h2>
    </header>

    <section className="about-text">
      <p>
      Hi there!👋 I'm Shounak Khulape, a System engineer from India. where my role brings around 3+ years of diversified experience in the IT industry, who loves to build project and share valuable tips for new technical engineer. Passionate about DevOps, Servers, Technical writing and if you need help or want to collaborate, I'm here! Let's connect! 😊
      </p>
      <p>✔️ Install and configure software, hardware and networks</p>
      <p>✔️ Ensure security and efficiency of IT infrastructure</p>
      <p>✔️ Monitor system performance and troubleshoot issues </p>
      <a href="/images/Shounak Resume V1.pdf" download target="_blank" class="button button1">Download CV</a>
    </section>

    <section className="service">

      <h3 className="h3 service-title">My Work</h3>

      <ul className="service-list">

      {servicesData.map((service, index) => (
            <Service
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}

      </ul>

    </section>


    {/* <!--
      - testimonials
    --> */}

    <section className="testimonials">

      <h3 className="h3 testimonials-title">Testimonials</h3>

      <ul className="testimonials-list has-scrollbar">

      {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              avatar={testimonial.avatar}
              testimonial={testimonial.testimonial}
            />
          ))}

      </ul>

    </section>


    {/* <!--
      - clients
    --> */}

    <section className="clients">

      <h3 className="h3 clients-title">Clients</h3>

      <ul className="clients-list has-scrollbar">

        <li className="clients-item">
          <a href="#">
            <img src="images/logo-1-color.png" alt="client logo"/>
          </a>
        </li>

      </ul>

    </section>

  </article>
  )
}

export default About
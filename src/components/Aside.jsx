import { GiCalendar, GiClawSlashes, GiMailbox, GiMayanPyramid, GiPhone } from "react-icons/gi";
import { FaLinkedin, FaGithub  } from "react-icons/fa";
import { SlBadge } from "react-icons/sl";
import { FaXTwitter, FaHashnode  } from "react-icons/fa6";

const Aside = () => {
  return (
    <aside className="sidebar">
        <div className="sidebar-info">
          <figure className="avatar-box">
            <img
              src={"/images/shounak.png"}
              alt="Shounak Khulape"
              width="80"
            />
          </figure>

          <div className="info-content">
            <h1 className="name" title="Shounak Khulape">
              Shounak Khulape
            </h1>

            <p className="title">System Engineer</p>
            
          </div>

          <button className="info_more-btn" data-sidebar-btn>
            <span>Show Contacts</span>

            <GiClawSlashes />
          </button>
        </div>

        <div className="sidebar-info_more">
          <div className="separator"></div>

          <ul className="contacts-list">
            <li className="contact-item">
              <div className="icon-box">
                <GiMailbox/>
                
              </div>

              <div className="contact-info">
                <p className="contact-title">Email</p>

                <a href="mailto:shounakkhuape1998@gmail.com" className="contact-link">
                  shounakkhuape1998@gmail.com
                </a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <GiPhone/>
              </div>

              <div className="contact-info">
                <p className="contact-title">Phone</p>

                <a href="tel:+91 9284095830" className="contact-link">
                  +91 9284095830
                </a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <GiCalendar/>
               
              </div>

              <div className="contact-info">
                <p className="contact-title">Birthday</p>

                <time dateTime="1998-03-28">March 28, 1998</time>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <GiMayanPyramid/>
                <ion-icon name="location-outline"></ion-icon>
              </div>

              <div className="contact-info">
                <p className="contact-title">Location</p>

                <address>Nasik, Maharashtra, India</address>
              </div>
            </li>
            <li className="contact-item">
              <div className="icon-box">
              <FaXTwitter />
                
              </div>

              <div className="contact-info">
                <p className="contact-title">Twitter</p>

                <a href="https://twitter.com/shounak_khulape" className="contact-link" target="_blank">
                  @shounak_khulape
                </a>
              </div>
            </li>
            <li className="contact-item">
              <div className="icon-box">
              <FaLinkedin />
                
              </div>

              <div className="contact-info">
                <p className="contact-title">LinkedIn</p>

                <a href="https://www.linkedin.com/in/shounak-khulape-94143a15a/" className="contact-link" target="_blank">
                  @shounak-khulape
                </a>
              </div>
            </li>
            <li className="contact-item">
              <div className="icon-box">
              <FaGithub />
                
              </div>

              <div className="contact-info">
                <p className="contact-title">Github</p>

                <a href="https://github.com/Shounak-1998" className="contact-link" target="_blank">
                  @Shounak-1998
                </a>
              </div>
            </li>
            <li className="contact-item">
              <div className="icon-box">
              <SlBadge />
                
              </div>

              <div className="contact-info">
                <p className="contact-title">Badge</p>

                <a href="https://www.credly.com/users/shounak-khulape/badges" className="contact-link" target="_blank">
                  @shounak-khulape
                </a>
              </div>
            </li>
            <li className="contact-item">
              <div className="icon-box">
              <FaHashnode />
                
              </div>

              <div className="contact-info">
                <p className="contact-title">Hashnode</p>

                <a href="https://hashnode.com/@Shounak-1998" className="contact-link" target="_blank">
                  @Shounak-1998
                </a>
              </div>
            </li>
          </ul>

          <div className="separator"></div>

          <ul className="social-list">
            <li className="social-item">
              <a href="#" className="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>

            <li className="social-item">
              <a href="#" className="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>

            <li className="social-item">
              <a href="#" className="social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>
          </ul>
        </div>
      </aside>
  )
}

export default Aside
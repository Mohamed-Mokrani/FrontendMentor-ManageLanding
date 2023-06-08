import React, { useState } from "react";
import logo from "./images/logo.svg";
import close from "./images/icon-close.svg";
import hamburger from "./images/icon-hamburger.svg";
import tablet from "./images/bg-tablet-pattern.svg";
import illustration from "./images/illustration-intro.svg";
import ali from "./images/avatar-ali.png";
import anisha from "./images/avatar-anisha.png";
import richard from "./images/avatar-richard.png";
import shanai from "./images/avatar-shanai.png";
const Landing = () => {
  const [openNav, setopenNav] = useState(false);
  const [slides, setslides] = useState(0);
  return (
    <div className="landing">
      
      {/* **********************************-NavBar-******************************************************* */}
      <nav>
        <img src={logo} alt="logo" id="" />
        <div className="nav_list">
          <ul>
            <li>Pricing</li>
            <li>Product</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Community</li>
          </ul>
        </div>
        {openNav ? (
          <img
            src={close}
            className="open_close"
            onClick={() => (
              setopenNav(false),
              document
                .getElementsByClassName("nav_list")[0]
                .classList.remove("nav_open")
            )}
            alt="close"
          />
        ) : (
          <img
            src={hamburger}
            className="open_close"
            onClick={() => (
              setopenNav(true),
              document
                .getElementsByClassName("nav_list")[0]
                .classList.add("nav_open")
            )}
            alt="hamburger"
          />
        )}
        <button className="started_butt">Get Started</button>
      </nav>

      {/* **********************************-End NavBar-******************************************************* */}

      {/* **********************************-Section1-******************************************************* */}
      <section className="section1">
        <img src={illustration} alt="" id="illustration" />
        <div>
          <h1>Bring everyone together to build better products.</h1>
          <p>
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <button className="started_butt">Get Started</button>
        </div>
      </section>

      {/* **********************************-End Section1-******************************************************* */}

      {/* **********************************-Section2-******************************************************* */}

      <section className="section2">
        <div className="why_manage">
          <h1>What's different about Manage?</h1>
          <p>
            Manage provides all the functionality your team needs, without
            complexity. Our software is tailor*made for modern digital product
            teams.
          </p>
        </div>
        <div className="services">
          <div className="service">
            <span className="nums nums_deskp">01</span>
            <div>
              <h4>
                <span className="nums nums_mobile">01</span>Track company-wide
                progress
              </h4>
              <p>
                See how your day-to-day tasks fit into the wider vision. Go from
                tracking progress at the milestone level all the way done to the
                samllest of details. Never lose sight of the bigger picture
                again.
              </p>
            </div>
          </div>
          <div className="service">
            <span className="nums nums_deskp">02</span>
            <div>
              <h4>
                <span className="nums nums_mobile">02</span>Advanced built-in
                reports
              </h4>
              <p>
                Set internal delivery estimates and track progress toward
                company goals. Our customisable dashboard helps you build out
                the reports you need to keep key stakeholders informed.
              </p>
            </div>
          </div>
          <div className="service">
            <span className="nums nums_deskp">03</span>
            <div>
              <h4>
                <span className="nums nums_mobile">03</span>Everything you need
                in one place
              </h4>
              <p>
                Stop jumping from one service to another to communicate, store
                files, track tasks and share documents. Manage offers an
                all-in-one team productivity solution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* **********************************-End Section2-******************************************************* */}

      {/* **********************************-Section3-******************************************************* */}
      <section className="section3">
        <h1>What they've said</h1>
        <div className="persons">
          {slides === 0 ? (
            <div className="person">
              <img src={ali} alt="" />
              <h4>Ali Bravo</h4>
              <p>
                "We have been able to cancel so many subscriptions since Manage.
                There is no more cross-channel confusion and everyone is much
                more focused. "
              </p>
            </div>
          ) : slides === 1 ? (
            <div className="person">
              <img src={richard} alt="" />
              <h4>Richard Watts</h4>
              <p>
                "Manage allows us to provide structure and process. It keeps us
                organized and focused. I can't stop recommending them to
                everyone i talk to!"
              </p>
            </div>
          ) : slides === 2 ? (
            <div className="person">
              <img src={anisha} alt="" />
              <h4>Anisha Li</h4>
              <p>
                "Manage has supercharged our team's workflow: The ability to
                maintain visibility on larger milestones at all times keeps
                everyone motivated."
              </p>
            </div>
          ) : (
            <div className="person">
              <img src={shanai} alt="" />
              <h4>Shanai Gough</h4>
              <p>
                "Their software allows us to track, manage and collaborate on
                our projects from anywhere. It keeps the whole team in sync
                without being intrusive."
              </p>
            </div>
          )}
        </div>
        <ul>
          <li>
            <input
              type="radio"
              name="radio"
              id=""
              defaultChecked
              onClick={() => setslides(0)}
            />
          </li>
          <li>
            <input
              type="radio"
              name="radio"
              id=""
              onClick={() => setslides(1)}
            />
          </li>
          <li>
            <input
              type="radio"
              name="radio"
              id=""
              onClick={() => setslides(2)}
            />
          </li>
          <li>
            <input
              type="radio"
              name="radio"
              id=""
              onClick={() => setslides(3)}
            />
          </li>
        </ul>
        <div className="persons_desktp">
          <div className="person">
            <img src={anisha} alt="" />
            <h4>Anisha Li</h4>
            <p>
              "Manage has supercharged our team's workflow: The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated."
            </p>
          </div>
          <div className="person">
            <img src={ali} alt="" />
            <h4>Ali Bravo</h4>
            <p>
              "We have been able to cancel so many subscriptions since Manage.
              There is no more cross-channel confusion and everyone is much more
              focused. "
            </p>
          </div>
          <div className="person">
            <img src={richard} alt="" />
            <h4>Richard Watts</h4>
            <p>
              "Manage allows us to provide structure and process. It keeps us
              organized and focused. I can't stop recommending them to everyone
              i talk to!"
            </p>
          </div>
        </div>
        <button className="started_butt">Get Started</button>
      </section>
      {/* **********************************-End Section 3-******************************************************* */}

      {/* **********************************-Add-******************************************************* */}
      <div className="add">
        <h1>Simplify how your team works today</h1>
        <button className="started_butt">Get Started</button>
      </div>
      {/* **********************************-End Add-******************************************************* */}

      {/* **********************************-Footer-******************************************************* */}
      <footer>
        <div className="left_footer">
          <h5 className="copyright_mobile">
            Copyright 2020. All Rights Reserved
          </h5>
          <div className="social">
            <img src={logo} alt="logo" />
            <ol>
              <li>
                <i className="fa-brands fa-square-facebook"></i>
              </li>
              <li>
                <i className="fa-brands fa-youtube"></i>
              </li>
              <li>
                <i class="fa-brands fa-twitter"></i>
              </li>
              <li>
                <i className="fa-brands fa-pinterest"></i>
              </li>
              <li>
                <i className="fa-brands fa-instagram"></i>
              </li>
            </ol>
          </div>
          <div className="footer_lists">
            <ul>
              <li>Home</li>
              <li>Pricing</li>
              <li>Products</li>
              <li>About Us</li>
            </ul>
            <ul>
              <li>Careers</li>
              <li>Community</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
        <div className="right_footer">
          <div className="formu">
            <input
              type="text"
              name=""
              id=""
              placeholder="Updates in your inbox..."
            />
            <button className="started_butt">Go</button>
          </div>
          <h5 className="copyright_deskp">
            Copyright 2020. All Rights Reserved
          </h5>
        </div>
      </footer>
      {/* **********************************-End Footer-******************************************************* */}
    </div>
  );
};

export default Landing;

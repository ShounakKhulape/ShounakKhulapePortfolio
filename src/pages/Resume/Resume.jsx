import React from 'react';
import { FaBookReader, FaRegBookmark, FaProjectDiagram } from "react-icons/fa";
import { FaAward } from "react-icons/fa6";
import { HiAcademicCap } from "react-icons/hi";
import TimelineItem from './TimelineItem';
import SkillItem from './SkillItem';

const Resume = () => {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Savitribai Phule Pune University (SPPU)"
            date="2016 — 2020"
            description="Bachelor of Engineering in Electronic and Telecommunication, Pune | CGPA: 7.64."
          />
          <TimelineItem
            title="Higher Secondary Certificate (HSC)"
            date="2014 — 2016"
            description="N.S.Chandak College, Nashik | Percentage: 69.38%."
          />
          <TimelineItem
            title="Secondary School Certificate (SSC)"
            date="2013 — 2014"
            description="K N Kela High School, Nashik |  Percentage: 85%."
          />
        </ol>
      </div>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <HiAcademicCap />
          </div>
          <h3 className="h3">Internship</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Engineering Intern Student"
            date="2018 - 2019"
            description="Theta Measurement & Control Solutions, Pune. | Relevant coursework: LabVIEW Software, Documentation."
          />
          <TimelineItem
            title="Student Intern"
            date="2017 — 2018"
            description="Acronsys, Pune | Relevant coursework: Mini Projects IOT."
          />
          <TimelineItem
            title="Trainee"
            date="2014 — 2016"
            description="Matade Techno, Nashik | Relevant coursework: Trainee of Basic Electronics, PCB Designing."
          />
        </ol>
      </div>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
          <FaProjectDiagram />
          </div>
          <h3 className="h3">Academics Projects</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Water waste Management prototype on taps"
            date="2019 - 2020"
            description="Tap controlling prototye is design to avoid wastage of water | Associated with Vishwakarma Institute of Information Technology."
          />
          <TimelineItem
            title="Phase angle control of SCR using microcontroller"
            date="2018 — 2019"
            description="Angle of SCR is controlled with the microcontroller with input controlling zero crossing detector | Associated with Vishwakarma Institute of Information Technology."
          />
          <TimelineItem
            title="Wireless communication of sound through lazer diode"
            date="2013 — 2014"
            description="Prototype was designed with communication distance of 15cm of sound travel through lazer diode | Associated with Matade Techno"
          />
        </ol>
      </div>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
          <FaAward />
          </div>
          <h3 className="h3">Honors & Awards</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Service and Commitment Award"
            date="2021 - 2024"
            description="At completing 3 years of dedicated service | Issued by Tata Consultancy Services."
          />
          <TimelineItem
            title="Star of the Month Award"
            date="2022"
            description="Shounak are an inspiring role model to your colleagues | Issued by Tata Consultancy Services."
          />
          <TimelineItem
            title="Certificate of Achievement"
            date="2022"
            description="Shounak in appreciation of your contribution to Nationalgrid UK | Issued by Tata Consultancy Services."
          />
          <TimelineItem
            title="Best Team Award"
            date="2021 — 2022"
            description="Shounak are an inspiring role model to your colleagues | Issued by Tata Consultancy Services."
          />
          <TimelineItem
            title="An International Chemistry Quiz"
            date="2015"
            description="A quiz competition was held by ANCQ on chemistry | Issued by ANCQ Nashik."
          />
          <TimelineItem
            title="Best performance in academic"
            date="2013 — 2014"
            description="At completing secondary certification | Issued by Nayak's Tutorial Nashik."
          />   
        </ol>
      </div>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaRegBookmark />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="System Engineer"
            date="2023 — Present"
            description="Responsible for installing, configuring performance tunes, managing and troubleshooting Oracle WebLogic and providing infrastructure support for Oracle utilities."
          />
          <TimelineItem
            title="Assistance System Engineer"
            date="2022 — 2023"
            description="Meet uptime and availability of the entire non production utilities suite environment including SIT, UAT, NFT and Performance by Monitoring application services and supporting infrastructure."
          />
          <TimelineItem
            title="Assistance System Engineer Trainee"
            date="2021 — 2022"
            description="Extensively worked as a L1L2 non-prod engineer to support test application environments on a daily basis."
          />
        </ol>
      </div>

      <div className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
          <SkillItem title="Linux" value={90} />
          <SkillItem title="Shell Scripting" value={50} />
          <SkillItem title="Oracle Analytics Server" value={70} />
          <SkillItem title="Oracle WebLogic" value={90} />
          <SkillItem title="Oracle Utilities" value={70} />
          <SkillItem title="Oracle Cloud Infrastructure" value={40} />
        </ul>
      </div>
    </section>
  );
};

export default Resume;

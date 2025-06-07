'use client';

import { useEffect, useState } from "react";
// import 'bootstrap/dist/js/bootstrap.bundle.min';

import {
  FaAngular, FaNodeJs, FaReact, FaGithub, FaLinkedin, FaBootstrap, FaDownload
} from "react-icons/fa";
import {
  SiNextdotjs, SiMongodb, SiTailwindcss, SiJavascript, SiTypescript
} from "react-icons/si";
import toast from "react-hot-toast";

export default function Home() {
  const [dark, setDark] = useState(true);

useEffect(() => {
  if (typeof window !== "undefined") {
    document.body.className = dark ? "dark bg-dark text-light" : "light bg-light text-dark";

    import('bootstrap/dist/js/bootstrap.bundle.min');
  }
}, [dark]);


const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  formData.append("access_key", "2f06ff51-093e-4926-8754-e8e24638541e");

  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: json,
  });

  const result = await res.json();

  if (result.success) {
    toast.success("Message sent successfully!");
    e.target.reset();
  } else {
    toast.error("Failed to send message. Please try again.");
  }
};


  const handleDownload = () => {
    toast.success("Resume downloaded!");
  };

  const techSkills = [
    { name: "Angular", icon: <FaAngular color="#dd0031" /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Node.js", icon: <FaNodeJs color="#3c873a" /> },
    { name: "MongoDB", icon: <SiMongodb color="#4DB33D" /> },
    { name: "React", icon: <FaReact color="#61dafb" /> },
    { name: "Bootstrap", icon: <FaBootstrap color="#7952B3" /> },
    { name: "Tailwind", icon: <SiTailwindcss color="#38BDF8" /> },
    { name: "JS", icon: <SiJavascript color="#f7df1e" /> },
    { name: "TS", icon: <SiTypescript color="#3178c6" /> },
    { name: "GitHub", icon: <FaGithub /> }
  ];

  return (
    <div className="container py-5">
      {/* Toggle */}
      <div className="text-end mb-3">
        <button onClick={() => setDark(!dark)} className="btn btn-sm btn-outline-light">
          {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      {/* Header */}
      <header className="mb-4 text-center">
        <h1 className="display-5 fw-bold">Anand Prakash Chaudhary</h1>
        <p className="lead">Full Stack Developer (MEAN / Next.js)</p>
        <p>Gurugram, HR | 7081446908 | apchaudhary7081@gmail.com</p>
        <a href="https://www.linkedin.com/in/developeranand/" target="_blank" className="btn btn-primary me-2">
          <FaLinkedin className="me-1" /> LinkedIn
        </a>
        <a
  href="https://drive.google.com/uc?export=download&id=1gixUrPegSCn6dK7OrH07-iTLYrodqd9f"
  target="_blank"
  rel="noopener noreferrer"
  onClick={handleDownload}
  className="btn btn-success"
>
  <FaDownload className="me-1" /> Download Resume
</a>

      </header>

      {/* About Me */}
<section className="mb-5 card p-4">
  <h2>About Me</h2>
  <p>
    I am a <strong>Software Developer Engineer</strong> at <strong>Stuvalley Technology Private Limited</strong> in Gurugram. Previously, I interned at <strong>Zummit Infolab</strong> in Bangalore.
  </p>
  <p>
    I have two years of experience, and my skill set includes <strong>MEAN stack development</strong> (Angular, Node.js, Express, Mongoose), HTML5, CSS, SCSS/SASS, JavaScript, TypeScript, and Next.js.
    I also have experience with UI frameworks like <strong>Bootstrap</strong> and <strong>Tailwind CSS</strong>.
  </p>
  <p>
    I am proficient in <strong>Data Structures and Algorithms</strong>, <strong>Object-Oriented Programming (OOP)</strong>,
    SQL and NoSQL databases like <strong>MongoDB</strong>, and tools such as <strong>GitHub</strong>, <strong>GitLab</strong>, and <strong>Postman</strong> for API testing.
    Additionally, I have experience integrating <strong>AI into frontend projects</strong>.
  </p>
  <p>
    I have solved over <strong>300 coding problems on LeetCode</strong> and more than <strong>150 problems on GeeksforGeeks</strong>.
    I am a <strong>great team leader</strong>, a <strong>quick learner</strong>, and an <strong>effective problem solver</strong>.
  </p>
</section>


      {/* Skills */}
      <section className="mb-5">
        <h2>Tech Stack</h2>
        <div className="row">
          {techSkills.map((skill, i) => (
            <div className="col-6 col-md-3 mb-3" key={i}>
              <div className="d-flex align-items-center">
                <div className="fs-4 me-2">{skill.icon}</div>
                <span>{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Accordion for Experience, Projects, Education, Achievements */}
      <section className="mb-5">
        <h2>Profile Details</h2>
        <div className="accordion" id="accordionExample">
          {/* Experience */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#experience">
                Experience
              </button>
            </h2>
            <div id="experience" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <h5>Stuvalley Technology Pvt Ltd (June 2023 – Present)</h5>
                <ul>
                  <li>Built portals using Angular, Node.js, Next.js</li>
                  <li>Implemented JWT Auth, REST APIs</li>
                  <li>Handled full-stack secure deployments</li>
                </ul>
                <h5>Zummit Info Lab (Jan – Apr 2023)</h5>
                <ul>
                  <li>Worked on Angular apps, improved hands-on skills</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#projects">
                Projects
              </button>
            </h2>
            <div id="projects" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <div className="row">
                  {[
                    {
                      title: "Prayug.com",
                      desc: "Learning platform using Angular, Node.js, Next.js, MongoDB",
                    },
                    {
                      title: "Sudakshta.com",
                      desc: "Psychometric test portal with secure auth & AI analysis",
                    },
                    {
                      title: "Navrojan.com",
                      desc: "Job recruitment portal with user profiles and applications",
                    }
                  ].map((proj, index) => (
                    <div className="col-md-4 mb-3" key={index}>
                      <div className="card h-100">
                        <div className="card-body">
                          <h5 className="card-title">{proj.title}</h5>
                          <p className="card-text">{proj.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#education">
                Education
              </button>
            </h2>
            <div id="education" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <ul>
                  <li><strong>B.Tech in CSE</strong> - ABES Engineering College (2020–2023) – CGPA 8.2/10</li>
                  <li><strong>Diploma in CSE</strong> - Janta Polytechnic (2017–2020) – 78.4%</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#achievements">
                Achievements & Certificates
              </button>
            </h2>
            <div id="achievements" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <ul>
                  <li>Full Stack Development Certificate</li>
                  <li>Angular Developer Certificate</li>
                  <li>INFTQY Certification Exam Cleared (2023)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
    <section className="mb-5">
  <h2>Contact Me</h2>
  <form onSubmit={handleSubmit}>
    <div className="mb-3">
      <input type="text" name="name" className="form-control" placeholder="Your Name" required />
    </div>
    <div className="mb-3">
      <input type="email" name="email" className="form-control" placeholder="Your Email" required />
    </div>
    <div className="mb-3">
      <input type="tel" name="phone" className="form-control" placeholder="Phone Number" required />
    </div>
    <div className="mb-3">
      <textarea name="message" className="form-control" placeholder="Message" rows="4" required></textarea>
    </div>
    <button type="submit" className="btn btn-primary">Send Message</button>
  </form>
</section>


      {/* Footer */}
      <footer className="text-center border-top pt-4 mt-5">
        <p>apchaudhary7081@gmail.com | 7081446908</p>
        <p>© 2025 Anand Prakash Chaudhary</p>
      </footer>
    </div>
  );
}

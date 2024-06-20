import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
const iconsData = [
  {
    href: "https://github.com/your-github-username",
    icon: faGithub,
  },
  {
    href: "https://www.linkedin.com/in/your-linkedin-username",
    icon: faLinkedin,
  },
];

const Intro = () => {
  return (
    <section id="intro">
      <div className="intro__inner">
        <div className="intro__text">
          <div>
            <div className="text">
              Welcome to my <em>portfolio</em>
            </div>
            <div className="text-second">
              talent is found at the end of theeffort
            </div>
          </div>
          <div className="intro__icons">
            {iconsData.map((iconData, index) => (
              <a
                key={index}
                href={iconData.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={iconData.icon} size="2x" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;

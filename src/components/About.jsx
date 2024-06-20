import React from "react";
import image from "../assets/img/about.JPG";

const skillsData = [
  {
    name: "HTML5",
  },
  {
    name: "CSS3",
  },
  {
    name: "JavaScript",
  },
  {
    name: "React",
  },
];

const About = () => {
  return (
    <>
      <section id="about">
        <div className="about__inner">
          <div className="about__title">
            About <em>me</em>
          </div>
        </div>
        <div className="about__wrap">
          <div className="about__content">
            <p>
              나는 공간을 만드는 것을 좋아한다. 어려을 때부터 나만의 공간을
              만드는 것을 좋아했고 나만의 다락방을 좋아했다. 단 한 사람이라도
              내가 만든 공간 속에서 영감을 받거나 마음이 움직였으면 좋겠다.
              나만의 공간을 마음것 만들 수 있다는 건 코딩에 엄청난 매력인거
              같다. 그 한구석에 나만의 꿈을 설계하고, 개발을 하며 앞으로도 살고
              싶다.
            </p>
            <div className="about__skills">
              <div className="skills__title">Tech skill</div>
              {skillsData.map((skill, index) => (
                <button key={index} className="skill__button">
                  {skill.name}
                </button>
              ))}
            </div>
          </div>
          <div className="img">
            <img src={image} alt="About me" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

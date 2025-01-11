import { useContext } from "react";
import "../../css/skills/SkillWeb.css";
import imgHTML5 from "../../assets/skills/web/html.svg";
import imgCSS3 from "../../assets/skills/web/css.svg";
import imgJsECS6 from "../../assets/skills/web/js.svg";
import imgBootstrap from "../../assets/skills/web/bootstrap.svg";
import imgTailwind from "../../assets/skills/web/tailwind.svg";
import imgSASS from "../../assets/skills/web/sass.svg";
import imgFigma from "../../assets/skills/web/figma.svg";
import imgPhotoshop from "../../assets/skills/web/photoshop.svg";
import imgIlustrator from "../../assets/skills/web/ilustrator.svg";
import imgGit from "../../assets/skills/web/git.svg";
import imgGithub from "../../assets/skills/web/github.svg";
import imgWordpress from "../../assets/skills/web/wordpress.svg";
import imgShopify from "../../assets/skills/web/shopify.svg";

const skillImages = {
  HTML: imgHTML5,
  CSS: imgCSS3,
  Javascript: imgJsECS6,
  Bootstrap: imgBootstrap,
  Tailwind: imgTailwind,
  SASS: imgSASS,
  Figma: imgFigma,
  Photoshop: imgPhotoshop,
  Illustrator: imgIlustrator,
  Git: imgGit,
  Github: imgGithub,
  Wordpress: imgWordpress,
  Shopify: imgShopify,
};

import { LanguageContext } from "../../LanguageContext";

const SkillWeb = () => {
  const { language } = useContext(LanguageContext);
  const skills = language.SkillWebList.skill;
  return (
    <div className="skills">
      <figure className="skills__image__container">
        <ul className="skills__list">
          {skills.map((skill, index) => (
            <li key={index} className="skills__list__item">
              <img
                className={`skill__web__image skill__web__image--${skill.toLowerCase()}`}
                src={skillImages[skill]}
                alt={`Logo of ${skill}`}
              />
              <h3 className="skills__title">{skill}</h3>
            </li>
          ))}
        </ul>
      </figure>
    </div>
  );
};

export default SkillWeb;

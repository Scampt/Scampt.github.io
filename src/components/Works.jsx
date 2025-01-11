import { useRef, useContext } from "react";
import { motion } from "framer-motion";
import "../css/Works.css";
import overlayLutherAlien from "../assets/works/luther-alien.png";
import videoLutherAlien from "../assets/works/luther-alien.mp4";
import overlayOddoLandingPage from "../assets/works/oddo-landing-page.png";
import videoOddoLandingPage from "../assets/works/oddo-landing-page.mp4";
import overlayAHFJamaica from "../assets/works/ahf-jamaica.png";
import videoAHFJamaica from "../assets/works/ahf-jamaica.mp4";
import overlayParagonISG from "../assets/works/paragon-isg.png";
import videoParagonISG from "../assets/works/paragon-isg.mp4";
import imgLutherAlienLogo from "../assets/works/luther-alien-logo.png";
import imgArmicatLogo from "../assets/works/armicat-logo.png";
import imgLutherTFTStore from "../assets/works/luthertft-hoodie.png";
import imgTetosTruckingPrinted from "../assets/works/tetos-trucking-printing.png";
import imgTetosTruckingLogo from "../assets/works/tetos-trucking-logo.png";

import { LanguageContext } from "../LanguageContext";

const WorksImages = {
  LutherAlienOverlay: overlayLutherAlien,
  OddoLandingPageOverlay: overlayOddoLandingPage,
  AHFJamaicaOverlay: overlayAHFJamaica,
  ParagonISGOverlay: overlayParagonISG,
};

const WorksVideos = {
  LutherAlienVideo: videoLutherAlien,
  OddoLandingPageVideo: videoOddoLandingPage,
  AHFJamaicaVideo: videoAHFJamaica,
  ParagonISGVideo: videoParagonISG,
};

const Work = () => {
  const { language } = useContext(LanguageContext);
  const works = language.WorksList.works;

  const videoRefs = useRef([]);

  const handleMouseEnter = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].play();
    }
  };

  const handleMouseLeave = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].pause();
      videoRefs.current[index].currentTime = 0;
    }
  };

  return (
    <motion.section
      className="works"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h3
        className="general__title"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {language.worksTitle}
      </motion.h3>
      <motion.p
        className="works__description"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      ></motion.p>
      <motion.figure
        className="works__container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        {works.map((work, index) => (
          <motion.div
            key={index}
            className="works__web"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="works__video__container"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                className="works__video__overlay"
                src={WorksImages[work.overlay]}
                alt={`Overlay of ${work.overlay}`}
              />
              <video
                className="works-video"
                ref={(el) => (videoRefs.current[index] = el)}
                src={WorksVideos[work.video]}
                muted
                preload="none"
              ></video>
            </motion.div>
            <motion.div
              className="works__links"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
            >
              <a
                href={work.link}
                target="_blank"
                className={`works__link ${work.className}`}
              >
                {language.worksLinkWebiste}
              </a>
              <a
                href={work.linkGithub}
                target="_blank"
                className={`works__link github-code ${work.className}-link`}
              >
                {language.worksLinkGithub}
              </a>
            </motion.div>
          </motion.div>
        ))}
        <motion.figure className="works__design">
          <div className="works__design__item">
            <motion.img
              className="works__design__img luther-alien-img"
              src={imgLutherAlienLogo}
              alt="Logo of LutherAlien"
            />
            <motion.div className="works__design__text">
              {language.logoLutherAlienText}
            </motion.div>
          </div>
          <div className="works__design__item">
            <motion.img
              className="works__design__img armicat-img"
              src={imgArmicatLogo}
              alt="Logo of Armicat Company"
            />
            <motion.div className="works__design__text">
              {language.logoArmicatText}
            </motion.div>
          </div>
          <div className="works__design__item">
            <motion.img
              className="works__design__img luthertft-img"
              src={imgLutherTFTStore}
              alt="Hoodie design of LutherTFT Store"
            />
            <div className="works__design__text luthertft-text">
              {language.lutherTFTStoreText}
            </div>
          </div>
          <div className="works__design__item">
            <motion.img
              className="works__design__img tetostrucking-printed-img"
              src={imgTetosTruckingPrinted}
              alt="Tetos Trucking Printed Design"
            />
            <div className="works__design__text tetostrucking-printed-text">
              {language.TetosTruckingPrinted}
            </div>
          </div>
          <div className="works__design__item">
            <motion.img
              className="works__design__img tetostrucking-logo-img"
              src={imgTetosTruckingLogo}
              alt="Tetos Trucking Logo"
            />
            <div className="works__design__text tetostrucking-logo-text">
              {language.TetosTruckingPrinted}
            </div>
          </div>
        </motion.figure>
      </motion.figure>
    </motion.section>
  );
};

export default Work;

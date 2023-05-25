import { styles } from "../styles";
import { github, linkedin } from "../assets";
function Footer() {
  return (
    <footer
      className={`${styles.paddingX} w-full flex justify-center py-5 fixed bottom-0 z-20 bg-primary`}
    >
      <a href="https://github.com/Iouie" target="_blank" rel="noreferrer">
        <img
          src={github}
          alt="github"
          className="object-contain h-10 w-10"
        ></img>
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/stanley-louie-523136127/"
      >
        <img
          src={linkedin}
          alt="linkedin"
          className="h-10 w-10 object-contain"
        ></img>
      </a>
    </footer>
  );
}

export default Footer;

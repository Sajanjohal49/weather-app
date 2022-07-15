import { useContext } from "react";
import AppContext from "../provider/appContext";

function Footer() {
  const {
    app: { isDark },
  } = useContext(AppContext);
  const anchorStyle = {
    color: "#C6C6C6",
  };
  return (
    <>
      <footer className="footer">
        <a
          href="https://github.com/Sajanjohal49/weather-app"
          target="_blank"
          rel="noreferrer"
          style={isDark ? anchorStyle : null}
        >
          <i className="fa-brands fa-github"></i> <span>GitHub</span>
        </a>
        <a
          href="https://github.com/Sajanjohal49"
          target="_blank"
          rel="noreferrer"
          style={isDark ? anchorStyle : null}
        >
          <i className="fa-solid fa-code-fork"></i> <span>Fork</span>
        </a>
     
       
      </footer>
    </>
  );
}

export default Footer;

import React, { useContext } from "react";
import AppContext from "../provider/appContext";

function Card({ children, className }) {
  const {
    app: { isDark },
  } = useContext(AppContext);
  const card = {
    background: " linear-gradient(264deg, rgba(33,53,81,1) 0%, rgba(15,18,61,1) 100%)",
    color: "#f1b05f",
  };
 
  
  return (
    <div className={className} style={isDark ? card : null}>
      {children}
    </div>
  );
}

export default Card;

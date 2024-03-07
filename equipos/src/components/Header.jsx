import "./Header.css";
import PropTypes from "prop-types";

export const Header = ({ children, title, show }) => {
  return (
    <header className="header">
      <h3 className="title">{title || "titulo por defecto"}</h3>
      {children}

      {
        show && <p>Este texto se va a mostar solo si el prop show es true</p> 
      }
      
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

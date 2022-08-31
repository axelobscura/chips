 import React from "react";

const Footer = () => {
  var d = new Date();
  return (
    <div className="footer">
      <div className="copyright">
        <p>
          © {d.getFullYear()} Todos Los Derechos Reservados &amp; Desarrollado por Azul
        </p>
      </div>
    </div>
  );
};

export default Footer;

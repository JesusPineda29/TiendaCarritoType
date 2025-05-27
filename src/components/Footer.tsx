

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-col">
            <div className="footer-content">
              <p className="footer-title">GuitarLA</p>
              <p className="footer-dev">Desarrollado por <strong>Jesús Pineda</strong></p>

              <div className="footer-links">
                <a 
                  href="https://jesus-pineda-portafolio.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  <i className="fas fa-globe"></i>
                  <span>Sitio Web</span>
                </a>

                <a 
                  href="https://www.linkedin.com/in/jesús-pineda-630a3b300"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  <i className="fab fa-linkedin"></i>
                  <span>LinkedIn</span>
                </a>

                <a 
                  href="https://github.com/JesusPineda29"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  <i className="fab fa-github"></i>
                  <span>GitHub</span>
                </a>
              </div>

              <p className="footer-copy">
                © {new Date().getFullYear()} - Todos los derechos reservados
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

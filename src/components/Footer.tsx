import { Brand } from "./Brand";
import { site } from "#/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Brand />
            <p style={{ maxWidth: 340, marginTop: 20 }}>
              Thoughtful protection and practical financial guidance for
              individuals, families, businesses and institutions in Kenya.
            </p>
          </div>
          <div>
            <h4>Explore</h4>
            <div className="footer-links">
              <a href="#services">Services</a>
              <a href="#about">About S.K. Wairimu</a>
              <a href="#approach">Our approach</a>
              <a href="#learn">Learning</a>
              <a href="#quote">Get in touch</a>
            </div>
          </div>
          <div>
            <h4>Contact</h4>
            <div className="footer-links">
              <a href={site.phoneHref}>{site.phoneDisplay}</a>
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <span>{site.location}</span>
              <a href={site.whatsapp} target="_blank" rel="noopener">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
        <div className="copyright">
          <span>
            © {new Date().getFullYear()} S.K. Wairimu | Insurance &amp;
            Financial Solutions.
          </span>
          <span>
            Regulated insurance, brokerage and investment activities will only
            be undertaken after obtaining the applicable licences, approvals and
            insurer appointments.
          </span>
        </div>
      </div>
    </footer>
  );
}

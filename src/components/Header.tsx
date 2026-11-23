import { Brand } from "./Brand";
import { site } from "#/lib/site";

export function Header() {
  return (
    <>
      <div className="topbar">
        <div className="container">
          <span>{site.location}</span>
          <span>
            <a href={`mailto:${site.email}`}>{site.email}</a> &nbsp; · &nbsp;{" "}
            <a href={site.phoneHref}>{site.phoneDisplay}</a>
          </span>
        </div>
      </div>
      <div className="navwrap">
        <nav className="container">
          <Brand />
          <div className="navlinks">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#approach">Our approach</a>
            <a href="#learn">Learn</a>
          </div>
          <a className="btn nav-cta" href="#quote">
            Get a consultation
          </a>
        </nav>
      </div>
    </>
  );
}

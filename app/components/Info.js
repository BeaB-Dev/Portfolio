"use client";
import Link from "next/link";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname } from "next/navigation";
import { bebas_neue } from "../fonts";

export default function Info() {
  const pathname = usePathname();

  return (
    <section
      className={
        "column" +
        " " +
        [
          pathname == "/"
            ? "hero is-fullheight-with-navbar"
            : "section is-medium",
        ]
      }
      id="info"
    >
      <div
        className={
          pathname == "/" ? "hero-body has-text-centered" : "has-text-left"
        }
      >
        <div className="container">
          <p style={{ color: "#ff007f" }}>Hi there! I&#39;m</p>
          <h1 className="title">
            <p
              className={
                "has-text-white is-size-1-mobile " +
                bebas_neue.className +
                [pathname != "/" ? " is-size-1" : " bebas"]
              }
            >
              Beatrice Bonhomme.
            </p>
          </h1>

          <p className="subtitle" style={{ color: "#e6e6e6" }}>
            Programmer
          </p>
          <span className="icon is-large block">
            <Link
              className="has-text-white"
              href={"https://www.linkedin.com/in/beatrice-bonhomme/"}
              target="_blank"
              rel="noopener"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="fas fa-2x"
                id="icon"
              />
            </Link>
          </span>
          <span className="icon is-large">
            <Link
              className="has-text-white"
              href={"https://github.com/BeaB-Dev"}
              target="_blank"
              rel="noopener"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="fas fa-2x"
                id="icon"
              />
            </Link>
          </span>
          <p className="has-text-weight-light" style={{ color: "#e6e6e6" }}>
            I build programs as practical solutions to everyday tasks. Welcome to my portfolio!
          </p>
          <hr
            className={
              "is-hidden-desktop block" +
              " " +
              [pathname == "/" ? "is-hidden" : ""]
            }
            id="hr"
          ></hr>
        </div>
      </div>
    </section>
  );
}

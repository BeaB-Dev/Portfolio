import Image from "next/image";
import Tags from "./TagList";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function ProjectCard({ props }) {
  return (
    <div className="card">
      <div className="card-image">
        <Image src={props.img} alt={props.altText} priority />
      </div>
      <div className="card-content" id="cardContent">
        <div className="media">
          <div className="media-content" id="algoruntimes">
            <p className="title is-4">{props.title}</p>
            <p className="subtitle is-6 is-link">
              <span className="icon-text">
                <span className="icon">
                  <FontAwesomeIcon icon={faGithub} />
                </span>
                <span>
                  <Link href={props.repository} target="_blank" rel="noopener">
                    READ ME
                  </Link>
                </span>
              </span>
            </p>
          </div>
        </div>
        <div className="content">
          {props.description}
          <br />
          <Link
            className="is-link"
            href={"https://" + props.link}
            target="_blank"
            rel="noopener"
          >
            {props.link}
          </Link>
        </div>
        <Tags props={props.tags} />
      </div>
    </div>
  );
}

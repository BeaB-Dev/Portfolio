import { projectData } from "@/app/data";
import Link from "next/link";
import Image from "next/image";
import { bebas_neue } from "@/app/fonts";

export default function ProjectsPage() {
  const tileArray = [];

  function createTiles() {
    for (let i = 0; i < projectData.length; i++) {
      tileArray.push(
        <div className="tile is-ancestor" key={i}>
          <div className="tile is-parent">
            <div className="tile is-child">
              <Link href={"/project/" + projectData[i].id()}>
                <Image src={projectData[i].img} alt={projectData[i].altText} id={"grid-image"}/>
              </Link>
            </div>
          </div>
        </div>
      );
    }
    return tileArray;
  }


  return (
    <section className="column section is-medium is-clipped" id="projects">
      <h3
          className={
            "title is-4 is-hidden-desktop has-text-white has-text-centered has-text-weight-normal" +
            " " +
            bebas_neue.className
          }
        >
          Projects
        </h3>
      <div className="" id="container">
      <div>{createTiles()}</div>
      </div>
    </section>
  );
}

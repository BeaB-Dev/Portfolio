import { fetchProjects } from "@/app/data";
import { bebas_neue } from "@/app/fonts";
import ProjectTiles from "@/app/components/ProjectTile";

export default async function ProjectsPage() {
  const projects = await fetchProjects();

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
        <ProjectTiles props={projects} />
      </div>
    </section>
  );
}

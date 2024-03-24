import { fetchProjects } from "@/app/data";
import ProjectCard from "@/app/components/ProjectCard";
import Modal from "@/app/components/Modal";

export default async function ProjectPage({ params }) {
  const project = (await fetchProjects()).find((p) => p.id == params.id);

  return (
    <Modal>
      <ProjectCard props={project} />
    </Modal>
  );
}
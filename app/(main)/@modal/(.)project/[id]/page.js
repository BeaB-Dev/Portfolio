import { projectData } from "@/app/data";
import ProjectCard from "@/app/components/ProjectCard";
import Modal from "@/app/components/Modal";

export default function ProjectPage({ params }) {
  const project = projectData.find((p) => p.id() == params.id);
  return (
    <Modal>
      <ProjectCard props={project} />
    </Modal>
  );
}
import { sql } from "@vercel/postgres";
import algoruntimes from "../public/Algorithm Runtimes.png";
import portfolio from "../public/Portfolio.png";

export const images = [algoruntimes, portfolio];

export async function fetchProjects() {
  try {
    const projectData = (await sql`SELECT * FROM Projects`).rows.map(
      (project, index) => ({
        ...project,
        img: images[index],
        id: project.title.toLowerCase().replace(" ", "-"),
      })
    );

    return projectData;
  } catch (error) {
    console.error("Database Error: ", error);
    throw new Error("Failed to fetch project data.");
  }
}

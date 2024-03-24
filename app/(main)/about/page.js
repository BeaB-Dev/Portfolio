import Link from "next/link";
import { bebas_neue } from "../../fonts";
import { fetchProjects } from "@/app/data";

export default function About() {
  return (
    <section className="column section is-medium" id="about">
      <div className="content has-text-white">
        <h3
          className={
            "title is-4 is-hidden-desktop has-text-white has-text-centered has-text-weight-normal" +
            " " +
            bebas_neue.className
          }
        >
          About Me
        </h3>
        <p>
          After earning a bachelor&#39;s degree in Computer Science in 2021, my
          first trek into the professional technology world was as a Support
          Engineer working in the Mobile Device Management space. As I
          progressed from Intern to Tier 3, I gained perspectives on enterprise
          needs, the importance of delivering product value, and problem-solving
          within the Apple ecosystem.
        </p>
        <p>
          In my latest role, I refined my communication skills and gained
          experience with interdepartmental collaboration, working daily with
          the Customer Success teams as well as the Product and Engineering
          teams through Agile squads. I also focused on documentation, writing
          articles for and managing Support team contributions to the company
          knowledge base, both internal and public-facing.
        </p>
        <p>
          I&#39;m now pursuing my original goal of participating in the tech space
          as a Software Engineer. Leaning on past experience, my current{" "}
          <Link
            id="projectsLink"
            href={"/projects"}
            style={{ color: "#ff007f" }}
          >
            projects
          </Link>{" "}
          focus on automation and building practical solutions to situations
          I&#39;ve encountered as I work toward this goal.
        </p>
      </div>
    </section>
  );
}

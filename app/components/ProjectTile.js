import Link from "next/link";
import Image from "next/image";

export default async function ProjectTiles({ props }) {
  const tileArray = [];

  function createTiles() {
    for (let i = 0; i < props.length; i++) {
      tileArray.push(
        <div className="tile is-ancestor" key={i}>
          <div className="tile is-parent">
            <div className="tile is-child">
              <Link href={"/project/" + props[i].id}>
                <Image
                  src={props[i].img}
                  alt={props[i].altText}
                  id={"grid-image"}
                />
              </Link>
            </div>
          </div>
        </div>
      );
    }
    return tileArray;
  }

  return <div>{createTiles()}</div>;
}

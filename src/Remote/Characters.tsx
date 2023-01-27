import { useQuery } from "react-query";
import { Link } from "../components/Link";
import fetch from "./fetch";
import { People } from "./types";

export function Characters(): JSX.Element {
  const { status, data } = useQuery<{ results: People[] }>("characters", () =>
    fetch(`https://swapi.dev/api/people/`)
  );

  if (status === "loading") return <p>Loading...</p>;
  if (status === "error") return <p>Error :(</p>;

  return (
    <div>
      <h2 className='text-2xl'>Characters</h2>
      {data?.results.map((person) => {
        const personUrlParts = person.url.split("/").filter(Boolean);
        const personId = personUrlParts[personUrlParts.length - 1];
        return (
          <article key={personId} style={{ margin: "16px 0 0" }}>
            <Link to={`/remote/characters/${personId}`}>
              <h6>{person.name}</h6>
            </Link>
          </article>
        );
      })}
    </div>
  );
}


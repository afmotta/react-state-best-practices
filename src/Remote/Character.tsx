import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { Link } from "../components/Link";
import fetch from "./fetch";
import { People } from "./types";

function Film(props: { id: string }) {
  const { id } = props;
  const { data, status, error } = useQuery(`film-${id}`, () =>
    fetch(`https://swapi.dev/api/films/${id}/`)
  );

  if (status !== "success") {
    return null;
  }
  return (
    <h6 key={id}>
      {data.episode_id}. {data.title}
    </h6>
  );
}

function Homeworld(props: { id: string }) {
  const { id } = props;
  const { data, status } = useQuery(`homeworld-${id}`, () =>
    fetch(`https://swapi.dev/api/planets/${id}/`)
  );

  if (status !== "success") {
    return null;
  }

  return data.name;
}

export function Character() {
  const { id: characterId } = useParams();
  const { status, error, data } = useQuery<People>(
    `character-${characterId}`,
    () => fetch(`https://swapi.dev/api/people/${characterId}/`)
  );

  if (status === "loading") return <p>Loading...</p>;
  if (status === "error" || !data) return <p>Error :(</p>;

  const homeworldUrlParts = data.homeworld.split("/").filter(Boolean);
  const homeworldId = homeworldUrlParts[homeworldUrlParts.length - 1];

  if (status !== "success") {
    return null;
  }
  return (
    <div>
      <h2 className="text-2xl">{data.name}</h2>
      <table className='min-w-full divide-y divide-gray-300'>
        <thead className='bg-gray-50'>
          <tr>
            <th
              scope='col'
              className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6'
            >
              Feature
            </th>
            <th
              scope='col'
              className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
            >
              Value
            </th>
          </tr>
        </thead>
        <tbody className='divide-y divide-gray-200 bg-white'>
          <tr>
            <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
              Born
            </td>
            <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
              {data.birth_year}
            </td>
          </tr>
          <tr>
            <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
              Eyes
            </td>
            <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
              {data.eye_color}
            </td>
          </tr>
          <tr>
            <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
              Hair
            </td>
            <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
              {data.hair_color}
            </td>
          </tr>
          <tr>
            <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
              Height
            </td>
            <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
              {data.height}
            </td>
          </tr>
          <tr>
            <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
              Mass
            </td>
            <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
              {data.mass}
            </td>
          </tr>
          <tr>
            <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
              Homeworld
            </td>
            <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
              <Homeworld id={homeworldId} />
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <h4>Films</h4>
      {data.films.map((film) => {
        const filmUrlParts = film.split("/").filter(Boolean);
        const filmId = filmUrlParts[filmUrlParts.length - 1];
        return <Film id={filmId} key={`Film-${filmId}`} />;
      })}
    </div>
  );
}

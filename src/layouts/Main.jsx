import { Outlet, useLoaderData } from "react-router-dom";
import { fetchData } from "../helpers"
import wave from '../assets/wave.svg'
import { Nav } from "../components/Nav";

export const mainLoader = () => {
  const userName = fetchData('userName');
  return { userName }
}

export const Main = () => {
  const { userName } = useLoaderData();

  return (
    <div className="layout">
      <Nav userName={userName} />
      <main>
        <Outlet />
      </main>
      <img src={wave} alt="icon" />
    </div>
  )
}
// rrd imports
import { useLoaderData } from "react-router-dom";
// helpers
import { fetchData } from "../helpers";
// components
import { Intro } from "../components/Intro";
// library imports
import { toast } from "react-toastify";


export const dashboardLoader = () => {
  const userName = fetchData('userName');
  return { userName }
}

export async function dashboardAction({ request }) {
  const data = await request.formData();
  const formData = Object.fromEntries(data);

  try {
    localStorage.setItem('userName', JSON.stringify(formData.userName))
    return toast.success(`Welcome ${formData.userName}`)
  } catch (e) {
    throw new Error('There was a problem creating your account.')
  }
}

export const Dashboard = () => {
  const { userName } = useLoaderData();

  return (
    <div>
      {userName ? <p>{userName}</p> : <Intro />}
    </div>
  )
}
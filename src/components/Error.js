import { useRouteError } from "react-router-dom";

const Error=()=>
{
    const err=useRouteError();
    return(
        <><h1>Aahhhhhh...!</h1>
        <h2>Something went wrong 😵</h2>
        <h3>{err.status}</h3></>
    )
}

export default Error;
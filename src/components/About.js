import React from "react";
import UserClass from "./UserClass";

class About extends React.Component
{
    constructor(props){
        super(props);
       
    }

    render()
    {
        return (
            <><div className=" text-2xl font-sans pt-4 text-orange-500">
                <UserClass />
                </div></>
        )
    }
}


export default About;
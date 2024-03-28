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
            <><div className="user">
                <UserClass />
                </div></>
        )
    }
}


export default About;
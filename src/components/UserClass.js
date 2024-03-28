import { Component } from "react";

class UserClass extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            user:{
                name:"Nishant",
                location:"dummy",
                avatar_url:"dummy"
            }
        };
        
    }
    async componentDidMount(){
        const profile=await fetch("https://api.github.com/users/Nishant0897");
        const json=await profile.json();
        
        this.setState(
            {
                user:json
            });
        console.log(this.state.user);

    }
    render(){
        const {name,location,avatar_url,login}=this.state.user;
        
        return(
            <><div className="about"><h1>Welcome to foodPe 🍕</h1>
            <h2>Your one stop solution for hunger 🤤</h2></div>
            <div className="user-card">
                <div className="user">
                    <img className="img" src={avatar_url}></img>
                    <h3>{name}  -  {login}</h3>
                    <h5>{location}</h5>
                </div>
            </div></>
        )
    }
}

export default UserClass;
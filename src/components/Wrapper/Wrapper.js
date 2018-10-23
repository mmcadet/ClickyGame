import React from "react";
import "./Wrapper.css";
import FriendCard from "../FriendCard/FriendCard";
import friends from "../../friends.json";

class Wrapper extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selected : []
        }
       
    }
    handleClick=(event) => {
        console.log(event);
        this.setState({
            selected: [...this.state.selected, event]
        })
        console.log(this.state.selected);
        // fill selected with ids then get them to display
    }

    render(){
        
        return(
            <div className="wrapper">
                 {
                   
                 friends.map(friend => (
                <FriendCard
                  removeFriend={this.removeFriend}
                  id={friend.id}
                  onClick={this.handleClick }
                  key={friend.id}
                  name={friend.name}
                  image={friend.image}
                  occupation={friend.occupation}
                  location={friend.location}
                />
              ))}

            </div>
           
        )
    }
}

export default Wrapper;

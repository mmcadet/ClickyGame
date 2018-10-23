import React from "react";
import "./FriendCard.css";


class FriendCard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: props.id,
      name: props.name,
      image: props.image,
      occupation: props.occupation,
      location: props.location

    }
  }

  render(){
    return(

      <div   className="card">
      <div className="img-container">
        <img onClick={()=>this.props.onClick(this.state.id)}  value={this.props.id} alt={this.props.name} src={this.props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {this.props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {this.props.occupation}
          </li>
          <li>
            <strong>Address:</strong> {this.props.location}
          </li>
        </ul>
      </div>
      <span className="remove">𝘅</span>
    </div>

    )
  }
}



export default FriendCard;

      
import React, { Component } from 'react';
import PropTypes from "prop-types"
import './ContactCard.css';
//Contact card is a component
class ContactCard extends Component {
//Don't need this 
    /*    constructor(props)
    {
        super(props);
    }
*/



  render() 
  {
    return (
      <div className="ContactCard">
      <h1> Contact Card </h1>
       <p>Name: {this.props.name}  </p>
       <p>Mobile Number: {this.props.mobile_phone_number} </p>
       <p>Work Number: {this.props.work_phone_number} </p>
       <p>Email: {this.props.email}  </p> 
      </div>
    );
  }
}

ContactCard.propTypes =
{
    name: PropTypes.string.isRequired,
    mobile_phone_number: PropTypes.number.isRequired,
    work_phone_number: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired   
}
export default ContactCard;

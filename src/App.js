import React, { Component } from 'react';

import ContactCard from "./ContactCard"
class App extends Component {
  render() {
    return (
      <div className="App">
          <ContactCard name="Ethan Sam" mobile_phone_number ={7183810313} work_phone_number={3476107484} email="esam5556@gmail.com"/> 
        <ContactCard name="John Wick" mobile_phone_number={34673583495} work_phone_number={43534534534} email="JohnWich574@gmail.com" /> 
        <ContactCard name="Donald Trump" mobile_phone_number={3463454353} work_phone_number={345345435345} email="DonaldJTrump5326@gmail.com" /> 
       </div>
    );
  }
}

export default App;

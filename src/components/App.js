import React from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import Contactlist from './ContactList';


function App() {
  
  const contact = [
    {
      id: "1",
      name: "Wasath",
      email: "wasath.vt@gmail.com",
    },
    {
      id: "2",
      name: "Lithara",
      email: "lithara2002@gmail.com",
    },
  ];
   
  return (
    <div className='ui container'>
      <Header />
      <AddContact />
      <Contactlist contacts={contact} />
    </div>
  );  
}

export default App;

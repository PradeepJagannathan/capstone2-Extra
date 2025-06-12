import React, { useState, useEffect } from 'react';
import { getAll } from './components/restdb.js';
import './App.css';
import CustomerList from './components/customerList.js';
import CustomerAddUpdateForm from './components/customerAddUpdateForm.js';

function log(message){console.log(message);}

export function App(params) {
  let blankCustomer = { "id": -1, "name": "", "email": "", "password": "" };
  const [refreshFlag, setRefreshFlag] = useState(0);
  const [customers, setCustomers] = useState([]);
  const [formObject, setFormObject] = useState(blankCustomer);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const refresh = function (noChanges = false) {
    if (!noChanges) {
      setRefreshFlag(refreshFlag + 1);
    }
  }

  useEffect(() => { getCustomers() }, [refreshFlag]);
  
  const getCustomers =  function(){
      log("in getCustomers()");
      getAll(setCustomers);
  }


  return (
    <div>
      <CustomerList customers={customers}
        formObject={formObject}
        blankCustomer={blankCustomer}
        refreshFlag={refreshFlag}
        setFormObject={setFormObject}
        selectedCustomer={selectedCustomer}
        setSelectedCustomer={setSelectedCustomer}
      /> 
      <CustomerAddUpdateForm customers={customers}
        formObject={formObject}
        blankCustomer={blankCustomer}
        setFormObject={setFormObject}
        selectedCustomer={selectedCustomer}
        setSelectedCustomer={setSelectedCustomer}
        refresh={refresh}
      /> 
    
    </div>
  );
}

export default App;

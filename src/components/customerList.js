import React from 'react';

function log(message){console.log(message);}

export default function CustomerList(props) {

   
    const isSelectedCustomer = function (customer) {
        log("in isSelecetedCustomer()")
        return (props.selectedCustomer != null && props.formObject === customer);
    }

    const handleListClick = function(customer){
        console.log("in handleListClick() ");

        // Deselect if customer is already selected
        if (customer.id !== props.formObject.id){
            props.setFormObject(customer);
            props.setSelectedCustomer(customer);
        }
        else{
            props.setFormObject(props.blankCustomer);
            props.setSelectedCustomer(props.blankCustomer);
        }
    } 

    return (
    <div className="boxed" >
        <h4>Customer List</h4>
        <table id="customer-list">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Pass</th>
            </tr>
          </thead>
          <tbody>
            {props.customers.map(
              (customer, index) => {
                return (<tr key={customer.id}
                className={(isSelectedCustomer(customer)) ? 'selected' : ''} 
                onClick={() => handleListClick(customer)} 
                >
                  <td>{customer.name}</td>
                  <td>{customer.email}</td>
                  <td>{(customer.password).replaceAll(/./g, '*')}</td>
                </tr>);
              }
            )}
          </tbody>
        </table>
     </div>
    );
}
const items = [
    {
      "id": 0,
      "name": "Mike Johnsons",
      "email": "mikej@abc.com",
      "password": "mikej"
    },
    {
      "name": "Cindy Smiths",
      "email": "cinds@abc.com",
      "password": "cinds",
      "id": 1
    },
    {
      "name": "Julio Martins",
      "email": "julim@abc.com",
      "password": "julim",
      "id": 2
    }
  ]

const baseURL = 'http://localhost:4000/customers';

export async function getAll(setCustomers) {
  const myInit = {
    method: 'GET',
    mode: 'cors' 
  };
  const fetchData = async (url) => {
  try {
    const response = await fetch(url, myInit);
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.status}`);
    }
    const data = await response.json();
    setCustomers(data);
  } catch (error) {
  alert(error);
  }
  }
  fetchData(baseURL);
}


/*
export function get(id) {
    let result = null;
    for( let item of items){
        if(item.id === id){
            result = item;
        }
    }
  return result;
}*/

export async function deleteById(id) {
  let myHeaders = new Headers({ "Content-Type": "application/json" });
  const myInit = {
    method: 'DELETE',
    headers: myHeaders,
    mode: 'cors' 
  };
  const fetchData = async (url) => {
  try {
    const response = await fetch(url, myInit);
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.status}`);
    }
    const data = await response.json();
    console.log("deleteById", data );
  } catch (error) {
  alert(error);
  }
  }
  fetchData(baseURL + "/" + id);
}

export async function post(item) {
  delete item.id;
  let myHeaders = new Headers({ "Content-Type": "application/json" });
  let body = JSON.stringify(item);
  const myInit = {
    method: 'POST',
    body: body,
    headers: myHeaders,
    mode: 'cors' 
  };
  const fetchData = async (url) => {
  try {
    const response = await fetch(url, myInit);
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.status}`);
    }
    const data = await response.json();
    console.log("post call", data );
  } catch (error) {
  alert(error);
  }
  }
  fetchData(baseURL);
}

export async function put(id, item) {
  let myHeaders = new Headers({ "Content-Type": "application/json" });
  let body = JSON.stringify(item);
  const myInit = {
    method: 'PUT',
    body: body,
    headers: myHeaders,
    mode: 'cors' 
  };
  const fetchData = async (url) => {
  try {
    const response = await fetch(url, myInit);
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.status}`);
    }
    const data = await response.json();
    console.log("put call", data );
  } catch (error) {
  alert(error);
  }
  }
  fetchData(baseURL + "/" + id);
}

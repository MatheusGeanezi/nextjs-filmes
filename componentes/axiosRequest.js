import axios from 'axios';
// import React from 'react';

 export default async function axiosGet(){
    const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );
      const data = await response.data;
      console.log('AQUI',data)
      return data
}

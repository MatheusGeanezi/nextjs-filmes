import React from 'react';

import componenteA from '../componentes/componenteA.js'
import componenteB from '../componentes/componenteB.js'
import axiosGet from '../componentes/axiosRequest.js'



export async function getServerSideProps() {
  return {
    props: {
      nome: 'Matheus'
    }
  }
}




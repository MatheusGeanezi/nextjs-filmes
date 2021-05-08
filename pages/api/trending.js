import {apiBase,apiKey} from '../../lib/tmdb.js'

export default async (req, res) => {

    const retorno = await fetch(`${apiBase}/trending/movie/week?api_key=${apiKey}&language=pt-BR`)    
    const json = await retorno.json()

    res.status(200).json({ list: json.results })

  }
  
import {apiBase,apiKey} from '../../lib/tmdb.js'

export default async (req, res) => { 
    const retorno = await fetch(`${apiBase}/search/movie?api_key=${apiKey}&language=pt-BR&query=${req.query.q}`)    
    const json = await retorno.json()

    console.log('JSON',json)

    res.status(200).json({ list: json.results })

  }
  
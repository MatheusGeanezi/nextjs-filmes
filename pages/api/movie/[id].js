import {apiBase,apiKey} from '../../../lib/tmdb.js'

export default async (req, res) => { 
    const retorno = await fetch(`${apiBase}/movie/${req.query.id}?api_key=${apiKey}&language=pt-BR`)    
    const json = await retorno.json()

    res.status(200).json({ info: json })

  }
  
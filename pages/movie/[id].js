import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import { appEndereco } from '../../lib/variaveis_globais.js'

export default function movieItem({ info }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Catalogo de filmes</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    {info.title}
                </h1>

                <p>
                    Nota: {info.vote_average}
                </p>

                <p>
                    {info.overview}
                </p>

                <img src={`http://image.tmdb.org/t/p/original${info.backdrop_path}`} width="400" />

               <button> <Link href={appEndereco}>voltar para o inicio</Link></button>


            </main>
        </div>
    )
}

export async function getServerSideProps(context) {



    const retorno = await fetch(`${appEndereco}/api/movie/${context.params.id}`)
    const json = await retorno.json()

    return {
        props: {
            info: json.info
        }
    }
}
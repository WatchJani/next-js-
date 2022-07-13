import React from 'react'
import Link from "next/link"
import Image from 'next/image'
import { Container } from "../components/container/container"

export async function getServerSideProps() {
    const res = await fetch("https://jani-netflix.herokuapp.com/api/v1/all")
    const data = await res.json()

    return {
        props: {
            movies: data.movies
        }
    }
}

const About = ({ movies }) => {

    console.log(movies)

    return (
        <>

            <Link href="/">home</Link>
            <div>About</div>
            {movies?.length == 0 ? (<div>loading...</div>) : (movies.map((movies) => {
                return (
                    <Container key={movies._id}>
                        <Image
                            src={movies.banner}
                            alt={movies.name}
                            width={1280}
                            height={810}
                            loading="lazy"
                            layout="responsive"
                            blurDataURL
                            placeholder="blur"
                        />
                        <h1>{movies.name}</h1>
                        <p>{movies.description}</p>
                    </Container>
                )
            }))

            }

        </>
    )
}

export default About
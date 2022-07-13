import React from 'react'
import Link from "next/link"
import Image from 'next/image'


export async function getServerSideProps() {
    const res = await fetch("http://localhost:5000/api/v1/all")
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
                    <div key={movies._id}>
                        <Image
                            src={movies.banner}
                            alt={movies.name}
                            priority
                            width={1280}
                            height={810}
                        />
                        <h1>{movies.name}</h1>
                        <p>{movies.description}</p>
                    </div>
                )
            }))

            }

        </>
    )
}

export default About
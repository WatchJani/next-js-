import React from 'react'
import Link from "next/link"



export async function getServerSideProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos")
    const data = await res.json()

    return {
        props: {
            todose: data
        }
    }
}

const About = ({todose}) => {
    return (
        <>
            <Link href="/">home</Link>
            <div>About</div>
            {todose?.length == 0 ? (<div>loading...</div>) : (todose.map((todo) => {
                return (
                    <div key={todo.id}>
                        <p>
                            {todo.id}: {todo.title}
                        </p>
                    </div>
                )
            }))

            }

        </>
    )
}

export default About
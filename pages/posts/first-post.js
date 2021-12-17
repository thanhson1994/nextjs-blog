import Image from 'next/image'
import Head from 'next/head'
import Layout from '../../components/layout'
import axios from 'axios';
import React, {useState} from 'react';
import Link from 'next/link'

export default function FirstPost({data}) {
    const [todos, setTodos] = useState(data);
    const handleDeteleTodo = (id) => {
       const newTodos = todos.filter(item=> item.id !== id);
       setTodos(newTodos);
    }

    return (  
        <Layout>
        <Head>
        <title>First Post</title>
        </Head>
        <h1> First Post </h1>
        {
            todos.map(item => 
            <div> 
                {item.id} {item.title} 
                <Link href= {`/posts/${item.id}`} > 
                    View Detail
                </Link>
                <button onClick= { () => handleDeteleTodo(item.id)}>
                    Delete
                </button>
            </div>)
        }
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
        <Image
            src="/images/profile.jpg" // Route of the image file
            height={144} // Desired size with correct aspect ratio
            width={144} // Desired size with correct aspect ratio
            alt="Your Name"
            />
        </Layout>
    )
  }

  export async function getStaticProps(context) {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/todos`)
    const data = res.data.filter(item => item.id <= 10);
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: { data }, // will be passed to the page component as props
    }
  }
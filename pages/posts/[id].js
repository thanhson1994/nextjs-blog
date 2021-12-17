import Layout from '../../components/layout';
import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Post({postData}) {
    const router = useRouter();
    console.log('router', router);
  return(
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <h2>Post Detail</h2>
            title : {postData.title}
            <br />
             id: {postData.id}
            <br />
            <Link href="/">
            <a>Back to home</a>
          </Link>
        </Layout>) 

}


export async function getStaticPaths() {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/todos`)
    const paths = res.data.filter(item => item.id <= 10).map(iem => {
        return {
            params : {
                id: iem.id.toString()
            }
        }
    });
    return {
        paths,
        fallback: false
    }
  }

  export async function getStaticProps({ params }) {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/${params.id}`)
    const postData = res.data;

    if (!postData) {
        return {
          notFound: true,
        }
      }

    return {
      props: {
        postData
      }
    }
  }
  
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import Alert from '../../components/alert'
import { useState } from 'react'

export default function FirstPost() {
    const [type, setType] = useState('success');
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First Post</h1>
            <h2>
                <Link href="/">
                <a>Back to home</a>
                </Link>
            </h2>
            <button onClick={() => { type === 'success' ? setType("error") : setType("success") }}>Click me!</button>
            <Alert type={type}/>
        </Layout>
    )
}
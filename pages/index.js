// import React, { Fragment } from 'react'
// import A from 'next/link'
import Head from 'next/head'

const Home = ()=> {
       return <div>
            index page
           <Head>
               <link href='/static/common.css' rel='stylesheet'/>
           </Head>
            <div>
                <img src="/static/imgs/ava.jpeg" alt=""/>
            </div>
            <a href='/about'>
                About
            </a>
        </div>
}

export default Home
// import React, { Fragment } from 'react'
// import A from 'next/link'
// import { createStore } from 'redux'
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
//
// const reducer = function (state, action) {
//     return state
// }

// const store = createStore(reducer)
export default Home
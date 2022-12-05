import type { AppProps } from 'next/app'
import { Layout } from '../components/layout/Layout'
import axios from 'axios';
import i18n from "../i18n/index";
import '../styles/styles.scss'
import { useState, useEffect } from 'react'

const MyApp = ({ Component, pageProps }: AppProps) => {

  const [loading, setLoading] = useState(true);  

  useEffect(()=>{
    axios({ url: 'https://ipapi.co/json/', method: "get" })
      .then((res) => {
        i18n.changeLanguage(res.data.languages.substring(0, 2));
        setLoading(false);
      }).catch((e) => {
        console.log('errrore', e,e.response)
        i18n.changeLanguage("en");
        setLoading(false);
      });
  },[]);
  
  return (
    <>
      { loading ? <div>Cargando ... </div> : 
        <Layout>
          <Component {...pageProps} />
        </Layout>
      }
    </>
    
  )
}

export default MyApp

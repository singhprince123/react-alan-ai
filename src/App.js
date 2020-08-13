import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards'
import useStyles from './styles'

const alanKey = process.env.REACT_APP_ALAN_API_KEY;

export default function App() {
  const [newsArticles, setNewsArticles] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
          if(command === 'newsHeadlines'){
            console.log("articles ==>", articles)
            setNewsArticles(articles)
          }
      } 

    })
  },[])

  return (
    <div>
      <div className={classes.logoContainer}>
        <img src="https://alan.app/voice/images/previews/preview.jpg" className={classes.alanLogo}/>
      </div>
      <NewsCards articles ={newsArticles} />
    </div>
  )
}

import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards'
import useStyles from './styles'

const alanKey = process.env.REACT_APP_ALAN_API_KEY;

export default function App() {
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle ] = useState(-1)
  const classes = useStyles();

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
          if(command === 'newsHeadlines'){
            setActiveArticle(-1)
            setNewsArticles(articles)
          } else if(command === 'highlight'){
            setActiveArticle( pervActiveArticle => pervActiveArticle + 1)
          }
      } 

    })
  },[])

  return (
    <div>
      <div className={classes.logoContainer}>
        <img src="https://alan.app/voice/images/previews/preview.jpg" className={classes.alanLogo}/>
      </div>
      <NewsCards articles ={newsArticles} activeArticle={activeArticle} />
    </div>
  )
}

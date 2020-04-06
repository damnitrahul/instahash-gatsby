import React from 'react';
import Hashtag from '../components/hashtag/Hashtag';
import Layout from '../components/layout/Layout';
import '../scss/index.scss';
import { Helmet } from 'react-helmet';
function App() {
  console.log(
    '%c 👋 Oh, Hi there,Curious web lover!',
    'color: #d74034; font-size:24px;'
  );
  console.log(
    `%c  ✨ Like what you see? We could work together!
    
  🐛 Found a bug? Please, let me know by e-mail, twitter, github issue...

  🛠 Code available here: https://github.com/damnitrahul/instahash-gatsby
    
  📬 Find me here: https://twitter.com/damnitrahul
    
  Let the debug begin!
  
  Bonus meme: https://preview.redd.it/xxeyh0e833711.gif?format=mp4&s=5fe8fde9cb56528721c04741f1ac7cfb14ef2053
  `,
    'font-size:16px'
  );
  return (
    <Layout>
      <Helmet title="Hashtag Generator | InstaHash">
        <meta
          name="description"
          content="InstaHash is a website with different Hashtag Tools for social media. Hashtag Generator, Hashtag Creator, Hashtag Analytics and Top Hashtags for more efficient social media marketing and more followers and likes."
        />
        <meta
          name="keywords"
          content="hashtag, hashtag generator, hashtag analytics, hashtag creator, hashtag, hashtags, top hashtags, social media, follower, likes, instagram, twitter, facebook"
        />
      </Helmet>
      <Hashtag />
    </Layout>
  );
}

export default App;

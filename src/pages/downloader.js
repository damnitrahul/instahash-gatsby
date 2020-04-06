import React from 'react';
import Layout from '../components/layout/Layout';
import Downloader from '../components/downloader/Downloader';
import { Helmet } from 'react-helmet';

function downloader() {
  return (
    <Layout>
      <Helmet title="DP Downloader | InstaHash">
        <meta
          name="description"
          content="View anyone's Instadp for free in full size. Instagram profile picture viewer lets you zoom any Insta dp in original size, even private profiles."
        />
        <meta
          name="keywords"
          content="instadp, insta dp, igdp, profile picture viewer, instagram display picture, full size, instagram, display, picture, view, profile, picture, instagram profile picture viewer"
        />
      </Helmet>
      <Downloader />
    </Layout>
  );
}

export default downloader;

// <meta name="theme-color" content="#fb5b5a" />
// <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
// <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
// <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
// <link rel="manifest" href="/site.webmanifest" />
// <meta
//   name="description"
//   content="Top Hashtags for
//   instagram, twitter & more, View anyone's Instadp for free in full size. InstaHash viewer lets you zoom any Insta dp in original size, even private profiles. InstaHash is a website with different Hashtag Tools for social media"
// />

// <meta
//   name="keywords"
//   content="hashtag, hashtag generator, hashtag analytics, hashtag creator, hashtag, hashtags, top hashtags, social media, follower, likes, instagram, twitter, facebook,instadp, insta dp, igdp, profile picture viewer, instagram display picture, full size, instagram, display, picture, view, profile, picture, instagram profile picture viewer"
// />
// <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
// <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
// <title>
//   InstaHash | Hashtag Generator and DP Downloader | Top Hashtags for
//   instagram, twitter & more
// </title>

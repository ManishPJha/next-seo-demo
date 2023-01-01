import Head from "next/head";
import React from "react";

type SeoPropsType = {
  ogTitle: string;
  ogDescription: string;
  ogURL: string;
  ogType: string;
  ogImage: string;
  twitterHandler: string;
  FacebookAppID: string;
};

const SEO = ({
  ogTitle,
  ogDescription,
  ogURL,
  ogType,
  ogImage,
  twitterHandler,
  FacebookAppID,
}: SeoPropsType) => {
  return (
    <Head>
      <meta
        data-rh="true"
        name="viewport"
        content="width=device-width,minimum-scale=1,initial-scale=1,maximum-scale=1"
      />
      <meta data-rh="true" charSet="utf-8" />
      <meta property="title" content={ogTitle}></meta>
      <meta data-rh="true" property="og:title" content={ogTitle} />
      <meta property="description" content={ogDescription}></meta>
      <meta data-rh="true" property="og:description" content={ogDescription} />
      <meta property="type" content={ogType}></meta>
      <meta property="url" content={ogURL}></meta>
      <meta data-rh="true" property="og:url" content={ogURL} />
      <meta data-rh="true" property="al:web:url" content={ogURL} />
      <meta data-rh="true" property="og:image" content={ogImage} />
      <meta data-rh="true" property="og:image:secure_url" content={ogImage} />
      <meta data-rh="true" property="fb:app_id" content={FacebookAppID} />
      <meta data-rh="true" property="og:site_name" content="NextJS 13 Demo" />
      <meta
        data-rh="true"
        name="robots"
        content="index,follow,max-image-preview:large"
      />
      <meta data-rh="true" name="referrer" content="unsafe-url" />
      <meta data-rh="true" property="twitter:title" content={ogTitle} />
      <meta data-rh="true" name="twitter:site" content={twitterHandler} />
      <meta data-rh="true" name="twitter:app:url:iphone" content={ogURL} />
      <meta
        data-rh="true"
        property="twitter:description"
        content={ogDescription}
      />
      <meta data-rh="true" name="twitter:image:src" content={ogImage} />
      <meta data-rh="true" name="twitter:card" content="summary_large_image" />
      <meta data-rh="true" name="twitter:creator" content={twitterHandler} />
      <meta data-rh="true" name="twitter:tile:image" content={ogImage} />
    </Head>
  );
};

export default SEO;

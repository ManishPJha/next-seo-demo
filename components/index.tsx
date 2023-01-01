import { NextPage } from "next";
import React from "react";

import SEO from "@/components/seo/index";

import HomeStyle from "../styles/Home.module.css";

type PropsType = {
  data: any;
};

const IndexComponent: NextPage<PropsType> = (props: PropsType) => {
  const { data } = props;

  return (
    <div className={HomeStyle.main}>
      <SEO
        ogTitle={data.title}
        ogDescription={data.description}
        ogType={"website"}
        ogURL={data.thumbnail}
        ogImage={data.thumbnail}
        twitterHandler={process.env.TWITTER_HANDLER!}
        FacebookAppID={process.env.FACEBOOK_APP_ID!}
      />
      <h4>{data.title}</h4>
      <a href={data.thumbnail}>{data.thumbnail}</a>
      <img
        src={data.thumbnail}
        alt="image alt"
        style={{ paddingTop: "30px" }}
      />
    </div>
  );
};

export default IndexComponent;

import { NextPage } from "next";
import React from "react";

const withIndexHOC = (App: NextPage<any>) => {
  return class wrapperIndexPage extends React.Component {
    constructor(props: any) {
      super(props);
    }

    static async getInitialProps(ctx: any) {
      const response = await fetch(
        "https://dummyjson.com/products/1"
      );
      const json = await response.json();

      return {
        data: json,
      };
    }

    render(): React.ReactNode {
      return <App {...this.props} />;
    }
  };
};

export default withIndexHOC;

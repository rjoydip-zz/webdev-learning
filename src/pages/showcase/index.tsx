import React from "react";
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import CardContainer, { CardItem } from "@site/src/components/global/Card";
import { items } from "@site/__fixtures__/showcase.data";

export default function ShowcasePage(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
      <div className="container margin-top--lg">
        <CardContainer>
          {
            items.map((item, index) => <CardItem key={index} {...item}>{item.description}</CardItem>)
          }
        </CardContainer>
      </div>
    </Layout>
  );
}

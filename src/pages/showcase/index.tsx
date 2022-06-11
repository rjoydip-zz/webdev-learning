import React from "react";
import Layout from "@theme/Layout";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import CardContainer, { CardItem } from "@site/src/components/global/Card";

import { items } from "@site/__fixtures__/showcase.data";
import humanizeString from "@site/src/utils";

import "./showcase.module.scss"

export default function ShowcasePage(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  const tabItems = Array.from(
    new Set([
      ...items.map((item) => item.tags).flat(2).filter((item) => item).map(
        (item) => humanizeString(item.trim().toLocaleLowerCase()),
      ),
    ]),
  );

  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}
    >
      <div className="container margin-top--lg">
        <Tabs>
          {tabItems.map((tabItem, index) =>
            <TabItem
              key={index}
              value={tabItem.toLocaleLowerCase()}
              label={tabItem}
            >
              <CardContainer>
                {items.map((item, index) =>
                  item.tags.filter((item) => item).map((item) =>
                    humanizeString(item.trim().toLocaleLowerCase())
                  ).includes(tabItem)
                    ? <CardItem key={index} {...item}></CardItem>
                    : null
                )}
              </CardContainer>
            </TabItem>
          )}
        </Tabs>
      </div>
    </Layout>
  );
}

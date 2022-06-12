import React, { useEffect, useState } from "react";
import Layout from "@theme/Layout";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import { Rings } from "react-loader-spinner";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import CardContainer, { CardItem } from "@site/src/components/global/Card";
import humanizeString from "@site/src/utils";

import "./showcase.module.scss";
import { get } from "@site/src/utils/fetchShowcaseData";

export default function ShowcasePage(): JSX.Element {
  const [tabItems, setTabItems] = useState(["All"]);
  const [showLoader, setShowLoader] = useState(true);
  const [showcaseData, setShowcaseData] = useState([]);
  const { siteConfig } = useDocusaurusContext();

  useEffect(() => {
    (async () => {
      const data = await get(
        "https://raw.githubusercontent.com/rjoydip/awesome-js-resources/master/README.md",
      );
      setShowcaseData((state) => [...state, ...data]);
      setTabItems((state) => [
        ...state,
        ...Array.from(
          new Set([
            ...data.map((item) => item.tags).flat(2).filter((item) => item)
              .map(
                (item) => humanizeString(item.trim().toLocaleLowerCase()),
              ),
          ]),
        ),
      ]);
      setShowLoader(false);
    })();
  }, []);

  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}
    >
      <div className="container margin-top--lg">
        {showLoader ? <div className="loader"><Rings color="rgba(77, 141, 255, 0.8)" ariaLabel="loading-indicator" /></div> : <Tabs>
          {tabItems.length > 0 && tabItems.map((tabItem, index) =>
            <TabItem
              key={index}
              value={tabItem.toLocaleLowerCase()}
              label={tabItem}
            >
              <CardContainer>
                {showcaseData && showcaseData.map((item, index) =>
                  tabItem.toLocaleLowerCase() === "all" ? <CardItem key={index} {...item}>
                    {item.description}
                  </CardItem> : item.tags.filter((item) => item).map((item) =>
                    humanizeString(item.trim().toLocaleLowerCase())
                  ).includes(tabItem)
                    ? <CardItem key={index} {...item}>
                      {item.description}
                    </CardItem>
                    : null
                )}
              </CardContainer>
            </TabItem>
          )}
        </Tabs>}
      </div>
    </Layout>
  );
}

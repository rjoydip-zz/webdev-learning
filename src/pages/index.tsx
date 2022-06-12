import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import { Footer } from '../components/global/Footer';
import CardContainer, { CardItem } from '../components/global/Card';

import './index.module.scss';
import { FeatureList } from '@site/data/featureItem.data';

function Banner(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className="hero">
      <div className="container">
        <p className="hero__title">{siteConfig.title}</p>
      </div>
    </header>
  );
}

function Homepage(): JSX.Element {
  return (
    <section className="features">
      <div className="container">
        <CardContainer>
          {FeatureList.map((props, idx) => (
            <CardItem key={idx} {...props}>
              <p>{props.description}</p>
            </CardItem>
          ))}
        </CardContainer>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
      <main>
        <Banner />
        <Homepage />
        <Footer />
      </main>
    </Layout>
  );
}

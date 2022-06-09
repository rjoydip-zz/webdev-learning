import React from 'react';
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import "./playground.module.scss"

import { Logs } from '@site/src/components/global/Logs';
import { EditorTheme } from './theme';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
      <LiveProvider code="<strong>Hello World!</strong>">
        <div className="playground">
          <div className='row'>
            <div className="col col--7" style={{
              padding: "0",
            }}>
              <div className='editor'>
                <LiveEditor language="jsx" theme={EditorTheme}/>
              </div>
            </div>
            <div className="col col--5" style={{
              padding: "0",
            }}>
              <div style={{
                height: "100%",
              }}>
                <div className='preview'><LivePreview />
                  <LiveError /></div>
                <div className='logger'><Logs /></div>
              </div>
            </div>
          </div>
        </div>
      </LiveProvider>
    </Layout>
  );
}

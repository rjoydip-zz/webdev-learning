import React from 'react';
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'
import Layout from '@theme/Layout';
import SplitPane from 'react-split-pane';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import "./playground.module.scss"

import { Logs } from '@site/src/components/global/Logs';
import { EditorTheme } from './theme';

export default function PlaygroundPage(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
      <LiveProvider code="<strong>Hello World!</strong>">
        <div className="playground">
          <SplitPane split="vertical" defaultSize="50%" minSize="400px">
            <div className='editor'>
              <LiveEditor language="jsx" theme={EditorTheme} />
            </div>
            <SplitPane split="horizontal" defaultSize="60%">
              <div className='preview'><LivePreview />
                <LiveError /></div>
              <div className='logger'><Logs /></div>
            </SplitPane>
          </SplitPane>
        </div>
      </LiveProvider>
    </Layout>
  );
}

import React from "react";
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";
import Layout from "@theme/Layout";
import SplitPane from "react-split-pane";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import "./playground.module.scss";

import { ConsoleL } from "@site/src/components/global/ConsoleL";
import { EditorTheme } from "./theme";

function Window(props): JSX.Element {
  return (
    <div className="ch-frame-container">
      <div className="ch-frame-title-bar">
        <div className="ch-frame-buttons">
          <div className="ch-frame-button ch-frame-button-left"></div>
          <div className="ch-frame-button-space"></div>
          <div className="ch-frame-button ch-frame-button-middle"></div>
          <div className="ch-frame-button-space"></div>
          <div className="ch-frame-button ch-frame-button-right"></div>
        </div>
      </div>
      {props.children}
    </div>
  );
}

export default function PlaygroundPage(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}
    >
      <LiveProvider code="<strong>Hello World!</strong>">
        <div className="playground">
          <SplitPane split="vertical" defaultSize="50%" minSize="400px">
            <Window>
              <div className="editor">
                <LiveEditor language="jsx" theme={EditorTheme} />
              </div>
            </Window>
            <SplitPane split="horizontal" defaultSize="60%">
              <Window>
                <div className="preview">
                  <LivePreview />
                  <LiveError />
                </div>
              </Window>
              <div className="console">
                <Window>
                  <ConsoleL />
                </Window>
              </div>
            </SplitPane>
          </SplitPane>
        </div>
      </LiveProvider>
    </Layout>
  );
}

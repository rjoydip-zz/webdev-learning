import React, { useState } from 'react';
import Layout from '@theme/Layout';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Logs } from '@site/src/components/global/Logs';

import "./playground.module.scss"

export default function Home(): JSX.Element {
  const [code, setCode] = useState("console.log('hello world!');");
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
      <div className="playground">
        <div className='row'>
          <div className="col col--7" style={{
            padding: "0",
          }}>
            <div className='editor'>
              <CodeMirror
                value={code}
                height="100%"
                theme={"dark"}
                onKeyDown={(event) => {
                  if ((event.ctrlKey || event.metaKey) && String.fromCharCode(event.which).toLowerCase() === 's') {
                    event.preventDefault();
                    new Function(code)();
                  } else {
                    return event;
                  }
                }}
                extensions={[javascript({ jsx: true })]}
                onChange={(value, _) => setCode(value)}
              />
            </div>
          </div>
          <div className="col col--5" style={{
            padding: "0",
          }}>
            <div style={{
              height: "100%",
            }}>
              <div className='preview'></div>
              <div className='logger'>{<Logs />}</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

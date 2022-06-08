import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { FaPlay } from 'react-icons/fa';
import Layout from '@theme/Layout';
import { Logs } from '@site/src/components/global/Logs';

import "./playground.module.scss"

export default function Home(): JSX.Element {
  const [code, setCode] = useState("console.log('hello world!');");
  const { siteConfig } = useDocusaurusContext();

  const execute = () => {
    return new Function(code)();
  }

  return (
      <Layout
        title={siteConfig.title}
        description={siteConfig.tagline}>
        <div className="playground">
          <div className='row'>
            <div className="col col--7 leftContainer">
              <div className='editor'>
                <CodeMirror
                  value={code}
                  height="100%"
                  theme={"dark"}
                  extensions={[javascript({ jsx: true })]}
                  onChange={(value, _) => {
                    setCode(value);
                  }}
                />
              </div>
            </div>
            <div className="col col--5 rightContainer">
              <div className='execute'>
                <button type='button' onClick={execute}><FaPlay /></button>
              </div>
              <div className='preview'></div>
              <div className='logsContainer'>{<Logs />}</div>
            </div>
          </div>
        </div>
      </Layout>
  );
}

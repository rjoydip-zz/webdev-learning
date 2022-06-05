import React from 'react';
import DocsCards, { DocsCard } from '../global/DocsCards';

import styles from "./styles.module.scss"

type FeatureItem = {
  title: string;
  href: string;
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'JavaScript',
    href: "/docs/javascript",
    description: (
      <>
        JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. Over 97% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries. All major web browsers have a dedicated JavaScript engine to execute the code on users' devices.
      </>
    ),
  },
  {
    title: 'Node.js',
    href: "/docs/nodejs",
    description: (
      <>
        Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser.
      </>
    ),
  },
  {
    title: 'TypeScript',
    href: "/docs/typescript",
    description: (
      <>
        TypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. It is designed for the development of large applications and transpiles to JavaScript. As it is a superset of JavaScript, existing JavaScript programs are also valid TypeScript programs.
      </>
    ),
  },
];

export default function Homepage(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <DocsCards>
          {FeatureList.map((props, idx) => (
            <DocsCard key={idx} header={props.title} href={props.href}>
              <p>{props.description}</p>
            </DocsCard>
          ))}
        </DocsCards>
      </div>
    </section>
  );
}

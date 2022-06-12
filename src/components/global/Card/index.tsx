import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './card.module.scss';
import { CardPropsType } from '@site/src/types';

const isImageCard = (props: { type: string }) => props.type === 'image';

function CardItem(props: CardPropsType): JSX.Element {
  const content = (
    <>
      {/* {(props.type === "image" && props.href) && <img src={useBaseUrl(props.href)} className="Card-image" />} */}
      <div className="Card-container">
        {(props.icon) && (
          <div className="Card-icon-row">
            {props.icon && <img src={useBaseUrl(props.icon)} className="Card-icon Card-icon-default" />}
          </div>
        )}
        {props.header && props.header === 'undefined' ? null : <header className="Card-header">{props.header}</header>}
        <div className="Card-content">{props.children}</div>
      </div>
    </>
  );

  const className = clsx({
    'Card-with-image': isImageCard(props) && props.href && props.href !== "",
    'Card-without-image': isImageCard(props) && !props.href && props.href === "",
    'Card-with-video': props.type === 'video',
    'Card-with-pdf': props.type === 'pdf',
    'Card-with-link': props.type === 'link',
    'Card-with-gist': props.type === 'gist',
    'Card-with-markdown': props.type === 'markdown',
    'Card-size-lg': props.size === 'lg',
    [props.className]: props.className,
  });

  if (typeof props.href === 'undefined') {
    return (
      <div className={className}>
        <div className={clsx(styles.card)}>{content}</div>
      </div>
    );
  }

  if (typeof props.href !== 'undefined' ? /^http/.test(props.href) : false) {
    return (
      <div className={className}>
        <a className={clsx(styles.card)} href={props.href} target="_blank">
          {content}
        </a>
      </div>
    );
  }

  return (
    <div className={className}>
      <Link to={props.href} className={clsx(styles.card)}>
        {content}
      </Link>
    </div>
  );
}

function CardContainer(props): JSX.Element {
  return <div className={`${clsx(styles["card-items"])} ${props.className}`}>{props.children}</div>;
}

export { CardItem };
export default CardContainer;

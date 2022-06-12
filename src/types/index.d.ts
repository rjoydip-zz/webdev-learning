export type CardType = "video" | "gist" | "image" | "pdf" | "markdown" | "link";

export type CardSize = "md" | "lg";

export interface CardPropsType extends React.HTMLAttributes<HTMLDivElement> {
  href?: string;
  header?: string;
  icon?: string;
  img?: string;
  size?: CardSize;
  tags: string[];
  type: CardType;
  description?: string;
}

export type ShowcaseItemType = CardPropsType;
export type FeatureItemType = CardPropsType;

export type ShowcaseDataType = {
  video: CardPropsType[];
  gist: CardPropsType[];
  img: CardPropsType[];
  pdf: CardPropsType[];
  markdown: CardPropsType[];
  others: CardPropsType[];
};

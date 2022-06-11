type _type = "video" | "link" | "audio" | "code" | "image" | "pdf" | "markdown";

export interface CardPropsType extends React.HTMLAttributes<HTMLDivElement> {
  href?: string;
  header?: string;
  icon?: string;
  activeIndex?: number;
  img?: string;
  size?: "md" | "lg";
  tags: string[];
  markdown?: string;
  type: _type;
}

export interface ShowcaseItemType extends CardPropsType {
  description?: string;
}

export type FeatureItemType = {
  header: string;
  href: string;
  type: _type;
  // Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
  icon?: string;
  description: JSX.Element;
};

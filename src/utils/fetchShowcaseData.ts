import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import * as cheerio from "cheerio";

import humanizeString from ".";
import { CardPropsType, ShowcaseDataType } from "../types";

function getLinks(html: string) {
  const $ = cheerio.load(html);
  return $("ul > li > a")
    .map((i, el) => ({
      index: i,
      href: $(el).attr("href"),
      description: humanizeString($(el).text()),
    }))
    .get()
    .filter((col) => /^http/.test(col.href));
}

export async function get(url: string): Promise<CardPropsType[]> {
  const collections: ShowcaseDataType = {
    video: [],
    gist: [],
    img: [],
    pdf: [],
    markdown: [],
    others: [],
  };
  if (!url) {
    throw Error("Please provide a url");
  }
  const markdownData = await (await fetch(url)).text();
  const { value }: any = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeSanitize)
    .use(rehypeStringify)
    .process(markdownData);
  const _links = getLinks(value);

  collections.video = _links
    .filter((col) => /youtu/.test(col.href))
    .map((item) => ({
      ...item,
      header: "",
      size: "md",
      type: "video",
      icon: "/svg/video.svg",
      tags: ["video"],
    }));
  collections.gist = _links
    .filter((col) => /\/\/gist/.test(col.href))
    .map((item) => ({
      ...item,
      header: "",
      size: "md",
      type: "gist",
      icon: "/svg/github.svg",
      tags: ["gist"],
    }));
  collections.pdf = _links
    .filter((col) => /.pdf$/.test(col.href))
    .map((item) => ({
      ...item,
      header: "",
      size: "md",
      type: "pdf",
      icon: "/svg/pdf.svg",
      tags: ["pdf"],
    }));
  collections.markdown = _links
    .filter((col) => /.md$/.test(col.href))
    .map((item) => ({
      ...item,
      header: "",
      size: "md",
      type: "markdown",
      icon: "/svg/markdown.svg",
      tags: ["markdown"],
    }));
  collections.img = _links
    .filter((col) => /.(png|jpeg|svg)$/.test(col.href))
    .map((item) => ({
      ...item,
      header: "",
      size: "md",
      type: "image",
      icon: "/svg/image.svg",
      tags: ["image"],
    }));
  collections.others = _links
    .filter(
      (n) =>
        !collections.video.some((n2) => n.href === n2.href) &&
        !collections.gist.some((n2) => n.href === n2.href) &&
        !collections.pdf.some((n2) => n.href === n2.href) &&
        !collections.markdown.some((n2) => n.href === n2.href) &&
        !collections.img.some((n2) => n.href === n2.href)
    )
    .map((item) => ({
      ...item,
      header: "",
      size: "md",
      type: "link",
      icon: "/svg/link.svg",
      tags: ["link"],
    }));

  return Promise.resolve([
    ...collections.video,
    ...collections.pdf,
    ...collections.markdown,
    ...collections.others,
    ...collections.img,
    ...collections.gist,
  ]);
}

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: "category",
      label: "Getting Started",
      collapsed: false,
      items: ["index"],
    },
    {
      type: "category",
      label: "JavaScript",
      collapsed: false,
      items: [
        "javascript/index",
        "javascript/mangling",
        {
          type: "category",
          label: "Asychronous",
          collapsed: false,
          items: [
            "javascript/asynchronous/index",
            "javascript/asynchronous/callback",
            "javascript/asynchronous/promise",
            "javascript/asynchronous/generator",
            "javascript/asynchronous/async-await",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "TypeScript",
      collapsed: false,
      items: ["typescript/index"],
    },
    {
      type: "category",
      label: "Node.js",
      collapsed: false,
      items: [
        "nodejs/index",
        "nodejs/processing-model",
        "nodejs/blocking-vs-nonblocking",
        "nodejs/event-loop",
        "nodejs/http-server",
        "nodejs/nestjs-express-fastify",
      ],
    },
    {
      type: "category",
      label: "Nest.js",
      collapsed: false,
      items: [
        "nestjs/index",
        "nestjs/installation",
        "nestjs/components",
        "nestjs/controller",
        "nestjs/module",
        "nestjs/pipes",
        "nestjs/routes",
        "nestjs/provider",
        "nestjs/microservices",
        "nestjs/microservices-controller",
        "nestjs/entity",
        "nestjs/entity-migration",
      ],
    },
    {
      type: "category",
      label: "Database",
      collapsed: false,
      items: [
        "database/index",
        {
          type: "category",
          label: "MongoDB",
          collapsed: true,
          items: ["database/mongodb/index"],
        },
        {
          type: "category",
          label: "PostgreDB",
          collapsed: true,
          items: ["database/postgredb/index"],
        },
        {
          type: "category",
          label: "DynamoDB",
          collapsed: true,
          items: ["database/dynamodb/index"],
        },
        "database/orm",
      ],
    },
    {
      type: "category",
      label: "Angular",
      collapsed: false,
      items: ["angular/index"],
    },
    {
      type: "category",
      label: "Cloud",
      collapsed: false,
      items: ["cloud"],
    },
  ],
};

module.exports = sidebars;

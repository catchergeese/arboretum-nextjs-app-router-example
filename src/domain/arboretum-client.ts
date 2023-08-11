import "server-only";

import { createArboretumClient } from "@p8marketing/arboretum-sdk";

const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN!;
const space = process.env.CONTENTFUL_SPACE!;
const environment = process.env.CONTENTFUL_ENVIRONMENT!;

export const arboretumClient = () =>
  createArboretumClient({
    type: "cda-client-params",
    preview: false,
    contentful: {
      space: space,
      environment: environment,
      accessToken: accessToken,
      options: {
        pageContentTypes: {
          page: {
            slugFieldId: "slug",
            titleFieldId: "slug",
            childPagesFieldId: "childPages",
          },
        },
      },
    },
  });

import type { MetadataRoute } from "next";

import { projectCaseStudies } from "@/data/project-case-studies";
import {
  getLocalizedPath,
  SITE_URL,
} from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "",
    "/projects",
    "/learning",
    "/resume",
  ];

  const projectPaths =
    projectCaseStudies.map(
      (caseStudy) =>
        `/projects/${caseStudy.slug}`
    );

  const paths = [
    ...staticPaths,
    ...projectPaths,
  ];

  return paths.flatMap(
    (path) => [
      {
        url:
          `${SITE_URL}${getLocalizedPath(
            "en",
            path
          )}`,
        changeFrequency:
          path === ""
            ? "weekly"
            : "monthly",
        priority:
          path === ""
            ? 1
            : path === "/projects"
              ? 0.9
              : 0.8,
      },
      {
        url:
          `${SITE_URL}${getLocalizedPath(
            "ar",
            path
          )}`,
        changeFrequency:
          path === ""
            ? "weekly"
            : "monthly",
        priority:
          path === ""
            ? 0.9
            : path === "/projects"
              ? 0.8
              : 0.7,
      },
    ]
  );
}
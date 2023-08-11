import React from "react";
import { arboretumClient } from "@/domain/arboretum-client";
import { localeCode } from "@/domain/locale-code";
import Link from "next/link";

const ArboretumPage: React.FC<{
  params: { segments?: Array<string> };
}> = async (props) => {
  const { client, warnings } = await arboretumClient();

  const fullPath = props.params.segments
    ? `/${localeCode}/${props.params.segments.join("/")}`
    : `/${localeCode}`;

  const page = client.pageByPath(fullPath);
  const allPagesEither = client.pages();
  const allPages = allPagesEither._tag === "Right" ? allPagesEither.right : [];

  if (page._tag === "Left") {
    return <h1>Not found - {fullPath}</h1>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className={"text-2xl mb-12"}>Page: {fullPath}</h1>

        <pre>{JSON.stringify(page.right, null, 4)}</pre>

        <div className={"mt-12"}>
          <span className={"text-xl"}>All pages:</span>
          <ul className={"pl-4 ml-4 list-disc"}>
            {allPages.map((page) => (
              <li key={page.id}>
                <Link href={page.path.slice(`/${localeCode}`.length)}>
                  {page.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default ArboretumPage;

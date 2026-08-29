import { readFileSync } from "node:fs";
import path from "node:path";
import Script from "next/script";

export const dynamic = "force-static";

const heroVisibilityFix = `
#hero .pill {
  margin-top: 0 !important;
  margin-bottom: 2rem !important;
  padding: 0.86rem 1.45rem !important;
  gap: 0.75rem !important;
  background: rgba(12, 13, 15, 0.94) !important;
  border: 1.5px solid rgba(229, 168, 50, 0.9) !important;
  box-shadow: 0 14px 38px rgba(0, 0, 0, 0.42) !important;
}

#hero .pill .pip {
  width: 9px !important;
  height: 9px !important;
}

#hero .pill span {
  color: #E5A832 !important;
  font-size: 1rem !important;
  font-weight: 800 !important;
  letter-spacing: 0.075em !important;
  line-height: 1.25 !important;
}

@media (max-width: 768px) {
  #hero .pill {
    margin-top: 0 !important;
    padding: 0.78rem 1rem !important;
  }

  #hero .pill span {
    font-size: 0.86rem !important;
    letter-spacing: 0.045em !important;
  }
}
`;

function extractLegacyWebsite() {
  const source = readFileSync(path.join(process.cwd(), "index.html"), "utf8");
  const css = source.match(/<style>([\s\S]*?)<\/style>/i)?.[1] ?? "";
  const body = source.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? "";
  const scripts = Array.from(body.matchAll(/<script>([\s\S]*?)<\/script>/gi)).map(
    (match) => match[1]
  );

  const markup = body
    .replace(/<script>[\s\S]*?<\/script>/gi, "")
    .replaceAll('src="images/', 'src="/images/')
    .replaceAll("src='images/", "src='/images/");

  return {
    css,
    markup,
    script: scripts.join("\n")
  };
}

export default function Home() {
  const website = extractLegacyWebsite();

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: website.css }} />
      <style dangerouslySetInnerHTML={{ __html: heroVisibilityFix }} />
      <main dangerouslySetInnerHTML={{ __html: website.markup }} />
      <Script
        id="dawood-rcc-interactions"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: website.script }}
      />
    </>
  );
}

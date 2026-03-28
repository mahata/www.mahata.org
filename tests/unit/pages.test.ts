import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const distDir = resolve(import.meta.dirname, "../../dist");

function readHtml(path: string): string {
  return readFileSync(resolve(distDir, path), "utf-8");
}

describe("Homepage (index.html)", () => {
  const html = readHtml("index.html");

  it("contains the page title", () => {
    expect(html).toContain("Yasunori MAHATA");
  });

  it("contains the meta description", () => {
    expect(html).toContain("Personal site of Yasunori MAHATA");
  });

  it("contains the bio text", () => {
    expect(html).toContain("software developer based in Tokyo");
  });

  it("renders active service links", () => {
    expect(html).toContain("https://github.com/mahata");
    expect(html).toContain("https://bsky.app/profile/mahata.org");
    expect(html).toContain("https://www.linkedin.com/in/ymahata");
    expect(html).toContain("https://zenn.dev/mahata");
    expect(html).toContain("https://note.com/ymahata");
    expect(html).toContain("https://dev.to/mahata");
    expect(html).toContain("https://medium.com/@mahata777");
    expect(html).toContain("https://vercelog.mahata.org");
    expect(html).toContain("https://sizu.me/mahata");
  });

  it("renders past service links", () => {
    expect(html).toContain("https://mstdn.jp/@mahata");
    expect(html).toContain("https://mahata.gitlab.io");
    expect(html).toContain("https://mahata.wordpress.com");
  });

  it("contains navigation links", () => {
    expect(html).toContain('href="/"');
    expect(html).toContain('href="/blog"');
  });

  it("contains section headings", () => {
    expect(html).toContain("Web services I use.");
    expect(html).toContain("Web services I used to use in the past.");
  });
});

describe("Blog listing (blog/index.html)", () => {
  const html = readHtml("blog/index.html");

  it("contains the blog page title", () => {
    expect(html).toContain("Blog");
  });

  it("lists the hello-world post", () => {
    expect(html).toContain("Hello World");
    expect(html).toContain("My first blog post on the new Astro-powered site.");
  });

  it("links to the hello-world post", () => {
    expect(html).toContain('href="/blog/hello-world"');
  });

  it("contains navigation links", () => {
    expect(html).toContain('href="/"');
    expect(html).toContain('href="/blog"');
  });

  it("displays tags", () => {
    expect(html).toContain("astro");
    expect(html).toContain("blog");
  });
});

describe("Blog post (blog/hello-world/index.html)", () => {
  const html = readHtml("blog/hello-world/index.html");

  it("contains the post title", () => {
    expect(html).toContain("Hello World");
  });

  it("contains the post content", () => {
    expect(html).toContain("Welcome to my blog!");
    expect(html).toContain("Why Astro?");
  });

  it("contains navigation links", () => {
    expect(html).toContain('href="/"');
    expect(html).toContain('href="/blog"');
  });

  it("displays tags", () => {
    expect(html).toContain("astro");
    expect(html).toContain("blog");
  });

  it("has the correct page title in meta", () => {
    expect(html).toContain("Hello World | Yasunori MAHATA");
  });
});

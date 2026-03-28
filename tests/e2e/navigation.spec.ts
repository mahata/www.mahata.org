import { expect, test } from "@playwright/test";

test.describe("Navigation between pages", () => {
  test("homepage loads with correct content", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("h1")).toContainText("Yasunori MAHATA");
    await expect(page.locator("text=Web services I use.")).toBeVisible();
    await expect(page.locator("text=Web services I used to use in the past.")).toBeVisible();
  });

  test("can navigate from home to blog", async ({ page }) => {
    await page.goto("/");
    await page.click('a[href="/blog"]');
    await expect(page).toHaveURL(/\/blog\/?$/);
    await expect(page.locator("h1")).toContainText("Blog");
    await expect(page.locator("text=Hello World")).toBeVisible();
  });

  test("can navigate from blog listing to a blog post", async ({ page }) => {
    await page.goto("/blog");
    await page.click('a[href="/blog/hello-world"]');
    await expect(page).toHaveURL(/\/blog\/hello-world\/?$/);
    await expect(page.locator("header h1")).toContainText("Hello World");
    await expect(page.locator("text=Welcome to my blog!")).toBeVisible();
  });

  test("can navigate from blog post back to home", async ({ page }) => {
    await page.goto("/blog/hello-world");
    await page.click('a[href="/"]');
    await expect(page).toHaveURL(/\/$/);
    await expect(page.locator("h1")).toContainText("Yasunori MAHATA");
  });

  test("full navigation flow: home -> blog -> post -> home", async ({ page }) => {
    // Start at home
    await page.goto("/");
    await expect(page.locator("h1")).toContainText("Yasunori MAHATA");

    // Go to blog
    await page.click('a[href="/blog"]');
    await expect(page.locator("h1")).toContainText("Blog");

    // Go to post
    await page.click('a[href="/blog/hello-world"]');
    await expect(page.locator("header h1")).toContainText("Hello World");

    // Back to home
    await page.click('a[href="/"]');
    await expect(page.locator("h1")).toContainText("Yasunori MAHATA");
  });
});

test.describe("Page content is server-rendered (in initial HTML)", () => {
  test("homepage content is in initial HTML response", async ({ request }) => {
    const response = await request.get("/");
    const html = await response.text();
    expect(html).toContain("Yasunori MAHATA");
    expect(html).toContain("https://github.com/mahata");
    expect(html).toContain("Web services I use.");
  });

  test("blog listing content is in initial HTML response", async ({ request }) => {
    const response = await request.get("/blog");
    const html = await response.text();
    expect(html).toContain("Blog");
    expect(html).toContain("Hello World");
  });

  test("blog post content is in initial HTML response", async ({ request }) => {
    const response = await request.get("/blog/hello-world");
    const html = await response.text();
    expect(html).toContain("Hello World");
    expect(html).toContain("Welcome to my blog!");
    expect(html).toContain("Why Astro?");
  });
});

test.describe("External links", () => {
  test("active service links open in new tab", async ({ page }) => {
    await page.goto("/");
    const githubLink = page.locator('a[href="https://github.com/mahata"]');
    await expect(githubLink).toHaveAttribute("target", "_blank");
    await expect(githubLink).toHaveAttribute("rel", /noopener/);
  });

  test("past service links open in new tab", async ({ page }) => {
    await page.goto("/");
    const mastodonLink = page.locator('a[href="https://mstdn.jp/@mahata"]');
    await expect(mastodonLink).toHaveAttribute("target", "_blank");
    await expect(mastodonLink).toHaveAttribute("rel", /noopener/);
  });
});

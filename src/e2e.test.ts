import puppeteer from "puppeteer";

describe("App.tsx", () => {
  let browser: any;
  let page: any;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  it("open page", async () => {
    try {
      await page.goto("http://localhost:3000");
      const html = await page.evaluate(() =>  document.documentElement.outerHTML);
      console.log(html);
    } catch (e) {
      console.log("element probably not exists", e);
    }
  });

  afterAll(() => browser.close());
});
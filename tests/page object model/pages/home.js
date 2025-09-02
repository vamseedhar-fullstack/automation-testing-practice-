class HomePage {
  constructor(page) {
    this.page = page;
    this.productLinks = page.locator('#tbodyid h4 a');
  }

  async productCount() {
    return await this.productLinks.count();
  }

  async productNames() {
    // handy helper if you ever need the names
    return await this.productLinks.allTextContents();
  }
}

export default HomePage;

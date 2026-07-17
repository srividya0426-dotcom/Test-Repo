
export class Checkbox {
    constructor(page) {
        this.page = page;
        this.chkbox = page.locator('[aria-label="Select Home"]');
        this.home = page.getByTitle("Home");
        this.treeSwitcher=page.locator('.rc-tree-switcher');
        this.desktop = page.getByTitle("Desktop");
        this.desktop1 = page.locator('[aria-label="Select Desktop"]');
        this.document1 = page.getByText("Document");
        this.document = page.locator('[aria-label="Select Documents"]');
        this.Download1 = page.getByText("Downloads");
        this.download = page.locator('[aria-label="Select Downloads"]');
    }

    async selectCheckbox() {
        await this.chkbox.click();
        await this.treeSwitcher.click()
        await this.desktop.click()


    }
}


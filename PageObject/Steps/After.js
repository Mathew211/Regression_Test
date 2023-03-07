
exports.After = class After {

    constructor(page) {

        this.page = page

    }

    async reload() {

        await this.page.reload();
    }
    async close() {
        await this.page.close();
    }


}


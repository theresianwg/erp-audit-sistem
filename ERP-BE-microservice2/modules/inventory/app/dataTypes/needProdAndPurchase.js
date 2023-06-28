class NeedProdAndPurchase {
    constructor() {
        this.data = [];
        this.quantityProd = 999999;
        this.waitingItem = [];
        this.delayedProd = null;
    }

    addData = (data) => {
        this.data.push(data);
    };

    getData = () => {
        return this.data;
    };

    setQuantityProd = (quantityProd) => {
        this.quantityProd = quantityProd;
    }

    getQuantityProd = () => {
        return this.quantityProd;
    }

    addWaitingItem = (waitingItem) => {
        this.waitingItem.push(waitingItem);
    }

    getWaitingItem = () => {
        return this.childItem;
    }

    setDelayedProd = (delayedProd) => {
        this.delayedProd = delayedProd;
    }

    getDelayedProd = () => {
        return this.delayedProd;
    }

}

module.exports = NeedProdAndPurchase;

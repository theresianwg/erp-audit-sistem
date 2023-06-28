class SaveStorageData{
    constructor(){
        this.total_price = 0;
    }

    sumTotalPrice = (total_price) => {
        this.total_price = this.total_price + total_price;
    }

    getTotalPrice = () => {
        return this.total_price;
    }
}

module.exports = SaveStorageData;
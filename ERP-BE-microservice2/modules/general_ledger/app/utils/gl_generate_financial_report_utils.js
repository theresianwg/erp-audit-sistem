const pdfMake = require('pdfmake/build/pdfmake');
const pdfFonts = require('pdfmake/build/vfs_fonts');

const ProvideBalanceSheetReportUtil = (
    balance_sheet_data,
    title_balance_sheet,
    company_name,
    periode_name,
) => {
    try {
        pdfMake.vfs = pdfFonts.pdfMake.vfs;
        let currentAssets = [];
        let fixedAssets = [];
        let currentLiabilities = [];
        let longTermLiabilities = [];
        let equity = []
        let TotalCurrentAsset = 0
        let TotalFixedAsset = 0
        let TotalCurrentLiabilities = 0
        let TotalLongTermLiabilities = 0
        let TotalEquity = 0
        for (let i = 0; i < Object.keys(balance_sheet_data).length; i++) {
            const datas = balance_sheet_data[i];
            Object.keys(datas).forEach(function (key, index) {
                const data = datas[key];
                if (data.Coa_Parent_Name == 'Kas & Bank') {
                    currentAssets.push({
                        coa_number: data.Coa_Number,
                        item: data.Coa_Name,
                        amount: data.Debit - data.Credit
                    })
                    TotalCurrentAsset = TotalCurrentAsset + (data.Debit - data.Credit)
                }
                else if(data.Coa_Parent_Name == "Liabilities") {
                    currentLiabilities.push({
                        coa_number: data.Coa_Number,
                        item: data.Coa_Name,
                        amount: data.Debit - data.Credit
                    })
                    TotalCurrentLiabilities = TotalCurrentLiabilities + (data.Debit - data.Credit)
                }
                else if(data.Coa_Parent_Name == "Equity") {
                    equity.push({
                        coa_number: data.Coa_Number,
                        item: data.Coa_Name,
                        amount: data.Debit - data.Credit
                    })
                    TotalEquity = TotalEquity + (data.Debit - data.Credit)
                }
            });
        }
        currentAssets.sort(function(a, b) {return a.coa_number - b.coa_number})
        currentLiabilities.sort(function(a, b) {return a.coa_number - b.coa_number})
        equity.sort(function(a, b) {return a.coa_number - b.coa_number})
        for(let i = 0; i < currentLiabilities.length; i++){
            if(i > 0 && currentLiabilities[i-1].item == currentLiabilities[i].item){
                currentLiabilities[i].amount += currentLiabilities[i-1].amount
                currentLiabilities.shift()
                i--
            }
        }
        for(let i = 0; i < currentAssets.length; i++){
            if(i > 0 && currentAssets[i-1].item == currentAssets[i].item){
                currentAssets[i].amount += currentAssets[i-1].amount
                currentAssets.shift()
                i--
            }
        }
        for(let i = 0; i < equity.length; i++){
            if(i > 0 && equity[i-1].item == equity[i].item){
                equity[i].amount += equity[i-1].amount
                equity.shift()
                i--
            }
        }
        const docDefinition = {
            content: [
                {
                    text: `${title_balance_sheet}`,
                    style: 'header',
                },
                {
                    text: `${company_name}`,
                    style: 'subheader',
                },
                {
                    text: `${periode_name}`,
                    style: 'subheader',
                },
                {
                    text: ' ',
                },
                // Assets section
                {
                    text: 'Assets',
                    style: 'sectionHeader',
                },
                {
                    text: 'Current Assets',
                    style: 'subsectionHeader',
                },
                {
                    table: {
                        widths: ['auto', '*','auto',],
                        body: [
                            [{text:'Coa Number',bold:true},{text:'Item',bold:true}, {text:'Amount',bold:true}],
                            ...currentAssets.map(asset => [asset.coa_number, asset.item, asset.amount])
                        ]
                    },
                    style: 'table',
                },
                {
                    text: `Total Current Assets: ${TotalCurrentAsset}`,
                    style: 'total',
                },
                {
                    text: ' ',
                }, // Empty space
                {
                    text: 'Fixed Assets',
                    style: 'subsectionHeader',
                },
                {
                    table: {
                        widths: ['auto', '*','auto',],
                        body: [
                            [{text:'Coa Number',bold:true},{text:'Item',bold:true}, {text:'Amount',bold:true}],
                            ...fixedAssets.map(asset => [asset.coa_number, asset.item, asset.amount])
                        ]
                    },
                    style: 'table',
                },
                {
                    text: `Total Fixed Assets: ${TotalFixedAsset}`,
                    style: 'total',
                },
                {
                    text: ' ',
                }, // Empty space
                {
                    text: `Total Assets: ${
                        TotalFixedAsset + TotalCurrentAsset
                    }`,
                    style: 'total',
                },
                {
                    text: ' ',
                }, // Empty space

                // Liabilities section
                {
                    text: 'Liabilities',
                    style: 'sectionHeader',
                },
                {
                    text: 'Current Liabilities',
                    style: 'subsectionHeader',
                },
                {
                    table: {
                        widths: ['auto', '*','auto',],
                        body: [
                            [{text:'Coa Number',bold:true},{text:'Item',bold:true}, {text:'Amount',bold:true}],
                            ...currentLiabilities.map(liability => [liability.coa_number, liability.item, liability.amount])
                        ]
                    },
                    style: 'table',
                },
                {
                    text: `Total Current Liabilities: ${TotalCurrentLiabilities}`,
                    style: 'total',
                },
                {
                    text: ' ',
                }, // Empty space
                {
                    text: 'Long-term Liabilities',
                    style: 'subsectionHeader',
                },
                {
                    table: {
                        widths: ['auto', '*','auto',],
                        body: [
                            [{text:'Coa Number',bold:true},{text:'Item',bold:true}, {text:'Amount',bold:true}],
                            ...longTermLiabilities.map(liability => [liability.coa_number, liability.item, liability.amount])
                        ]
                    },
                    style: 'table',
                },
                {
                    text: `Total Long-term Liabilities: ${TotalLongTermLiabilities}`,
                    style: 'total',
                },
                {
                    text: ' ',
                }, // Empty space
                {
                    text: `Total Liabilities: ${
                        TotalLongTermLiabilities + TotalCurrentLiabilities
                    }`,
                    style: 'total',
                },
                {
                    text: ' ',
                }, // Empty space

                // Equity section
                {
                    text: 'Equity',
                    style: 'sectionHeader',
                },
                {
                    table: {
                        widths: ['auto', '*','auto',],  
                        body: [
                            [{text:'Coa Number',bold:true},{text:'Item',bold:true}, {text:'Amount',bold:true}],
                        ...equity.map(item => [item.coa_number, item.item, item.amount])
                        ]
                    },
                    style: 'table',
                },
                {
                    text: `Total Equity: ${TotalEquity}`,
                    style: 'total',
                },
                {
                    text: ' ',
                }, // Empty space
                {
                    text: `Total Liabilities and Equity: ${
                        TotalEquity +
                        TotalCurrentLiabilities +
                        TotalLongTermLiabilities
                    }`,
                    style: 'total',
                },
            ],
            styles: {
                header: {
                    fontSize: 18,
                    bold: true,
                    alignment: 'center',
                    margin: [0, 0, 0, 10],
                },
                subheader: {
                    fontSize: 14,
                    bold: true,
                    alignment: 'center',
                    margin: [0, 0, 0, 5],
                },
                sectionHeader: {
                    fontSize: 12,
                    bold: true,
                    margin: [0, 10, 0, 5],
                },
                subsectionHeader: {
                    fontSize: 11,
                    bold: true,
                    margin: [0, 5, 0, 3],
                },
                table: {
                    fontSize: 10,
                    margin: [0, 0, 0, 10],
                },
                total: {
                    fontSize: 10,
                },
            },
        };
        const pdfDoc = pdfMake.createPdf(docDefinition);
        return new Promise((resolve, reject) => {
            pdfDoc.getBuffer((buffer) => {
                resolve(buffer);
            });
        });
    } catch (err) {
        console.log(err);
    }
};



module.exports = {
    ProvideBalanceSheetReportUtil,
};

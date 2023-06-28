const sumIncomeBasedOnType = (salary_slips) => {
    const income = {
        gaji: 0,
        tunjanganPPh: 0,
        tunjanganLain: 0,
        honorariumImbalan: 0,
        premiAsuransi: 0,
        natura: 0,
        gratifikasiTHR: 0,
    }

    salary_slips.forEach(salary_slip => {
        const incomes = salary_slip.incomes;

        if (incomes) {
            incomes.forEach(i => {
                if (i.type === "Gaji Pokok")
                    income.gaji += i.SalaryIncome.nominal;
                else if (i.type === "Tunjangan PPh")
                    income.tunjanganPPh += i.SalaryIncome.nominal;
                else if (i.type === "Tunjangan Lain")
                    income.tunjanganLain += i.SalaryIncome.nominal;
                else if (i.type === "Imbalan Lain")
                    income.honorariumImbalan += i.SalaryIncome.nominal;
                else if (i.type === "Premi Asuransi")
                    income.premiAsuransi += i.SalaryIncome.nominal;
                else if (i.type === "Natura")
                    income.natura += i.SalaryIncome.nominal;
                else if (i.type === "Bonus")
                    income.gratifikasiTHR += i.SalaryIncome.nominal;
            });
        }
    });

    return income;
};

module.exports = sumIncomeBasedOnType;
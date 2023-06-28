const sumReductionBasedOnType = (salary_slips) => {
    const reduction = {
        pajakTelahDipotong: 0,
        pensiun: 0,
        asuransi: 0
    }

    salary_slips.forEach(salary_slip => {
        const reductions = salary_slip.reductions;

        if (reductions) {
            reductions.forEach(r => {
                if (r.type === "Pajak")
                    reduction.pajakTelahDipotong += r.SalaryReduction.nominal;
                else if (r.type === "Pensiun")
                    reduction.pensiun += r.SalaryReduction.nominal;
                else if (r.type === "Asuransi")
                    reduction.asuransi += r.SalaryReduction.nominal;
            });
        }
    });

    return reduction;
};

module.exports = sumReductionBasedOnType;
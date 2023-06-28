const calculateCostPH = async (time, cost) => {
    const workingHour = time;

    // Parsing waktu kerja menjadi komponen-komponennya
    const [hour, minute, second] = workingHour.split(':');

    // Konversi ke bilangan bulat
    const hourInt = parseInt(hour);
    const minuteInt = parseInt(minute);
    const secondInt = parseInt(second);

    // Hitung total jam kerja dalam format desimal
    const totalHours = hourInt + minuteInt / 60 + secondInt / 3600;

    // Hitung biaya per jam
    const biayaPerJam = cost / totalHours;

    return biayaPerJam;
};

module.exports = {
    calculateCostPH,
};

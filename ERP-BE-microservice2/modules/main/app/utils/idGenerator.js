// modules\main\app\utils\idGenerator.js
function padNumber(num, size) {
    let s = num + '';
    while (s.length < size) s = '0' + s;
    return s;
}

function generateCompanyId(number) {
    return `CMP${padNumber(number, 5)}`;
}

function generateEmployeeId(number) {
    return `EMP${padNumber(number, 5)}`;
}

function generateSuperAdminId(number) {
    return `SAD${padNumber(number, 5)}`;
}

function generateGuestId(number) {
    return `GUE${padNumber(number, 5)}`;
}

function generateRoleId(number) {
    return `ROL${padNumber(number, 5)}`;
}

function generatePermissionId(number) {
    return `PRM${padNumber(number, 5)}`;
}

module.exports = {
    generateCompanyId,
    generateEmployeeId,
    generateSuperAdminId,
    generateGuestId,
    generateRoleId,
    generatePermissionId,
};

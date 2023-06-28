const { execSync } = require('child_process');

const moduleNames = ['main'];

moduleNames.forEach((moduleName) => {
    try {
        console.log(`Running migrations for ${moduleName} module...`);
        process.env.MODULE_NAME = moduleName;
        const result = execSync(`npx sequelize-cli db:migrate`, {
            stdio: 'inherit',
        });
        console.log(
            `Migration success for ${moduleName} module:`,
            result.toString(),
        );
    } catch (error) {
        console.error(`Migration error for ${moduleName} module:`, error);
    }
});

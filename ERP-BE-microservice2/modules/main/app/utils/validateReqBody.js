function validateReqBody(requestBody, expectedProperties) {
    const requestBodyKeys = Object.keys(requestBody);
    const missingProperties = expectedProperties.filter(
        (property) => !requestBodyKeys.includes(property),
    );
    const extraProperties = requestBodyKeys.filter(
        (property) => !expectedProperties.includes(property),
    );

    if (missingProperties.length > 0) {
        return false;
    }

    if (extraProperties.length > 0) {
        return false;
    }

    return true;
}

module.exports = { validateReqBody };

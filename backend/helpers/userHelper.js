exports.getId = (req) => {
    const token = req.header('Authorization');

    return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
}

exports.changeNullToempty = (key, value) => {
    return (value === null) ? "" : value;
}
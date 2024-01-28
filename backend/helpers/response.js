exports.success = (message, results, statusCode) => {
    return {
        message,
        error: false,
        code: statusCode,
        results
    }
}

exports.error = (message, statusCode) => {
    const HTTP_CODES = [200, 201, 400, 401, 403, 422, 500];

    const code = HTTP_CODES.find(code => code === statusCode);

    if (!code) {
        statusCode = 500;
    } else {
        statusCode = code;
    }

    return {
        message,
        error: true,
        code: statusCode,
    }
}

exports.validation = (errors) => {
    let results = [];

    for(let error of errors?.details) {
        results.push({
            [error.context.label]: error.message
        });
    }
    
    return {
        message: 'Validation error',
        error: true,
        code: 422,
        results: results
    }
}
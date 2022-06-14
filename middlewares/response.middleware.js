const responseMiddleware = (req, res, next) => {
    const isAuthorized = (req, res, next) => {
        if (
            req &&
            req.headers &&
            req.headers.authorization &&
            req.headers.authorization === 'admin'
        ) {
            next();
        } else {
            res.status(401).send("error")
        }
    };

    module.exports = {
        isAuthorized
    }


}
// TODO: Implement middleware that returns result of the query


exports.responseMiddleware = responseMiddleware;

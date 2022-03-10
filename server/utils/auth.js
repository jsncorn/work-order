const jwt = require('jsonwebtoken');
const secret = "cookiecutter";
// 10 hour expiration for a work day : make sure it doesnt expire
const expiration = '10h';

module.exports = {
    authMiddleware({ req }) {

        let token = req.body.token || req.query.token || req.header.authorization;
        if (req.headers.authorization) {
            token = token.split(' ').pop().trim();
        }

        if(!token) {
            return req;
        }

        try {
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            req.employee = data;
        } catch (e) {
            console.log(e);
            console.log("Invalid token");
        }

        return req;

    },
    signToken({ firstName, email, _id }) {
        const payload = {firstName, email, _id};
        return jwt.sign({data: payload}, secret, {expiresIn: expiration});
    }
 }
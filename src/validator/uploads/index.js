const ImageHeadersSchema = require("./schema")
const InvariantError = require("../../exceptions/InvariantError");

module.exports = {
    validateImageHeaders: (headers) => {
        const validationResult = ImageHeadersSchema.validate(headers);

        if (validationResult.error) {
            throw new InvariantError(validationResult.error.message);
        }
    },
};
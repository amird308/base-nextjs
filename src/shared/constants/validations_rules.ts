export const VALIDATIONS_RULES = {
    REQUIRED: {
        message: "this field is required",
        value: true
    },
    EMAIL: {
        value: /\S+@\S+\.\S+/,
        message: "Entered value does not match email format"
    },
    PASSWORD1: {
        value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        message: "Minimum eight characters, at least one letter and one number:"
    }
}
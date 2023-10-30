export const firstNameValidation = {
    required: { value: true, message: "Missing Name!" },
    minLength: { value: 2, message: "Name too short!" },
    maxLength: { value: 30, message: "Name too long!" }
}

export const lastNameValidation = {
    required: { value: true, message: "Missing Last name!" },
    minLength: { value: 2, message: "Last name too short!" },
    maxLength: { value: 30, message: "Last name too long!" }
}

export const titleValidation = {
    required: { value: true, message: "Missing Title!" },
    minLength: { value: 5, message: "Title too short!" },
    maxLength: { value: 20, message: "Title too long!" }
}

export const countryValidation = {
    required: { value: true, message: "Missing Country!" },
    minLength: { value: 3, message: "Country too short!" },
    maxLength: { value: 30, message: "Country too long!" }
}

export const cityValidation = {
    required: { value: true, message: "Missing City!" },
    minLength: { value: 2, message: "City too short!" },
    maxLength: { value: 30, message: "City too long!" }
}
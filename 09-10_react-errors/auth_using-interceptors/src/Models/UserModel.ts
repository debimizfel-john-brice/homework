export interface CredentialsModel {
    email: string;
    password: string;
}

export interface UserModel extends CredentialsModel {
    firstName: string;
    lastName: string;
}
export interface RegisterDate {
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
    userAgent?: string,

}

export interface LoginDate {
    email: string,
    password: string,
    userAgent?: string
}
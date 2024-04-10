export interface User {
    id?: number,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    mobileNumber: string,
    createdOn?: string,
    userType?: number,
    accountStatus?: number 
}

export interface CurrentUser {
    id: string,
    personName: string,
    role?: UserRole
}

export type UserRole = "admin" | "moderator"


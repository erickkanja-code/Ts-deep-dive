
//literals
// let myName1 = "Bob"

// const myName2 = "Nancy"

//unions
type UserRole = 'guest' | 'member' | 'admin'
let userRole: UserRole = "admin"

type User = {
    username: string,
    role: 'guest' | 'member' | 'admin'
}

const user: User = {
    username: 'Erick',
    role: 'guest'
}
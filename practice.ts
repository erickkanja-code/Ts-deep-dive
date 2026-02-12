
//literals
// let myName1 = "Bob"

// const myName2 = "Nancy"

//unions
type UserRole = 'guest' | 'member' | 'admin'

type User = {
    id: number,
    username: string,
    role: UserRole
}

type UpdatedUser = Partial<User>




const users: User[] = [
    {id: 1, username: "john_doe", role: 'member'},
    {id: 2, username: "jane_doe", role: 'admin'},
    {id: 3, username: "guest_user", role: 'guest'},
    {id: 4, username: "charilie_brown", role: 'member'}
]

function addNewUser(newUser: Omit<User, "id" | "user">): User {
    let user: User = {id: users.length + 1, ...newUser}
    users.push(user)
    return user
}


function updateUser(id: number, updates: any) {
    const foundUser = users.find(user => user.id === id)
    if (!foundUser){
        console.log("User not found")
        return
    }
    Object.assign(foundUser, updates)

}


updateUser(1, {username: "new_john_doe"})
updateUser(4, {role: "new_john_doe"})
console.log(users)
// function fetchUserDetails(username: "string"): User {
//     const user = users.find(user => user.username = username)
//     if (!user){
//         throw new Error(`User with username ${username} not found`)
//     }
//     return user
// }



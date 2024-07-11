import UserContext from './UserContext';


const UserData=({children})=>{

    
    const user={
        name: "John Doe",
        email: "johndoe@example.com",
        role: "Admin",
        age:40
    }

    return (

        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>

    )

}

export default UserData ;
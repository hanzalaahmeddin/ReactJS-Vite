// const User = ({name, age, email}) => {
//     return (
//         <div>
//             <h2>Name: {name}</h2>
//             <h2>Age: {age}</h2>
//             <h2>Email: {email}</h2>
//         </div>
//     )
// }
const User = ({ userData }) => {
    return (
        <div>
            <h2>Name: {userData.name}</h2>
            <h2>Age: {userData.age}</h2>
            <h2>Email: {userData.email}</h2>
        </div>
    )
}
export default User
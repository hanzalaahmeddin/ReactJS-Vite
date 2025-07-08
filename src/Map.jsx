const Maps = () => {
    const userData = [
        {
            id: 1,
            name: "Hanzala",
            email: "hanzala@test.com",
            city: "Karachi"
        },
        {
            id: 2,
            name: "Mumtaz",
            email: "Mumtaz@test.com",
            city: "Lahore"
        },
        {
            id: 3,
            name: "Akif",
            email: "Akif@test.com",
            city: "Islamabad"
        },
        {
            id: 4,
            name: "Khalid",
            email: "khalid@test.com",
            city: "Karachi"
        }
    ]
    return (
        <div>
            <table border="1">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>NAME</td>
                        <td>EMAIl</td>
                        <td>CITY</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        userData.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.city}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Maps
import ReuseComponentMap from "./ReuseComponentMap"

const ReuseMaps = () => {
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
            <h1>Reuse Component in loop</h1>
            {
                userData.map((user) => (
                    <div key={user.id}>
                        <ReuseComponentMap data={user} />
                    </div>
                )

                )
            }
        </div>
    )
}
export default ReuseMaps
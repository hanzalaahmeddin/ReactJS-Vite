const ReuseComponentMap = ({ data }) => {
    return (
        <div style={{
            border: "1px solid",
            padding: "10px",
            margin: "10px",
            width: "450px",
            borderRadius: "20px"
        }}>
            <h2>Id: {data.id}</h2>
            <h2>Name: {data.name}</h2>
            <h2>Email: {data.email}</h2>
            <h2>City: {data.city}</h2>
        </div>
    )
}
export default ReuseComponentMap
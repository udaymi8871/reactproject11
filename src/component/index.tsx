const StudentTable = ({data

}:{
    data:any
}) => {
    return (

        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item:any) => (
                    <tr key={item.name}>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )

}
export default StudentTable
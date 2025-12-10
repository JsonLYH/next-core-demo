

export default async function Request() {
    const res = await fetch('http://10.10.10.100:9777/api/v1/article/test')
    const data = await res.json()
    return (
        <div>
            <h1>Request Page</h1>
            <p>{JSON.stringify(data)}</p>
        </div>
    )
}

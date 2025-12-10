async function TeamPage() {
    const res = await fetch('http://10.10.10.100:9777/api/v1/article/test')
    const data = await res.json()
    return (
        <div>
            <h1>TeamPage1</h1>
            <p>{JSON.stringify(data)}</p>
        </div>
    )
}
// export const revalidate = 60;
export default TeamPage
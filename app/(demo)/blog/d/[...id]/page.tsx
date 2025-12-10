export default async function Page({ params } :{params:{id?:string[]}}) {
    const paramsRes:{
        id?:string[]
    } =await params;
    const res = await fetch('http://10.10.10.100:9777/api/v1/article/test')
    const data = await res.json()
    return (
        <div>
            <h1>Page-{paramsRes.id?.join('/')}</h1>
            <p>{JSON.stringify(data)}</p>
        </div>
    )
}
export const dynamic = 'force-dynamic';
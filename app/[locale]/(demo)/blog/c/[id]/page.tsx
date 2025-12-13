export default async function ParamsTest({ params } :{params:{id?:string}}) {
    const paramsRes:{
        id?:string
    } = await params;
    console.log('paramsRes.id',paramsRes.id);
    const res = await fetch('http://10.10.10.100:9777/api/v1/article/test')
    const data = await res.json()
    return (
        <div>
            <h1>ParamsTest Page-{ paramsRes.id }</h1>
            <p>{JSON.stringify(data)}</p>
        </div>
    )
}
export async function generateStaticParams() {
    const posts = [
        {
            id:1
        },
        {
            id:2
        }
    ]
    return posts.map(post => ({
        id: post.id.toString() // 必须转换为字符串
    }));
}
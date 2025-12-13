export default async function Page({ params } :{params:{id?:string}}) {
    const paramsRes:{
        id?:string
    } =await params;
    console.log(paramsRes.id);
    return (
        <div>
            <h1>可选路由</h1>
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
        id: [post.id.toString()] // 必须转换为字符串
    }));
}
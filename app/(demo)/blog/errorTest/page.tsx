import Link from "next/link"
export default async function ErrorTest() {
    //遇到异常会自动跳转到error组件
    // throw new Error("错误")
    return (
        <div>
            <h1>ErrorTest Page</h1>
            <Link href="/blog/b">跳转B</Link>
        </div>
    )
}
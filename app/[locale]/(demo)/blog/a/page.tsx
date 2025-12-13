import Link from "next/link"
export default function APage() {
    return (
        <div>
            <h1>A Page</h1>
            <Link href="/blog/b">跳转B</Link>
            <Link className="ml-[10px]" href="/blog/errorTest">跳转错误测试页</Link>
        </div>
    )
}
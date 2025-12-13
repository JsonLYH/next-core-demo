import { getTranslations } from 'next-intl/server';
async function TeamPage() {
    const t =await getTranslations('HomePage');
    const res = await fetch('http://10.10.10.100:9777/api/v1/article/test')
    const data = await res.json()
    return (
        <div>
            <h1>TeamPage1</h1>
            <p>{JSON.stringify(data)}</p>
            <p>国际化语言：{t('title')}</p>
        </div>
    )
}
export const dynamic = 'force-dynamic';
// export const revalidate = 60;
export default TeamPage
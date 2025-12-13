import axios from "@/utils/request";
import { Button } from 'antd';
export default async function Request() {
    const res = await axios.get('http://10.10.10.100:9777/api/v1/article/test')
    const data = res.data;
    return (
        <div>
            <h1>Request Page</h1>
            <p>{JSON.stringify(data)}</p>
            <p>环境配置: {process.env.NEXT_PUBLIC_SERVER_URL}</p>
            <Button type='primary'>Primary Button</Button>
        </div>
    )
}

export const revalidate = 30;
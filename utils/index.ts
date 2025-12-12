import { message } from 'antd';

// 创建一个错误信息的队列，用于保存已经显示的错误信息
const errorQueue:any[] = []

type MessageType = 'error' | 'warning' | 'info' | 'success';

// 封装的函数用于显示错误信息
export const showMessage = (messageVal:string, type:MessageType = 'error', duration = 3000) => {
    // 仅在客户端生效
    if(typeof window !== 'undefined'){
        const [messageApi, contextHolder] = message.useMessage();
        // 检查错误信息是否已经显示过，如果已经显示则直接返回，避免重复显示
        if (errorQueue.includes(messageVal)) {
            return
        }
        // 添加错误信息到队列
        errorQueue.push(messageVal)
        messageApi[type](
            messageVal,
            duration,
            () => {
                // 错误信息显示完毕后，从队列中移除
                const index = errorQueue.indexOf(messageVal)
                if (index > -1) {
                    errorQueue.splice(index, 1)
                }
            }
        )
    }
}
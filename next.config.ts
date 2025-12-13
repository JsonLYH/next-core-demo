import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  /* config options here */
    reactCompiler:true,
    /**
     * 默认是开启严格模式的，开发环境，组件会被触发两次，您也可以关闭严格模式
     */
    reactStrictMode:false,
    output:'standalone'
};

export default withNextIntl(nextConfig);

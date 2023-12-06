import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from 'vite-plugin-dts'
import { resolve } from "path";

export default defineConfig({
//   plugins: [react()],
  plugins: [dts(), react()],
  build: {
    lib: {
      // 入口文件将包含可以由你的包的用户导入的导出：
      entry: resolve(__dirname, "components/index.ts"),
      name: "BlogReactComponents",
      fileName: () => `index.js`,
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ["react", "react-dom"],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          react: "React",
          "react-dom": "react-dom",
        },
      },
    },
  },
});

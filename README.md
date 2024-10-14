# The Wild Oasis

The Wild Oasis 是一个现代化的酒店管理系统,用于管理小型精品酒店的预订、入住和结账流程。

## 技术栈

1. 核心技术:

   - React 18
   - React Router 6
   - React Query (TanStack Query)
   - Styled Components

2. 状态管理:

   - React Query 用于服务器状态管理
   - React Context 用于全局状态管理 (如暗模式)
   - React Hook Form 用于表单状态管理

3. UI 组件和样式:

   - Styled Components 用于组件样式
   - 自定义实现的组件如 Modal, Table, Form, Button 等
   - 使用 Styled Components 实现的可复用 UI 组件
   - React Icons 用于图标
   - 响应式设计

4. 数据可视化:

   - 使用 Recharts 实现数据可视化图表

5. 后端集成:

   - Supabase 用于后端服务和数据存储

6. 工具和实用程序:

   - date-fns 用于日期处理
   - React Hot Toast 用于通知
   - 自定义 hooks (如 useMoveBack, useOutsideClick 等)
   - 使用 React Hook Form 进行表单状态管理和验证
   - 使用 React Hot Toast 实现 toast 通知

7. 开发工具:

   - Vite 用于项目构建和开发服务器
   - ESLint 用于代码检查
   - React Query Devtools 用于调试

8. 性能优化:

   - React.memo() 用于组件优化
   - useMemo 和 useCallback 用于性能优化
   - 代码分割和懒加载

9. 错误处理:

   - React Error Boundary 用于错误边界处理

10. 认证和授权:

    - 自定义认证逻辑 (基于 Supabase)

11. 路由:
    - React Router 6 用于客户端路由
    - 受保护路由实现

## 主要功能

- 仪表盘:显示关键业务指标和图表
- 客舱管理:添加、编辑和删除客舱信息
- 预订管理:创建、编辑和删除预订
- 入住/退房:处理客人入住和退房流程
- 用户认证:登录、注册和用户管理
- 设置:配置应用程序设置
- 支持明暗模式切换

## 项目结构

```

src/
├── components/ # 可重用的 UI 组件
├── context/ # React Context 文件
├── features/ # 按功能模块组织的组件和钩子
├── hooks/ # 自定义 React 钩子
├── pages/ # 应用程序的主要页面组件
├── services/ # API 服务和数据获取函数
├── styles/ # 全局样式和主题
├── ui/ # 基础 UI 组件
└── utils/ # 工具函数和辅助方法

```

## 安装

1. 克隆仓库:

```

git clone https://github.com/your-username/the-wild-oasis.git
cd the-wild-oasis

```

2. 安装依赖:

```

npm install

```

3. 启动开发服务器:

```

npm run dev

```

## 构建和部署

要构建生产版本,运行:

```

npm run build

```

构建后的文件将位于 `dist/` 目录中。

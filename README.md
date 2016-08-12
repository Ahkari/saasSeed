### 项目初始化！

1. git clone https://github.com/Ahkari/saasSeed.git

2. 下载webSotorm，打开下载好的这个项目

3. npm install

4. 打开run里的config，新增一个nodejs的启动程序。

5. 配置其JavascriptFile为`./bin/start`，新增Environment variables，`NODE_ENV=development`，apply之后run

6. 您的项目可以通过浏览器http://localhost:8000 访问！

### 架构说明

![架构说明](http://7xny7k.com1.z0.glb.clouddn.com/ehsySaas.png)

后端提供Java **API**

前端控制整个**view**层

中间层采用**nodejs**，基于**express**框架，主要做以下的工作：

1. 路由分配

2. 请求转发

3. link 由 **webpack**打包好的文件和**hbs**模板

项目构建工具有两个：

1. **webpack**

    构建所有js文件，在源目录下生成**bundle.js**和**vendor.bundle.js**两个打包好的文件供**hbs**模板引用

2. **gulp**

    构建除了js以外的所有文件，驱动**webpack**，**watch** **src**目录中的js文件

前端层架构：

1. 主框架是**react**

2. 基于**react-redux**以数据驱动的方式开发

3. 使用**react-router**控制**hash**路由

4. 使用**react-redux-router**同步路由与**store**的状态

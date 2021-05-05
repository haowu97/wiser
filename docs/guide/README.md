

[[toc]]

## 1. VuePress使用说明

#### 1.1 克隆GitHub项目到本地

首先打开[本项目的GitHub地址](https://github.com/henrywu97/wiser)，登陆自己的GitHub帐号之后(如果没有账号需要注册)点击`Fork`。

![](https://cdn.jsdelivr.net/gh/henrywu97/FigBed@master/Figs/20210414103524.png)

电脑上需要提前安装好Git软件，网上教程很多，[例如](https://blog.csdn.net/weixin_46069582/article/details/114403122)。

复制项目的Git地址：

![](https://cdn.jsdelivr.net/gh/henrywu97/FigBed@master/Figs/20210414103536.gif)

在命令行运行`git clone 复制的项目地址`即可将项目克隆到本地，例如`git clone https://github.com/henrywu97/wiser.git`。

![](https://cdn.jsdelivr.net/gh/henrywu97/FigBed@master/Figs/20210414103552.gif)

### 1.2 添加自己的文章

将自己写好的Markdown文章复制到对应的章节路径下`wiser\docs\QuantStrategy&Technology`，建议以英文形式命名。

例如，添加`2.9Assessment.md`之后的文档结构示例如下：

```
├─Chapter1
│      README.md
│      
├─Chapter2
│      2.9Assessment.md
│      README.md
│      
├─Chapter3
│      README.md
│      
├─Chapter4
│      README.md
│      
├─Chapter5
│      README.md
│      
├─Chapter6
│      README.md
│      
├─Chapter7
│      README.md
│      
├─Chapter8
│      README.md
│      
└─Chapter9
        README.md
```

在`wiser\docs\.vuepress\config.js`中找到章节所在位置，添加文章说明。

以`2.9Assessment.md`为例，添加的说明为`{ title: '股票型基金业绩归因评价', path:'/QuantStrategy&Technology/Chapter2/2.9Assessment'}`。

```json
{
  title: '第二章 量化选股',   // 必要的
  path: '/QuantStrategy&Technology/Chapter2/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
  collapsable: false, // 可选的, 默认值是 true,
  sidebarDepth: 1,    // 可选的, 默认值是 1
  children: [
    { title: '本章介绍', path:'/QuantStrategy&Technology/Chapter2/'},
    { title: '股票型基金业绩归因评价', path:'/QuantStrategy&Technology/Chapter2/2.9Assessment'}
  ]
},
```

### 1.3 上传到GitHub仓库

这里首先需要管理员添加仓库的修改权限；获得权限后，进入`wiser`文件夹下的命令行，在命令行中依次输入以下三行命令：

```shell
//添加全部
git add -A

//提交全部
git commit -m '可以是任意字符串，建议写上更新部分的说明'

//提交到服务器
git push
```

等待一会儿之后，即可看到网页更新后的内容。

### 1.4 上传静态资源(可选)

在`docs\.vuepress\public`文件夹下放置好对应文件后，可以在正文中通过链接的形式访问，例如

```markdown
[name](/name.pdf)
```

图片可以直接插入到文中

```markdown
![An image](./image.png)
```

更多参考[静态资源官方文档](https://vuepress.vuejs.org/zh/guide/assets.html#%E7%9B%B8%E5%AF%B9%E8%B7%AF%E5%BE%84)

## 2. Markdown语法说明

VuePress支持包括公式在内的几乎所有Markdown语法，但是相比于Typora对语法的要求更严格，容错率较低，下面做出说明：

### 2.1 插入本地图片

插入本地图片必须采用相对路径，建议将所在Chapter的所有图片统一放在`wiser\docs\QuantStrategy&Technology\Chapter n`文件夹下，添加之后的文档结构示例如下：

```
├─Chapter1
│      README.md
│      
├─Chapter2
│  │  2.9Assessment.md
│  │  README.md
│  │  
│  └─Figs
├─Chapter3
│      README.md
│      
├─Chapter4
│      README.md
│      
├─Chapter5
│      README.md
│      
├─Chapter6
│      README.md
│      
├─Chapter7
│      README.md
│      
├─Chapter8
│      README.md
│      
└─Chapter9
        README.md
```

引用方式为

```
![](./Figs/图片名称.jpg)
```

注意，`./`必须加上。

### 2.2 公式语法

行间公式的`$$`符号前必须空一行：

```
正文部分

$$
公式内容
$$
```

行内公式的`$`和公示内容之间不允许出现空格

```
$公示内容$
```

## 3. 写作说明

统一在最后加上一个章节，名为创作者及参考资料。分别记录最初的创作者以及之后更新者的姓名以及更新的内容。格式示例如下：

### 创作者及参考资料

#### 创作者

| 日期     | 修改人 | 说明                     |
| -------- | ------ | ------------------------ |
| 2020.5.1 | 小明   | 进行了第一版本的初步撰写 |
| 2020.5.2 | 小红   | 增加了……的内容，修改了…… |
|          |        |                          |

#### 参考资料

1. 丁鹏. 量化投资:策略与技术[M]. 电子工业出版社, 2012.
2. ...
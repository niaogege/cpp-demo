<!--
 * @Author: Chendapeng
 * @Date: 2022-03-30 23:21:24
 * @LastEditors: Chendapeng
 * @LastEditTime: 2022-03-30 23:25:54
 * @Description: 
-->
seg这体验太差了，写了两次文章都没能保存，半小时百写

居家办公期间，手机需要链接电脑进行调试，自己记录下踩坑，防止再犯

## 踩坑点

- iphone和mac必须在同一个局域网下，且链接的wifi不能含有中文名称
- vpn和charles不能同时启用
- mac下载的charles证书必须受信任

## 调试过程
网络一大把，推荐这篇文章 [mac 配置Charles抓包，在iPhone手机端调试](https://blog.csdn.net/qq_35770417/article/details/101072306) (可点击查看)

### mac电脑安装charles，且需要安装证书
![image.png](/img/bVcYRcX)

### 设置proxy代理
![image.png](/img/bVcYRcY)

### 设置ssl
![image.png](/img/bVcYRdc)

### PC端设置macOs proxy 
![image.png](/img/bVcYRdh)

此时已经阔以在电脑端进行查看当前的网络请求信息

接下来就是设置手机代理

### 首先手机需要安装证书，具体阔以操作charles查看
![image.png](/img/bVcYRdq)
![image.png](/img/bVcYRdr)


### 手机连接电脑进行调试，前提是需要在同一个局域网下，且链接的wifi不能含有中文名
![image.png](/img/bVcYRdl)

### iphone机下载证书之后，需要信任证书
- 前端项目

> > > 配置 publicPath(webpack)

```js
output.publicPath = '/music'
```

> > > 配置入口 html 文件的 meta 标签的 base 属性

```jsx
<meta base="/music" />
```

> > > 配置路由 basename 属性

```jsx
<HistoryRouter basename="/music"></HistoryRouter>
```

- 服务器

> > > 配置 nginx.conf 文件

```shell
    listen       80; # 监听的端口
        server_name  localhost; # 地址

    location / {
      root  /app/docs/; # 本地资源前缀，从根路径写
      index  index.html ; # 默认访问的地址
    }

    location /music {
    alias  /app/ts-music/build/; # 路径别名 替换uri
        #try_files $uri $uri/ /music/index.html;
    index  index.html ; # 默认访问的地址
    }
```

- <https://www.jianshu.com/p/276d59cbc529>

- <https://gitee.com/leijianggitee/docs/raw/master/_media/nginx.jpeg>

### entry point

#### 单入口语法

用法: `entry: string|Array<string>`

```js
// 单个入口的简写
const config = {
  entry: './src/index.js'
};

// 单个入口
const config = {
  entyr: {
    app: './src/index.js'
  }
};

module.exports = config;
```

#### 对象语法

用法: `entry: {[entryChunkName: string]: string|Array<string>}`

```js
const config = {
  enrty: {
    home: 'src/home/index.js',
    about: 'src/about/index.js',
    vendors: ['react', 'react-dom']
  }
}
```

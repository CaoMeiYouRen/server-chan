# node-server-chan

### by 草梅友仁

Server酱的node.js端模块。为了使用方便专门抽离出一个模块。使用教程见https://sc.ftqq.com/3.version

## 安装

```bash
npm i node-server-chan -S
```

## 使用

```ts
import { ServerChan } from 'node-server-chan'
//SCKEY请前往 https://sc.ftqq.com 领取
ServerChan.init('SCKEY')
//标题必填，内容选填
ServerChan.noticeMaster('text')
ServerChan.noticeMaster('text', 'desp')
```


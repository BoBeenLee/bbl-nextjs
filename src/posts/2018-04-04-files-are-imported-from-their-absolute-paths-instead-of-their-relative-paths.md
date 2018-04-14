---
published: false
title: 리액트 require/import 상대경로 대신 절대경로 설정하기
date: '2018-04-04T16:51:44+09:00'
tags:
  - javascript
---
### 상대경로 설정 시 문제점
```javascript
ㅑ../../../../utils/my-utils
```
와 같이 폴더 구조가 깊어질 경우 

* Babel
* Webpack or Fusebox

Files are imported from their absolute paths instead of their relative paths to avoid repeating ../../../../ when requiring files.

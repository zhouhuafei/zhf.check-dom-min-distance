# 当前dom的中心点距离dom集合里哪个dom的中心点最近
```
const checkDomMinDistance = require('zhf.check-dom-min-distance');

const result = checkDomMinDistance(dom, NodeList);
```
* 返回值result是一个对象，对象上有两个属性：
    - dom：NodeList集合中，距离dom中心点最近的那个元素
    - distance：那个元素的中心点与dom的中心点之间的距离（绝对值）

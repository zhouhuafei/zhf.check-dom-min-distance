# 当前dom的中心点距离dom集合里哪个dom的中心点最近
```
const checkDomMinDistance = require('zhf.check-dom-min-distance');

const result = checkDomMinDistance(dom, NodeList);
```
* 返回值result是一个对象，对象上有四个属性：
    - dom：NodeList集合中，距离dom中心点最近的那个元素
    - distance：那个元素的中心点与dom的中心点之间的距离（绝对值）
    - domPositionX：dom的中心点在水平方向相对于最近的那个元素的中心点的位置
    - domPositionY：dom的中心点在垂直方向相对于最近的那个元素的中心点的位置
* 最后两个属性，对应的值有：
    - 'overlay'：重叠
    - 'top'：垂直方向居上
    - 'right'：水平方向居右
    - 'bottom'：垂直方向居下
    - 'left'：水平方向居左边

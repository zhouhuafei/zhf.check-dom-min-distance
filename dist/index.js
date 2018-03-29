'use strict';

var offset = require('zhf.offset');
var getDomArray = require('zhf.get-dom-array');

// 当前dom的中心点距离dom集合里哪个dom的中心点最近
function checkDomMinDistance(element, elementList) {
    var dom = getDomArray(element)[0];
    var list = getDomArray(elementList);
    var domLeft = offset(dom).left;
    var domTop = offset(dom).top;
    var domWidth = dom.offsetWidth;
    var domHeight = dom.offsetHeight;
    var domCenterX = domLeft + domWidth / 2;
    var domCenterY = domTop + domHeight / 2;
    var domPositionX = 'overlay';
    var domPositionY = 'overlay';
    var minDistanceDom = null;
    var minDistance = null;
    var minCenterX = null;
    var minCenterY = null;
    // 找最近的dom
    list.forEach(function (item) {
        if (dom !== item) {
            // 排除自身
            var itemLeft = offset(item).left;
            var itemTop = offset(item).top;
            var itemWidth = item.offsetWidth;
            var itemHeight = item.offsetHeight;
            var itemCenterX = itemLeft + itemWidth / 2;
            var itemCenterY = itemTop + itemHeight / 2;
            var x = Math.abs(domCenterX - itemCenterX);
            var y = Math.abs(domCenterY - itemCenterY);
            var nowMinDistance = Math.sqrt(x * x + y * y);
            if (minDistance === null) {
                minDistance = nowMinDistance;
                minDistanceDom = item;
                minCenterX = itemCenterX;
                minCenterY = itemCenterY;
            } else {
                if (minDistance > nowMinDistance) {
                    minDistance = nowMinDistance;
                    minDistanceDom = item;
                    minCenterX = itemCenterX;
                    minCenterY = itemCenterY;
                }
            }
        }
    });
    // 计算位置
    if (domCenterX - minCenterX > 0) {
        domPositionX = 'right';
    } else if (domCenterX - minCenterX < 0) {
        domPositionX = 'left';
    }
    if (domCenterY - minCenterY > 0) {
        domPositionY = 'bottom';
    } else if (domCenterY - minCenterY < 0) {
        domPositionY = 'top';
    }
    // 返回结果
    return {
        dom: minDistanceDom,
        distance: minDistance,
        domPositionX: domPositionX,
        domPositionY: domPositionY
    };
}

module.exports = checkDomMinDistance;
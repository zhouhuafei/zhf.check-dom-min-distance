const offset = require('zhf.offset');
const getDomArray = require('zhf.get-dom-array');

// 当前dom的中心点距离dom集合里哪个dom的中心点最近
function checkDomMinDistance(element, elementList) {
    const dom = getDomArray(element)[0];
    const list = getDomArray(elementList);
    const domLeft = offset(dom).left;
    const domTop = offset(dom).top;
    const domWidth = dom.offsetWidth;
    const domHeight = dom.offsetHeight;
    const domCenterX = domLeft + domWidth / 2;
    const domCenterY = domTop + domHeight / 2;
    let minDistanceDom = null;
    let minDistance = null;
    let minCenterX = null;
    let minCenterY = null;
    list.forEach(function (item) {
        if (dom !== item) { // 排除自身
            const itemLeft = offset(item).left;
            const itemTop = offset(item).top;
            const itemWidth = item.offsetWidth;
            const itemHeight = item.offsetHeight;
            const itemCenterX = itemLeft + itemWidth / 2;
            const itemCenterY = itemTop + itemHeight / 2;
            const x = Math.abs(domCenterX - itemCenterX);
            const y = Math.abs(domCenterY - itemCenterY);
            const nowMinDistance = Math.sqrt(x * x + y * y);
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
    let domPositionX = 'overlay';
    let domPositionY = 'overlay';
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
    return {
        dom: minDistanceDom,
        distance: minDistance,
        domPositionX: domPositionX,
        domPositionY: domPositionY,
    };
}

module.exports = checkDomMinDistance;

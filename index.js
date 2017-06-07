// 查找DOM元素数组，类似于jQuery中的$
function $$(selector, context) {
    context = context || document;
    var elements = context.querySelectorAll(selector);
    // 将具有length属性的对象转成数组
    return Array.prototype.slice.call(elements);
}


/**
 * 测试元素的element.style对象上是否存在某属性
 * @param property {string}  需要测试的属性 注意使用驼峰命名法,如textShadow
 */
function testProperty(property){
    var root = document.documentElement;//<html>
    if(property in root.style){
        root.classList.add(property.toLowerCase());
        return true;
    }
    root.classList.add('no-' + property.toLowerCase());
    return false;
}


/**
 * 测试元素的某个具体属性值是否存在
 * @param classFlag {string} 要添加的样式
 * @param value {string} 要进行测试的某个具体属性值，比如linear-gradient(red,tan)
 * @param property {string} 要进行测试的某个具体属性值的属性名，比如backgroundImage,注意使用驼峰命名法
 */
function testValue(classFlag,value,property){
    var element = document.createElement('p');
    var root = document.documentElement;
    element.style[property] = value;
    if(element.style[property]){
        root.classList.add(classFlag);
    }
    root.classList.add('no-' + classFlag);
}
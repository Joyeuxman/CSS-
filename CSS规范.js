
/*
    1.浏览器前缀
    Firefox:-moz-  
    IE:-ms   
    Opera:-o-
    Safari、Chrome:-webkit-

    2.浏览器支持与版本回退
    //版本回退
    background:rgb(255,128,0);
    //浏览器支持
    background:-moz-linear-gradient(0deg,yellow,red);
    background:-o-linear-gradient(0deg,yellow,red);
    background:-ms-linear-
    background:-weblit-linear-gradient(0deg,yellow,red);
    background:linear-gradient(0deg,yellow,red);
    
    3.使用Modernizr工具给根元素添加辅助类
    在<body>加载之前需要引入该类库，该工具会给html元素在
    支持text-shadow的浏览器上添加textshadow类，不支持text-shadow的浏览器上添加no-textshadow类

    4.使用@supports来实现与Modernizr类似的功能
    详情请看http://www.w3cplus.com/css3/css3-supports.html

    5.CSS书写顺序
    a. 影响文档流的属性（比如：display, position, z-index,float, clear, visibility, table-layout等）
    b. 自身盒模型的属性（比如：width, height, padding, border, margin等）
    c. 排版相关属性（比如：font, line-height, text-align, text-indent, vertical-align等等）
    d. 装饰性属性（比如：color, background, opacity, cursor等）
    e. 生成内容的属性（比如：content, list-style, quotes等） 

    6.CSS的挑战
    DRY(Don't Repeat Yourself)、可维护、灵活性、轻量级、符合标准
*/
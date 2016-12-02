# 电梯导航组件

## 组件说明

`elevatorNav`,一款基于jQuery扩展封装的电梯导航组件。
[效果展示](http://www.zjresume.com/project/elevatorNav/demo.html)

## 浏览器支持

* 支持IE6+、Firefox、Opera 、Safari 、Chrome浏览器。

## 使用方法

### 使用步骤

1.引入`jquery.js`、`elevatorNav.js`和`elevatorNav.css`文件。   

2.在html文件中插入以下代码段。
* a标签中的href属性值需要用户设置，其值即为所需导航到的元素的id值。
* span标签中的值即为导航栏的内容，同样需要用户进行修改填写。
  ```html
  <div id="elevatorNav">
      <ol>
          <li class="current"><a href="#p1"></a><span>First</span></li>
          <li><a href="#p2"></a><span>Second</span></li>
          <li><a href="#p3"></a><span>Third</span></li>
          <li><a href="#p4"></a><span>Fourth</span></li>
          <li><a href="#p5"></a><span>Fifth</span></li>
          <li><a href="#p6"></a><span>Sixth</span></li>
      </ol>
  </div>
  ```
3.在javascript文件中插入以下代码。
  ```javascript
  $(document).ready(function(){
      $('#elevatorNav').elevatorNav();
  }); 
  ```
4.没了，就以上就完成了。

5.相关参数说明。
  ```javascript
  //用户在调用elevatorNav()方法时可传入以下参数
   $('#elevatorNav').elevatorNav({
      Left:50, //导航组件距离浏览器左侧的距离，单位px，默认50px
      Top:100, //导航组件距离浏览器顶部的距离，单位px，默认100px
      dotSize:6, //导航点的大小，单位px，默认6px
      borderWeight:1, //导航点边框的粗细，单位px，默认1px
      borderColor:'#000', //导航点边框的颜色，单位px，默认#000
      fontFamily:'Microsoft YaHei', //导航栏内容文字字体，默认微软雅黑
      fontSize:14, //导航栏内容文字字体尺寸，单位px,默认14px
   }); 
  ```

### 案例代码

```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>elevatorNavDemo</title>
      <link rel="stylesheet" href="elevatorNav.css">
      <style>
        body{
          height: 2800px;
        }
        p {
          font-size: 100px;
          line-height: 100%;
          font-weight:bold;
          color:white;
          text-align: center;
        }
        #p1{
          width: 100%;
          height: 400px;
          background-color: skyblue;
        }
        #p2{
          width: 100%;
          height: 400px;
          background-color: yellowgreen;
        }
        #p3{
          width: 100%;
          height: 400px;
          background-color: pink;
        }
        #p4{
          width: 100%;
          height: 200px;
          background-color: skyblue;
        }
        #p5{
          width: 100%;
          height: 450px;
          background-color: yellowgreen;
        }
        #p6{
          width: 100%;
          height: 550px;
          background-color: pink;
        }
        #p7{
          width: 100%;
          height: 400px;
          background-color: #ccc;
        }
      </style>
  </head>
  <body>
      <p id="p1">1</p>
      <p id="p2">2</p>
      <p id="p3">3</p>
      <p id="p4">4</p>
      <p id="p5">5</p>
      <p id="p6">6</p>
      <p id="p7">7</p>
      <div id="elevatorNav">
        <ol>
          <li class="current"><a href="#p1"></a><span>First</span></li>
          <li><a href="#p2"></a><span>Second</span></li>
          <li><a href="#p3"></a><span>Third</span></li>
          <li><a href="#p4"></a><span>Fourth</span></li>
          <li><a href="#p5"></a><span>Fifth</span></li>
          <li><a href="#p6"></a><span>Sixth</span></li>
          <li><a href="#p7"></a><span>Seventh</span></li>
        </ol>
      </div>
  </body>
  </html>
  <script src="http://libs.baidu.com/jquery/1.9.1/jquery.min.js"></script>
  <script src="bower_components/jquery/dist/jquery.min.js"></script>
  <script src="elevatorNav.js"></script>
  <script>
      $(document).ready(function(){
          $('#elevatorNav').elevatorNav();
      }); 
  </script>
```

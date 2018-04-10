//动态改变字体大小
//获取屏幕宽度（viewport）
let htmlWidth  = document.documentElement.clientWidth || document.body.clientWidth;

//获取html的Dom

let htmlDom = document.getElementsByTagName('html')[0];

//设置html的字体大小

htmlDom.style.fontSize = htmlWidth / 10 + 'px';
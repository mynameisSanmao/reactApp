<!--
 * @Author: Sanmao
 * @Date: 2020-10-25 17:26:20
 * @LastEditors: Sanmao
 * @LastEditTime: 2020-10-28 19:50:39
 * @Descripttion: 
-->
# antd按需引入
1.按需引入在package.json中的babel加上"plugins": [["import",{"libraryName": "antd","style": "css"}]]   
2.按需加载报错时，把package.json中的less版本改为3.0以下，如：2.7.3，在执行yarn install，最后重启项目即可   
3.更换主题https://www.cnblogs.com/taohuaya/p/12531731.html  
4.vsCode 格式化react代码，保存自动格式化:   
    1. 选择语言模式为JavaScript React;    
    2. 在settings.json 中加上"emmet.includeLanguages": {"javascript": "javascriptreact"};

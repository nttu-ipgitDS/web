# 國立台東大學綠資學程系學會的網站

本專案是由國立台東大學綠資學程系學會學生自發性創立<br>
目的是跳脫Google協作平台框架<br>
發揮創意來建立、修改屬於系學會的網頁<br><br>
*本專案尚在進行中*

## 新增公告方法

找到*js*資料夾進入*news.js*<br>
更改這裡即可對公告新增、修改或刪除<br>

    const news1 = "./news/news1.html"; const text1 = ""; const date1 = "";
    ...

<br>同時也須修改首頁之公告<br>
    
    //首頁
    const indexnews1 = '<a href="./web/news.html" target="_blank" style="font-size: 20px;color:black; text-decoration:none;"></a><br><p style="color: #FFCB3C;"></p><br>';
    ...

其他詳細請看程式碼註解

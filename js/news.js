//變數
const news1 = "./news/news1.html"; const text1 = "系學會新網站成立了!"; const date1 = "2021/07/31";
const news2 = "./news/news2.html"; const text2 = ""; const date2 = "";
const news3 = "./news/news3.html"; const text3 = ""; const date3 = "";
const news4 = "./news/news4.html"; const text4 = ""; const date4 = "";
const news5 = "./news/news5.html"; const text5 = ""; const date5 = "";
const news6 = "./news/news6.html"; const text6 = ""; const date6 = "";
const news7 = "./news/news7.html"; const text7 = ""; const date7 = "";
const news8 = "./news/news8.html"; const text8 = ""; const date8 = "";
const news9 = "./news/news9.html"; const text9 = ""; const date9 = "";
const news10 = "./news/news10.html"; const text10 = ""; const date10 = "";
//首頁
const indexnews1 = '<a href="./web/news.html" target="_blank" style="font-size: 20px;color:black; text-decoration:none;">系學會新網站成立了!</a><br><p style="color: #FFCB3C;">2021/7/31</p><br>';
const indexnews2 = '<a href="./web/news.html" target="_blank" style="font-size: 20px;color:black; text-decoration:none;"></a><br><p style="color: #FFCB3C;"></p><br>';
const indexnews3 = '<a href="./web/news.html" target="_blank" style="font-size: 20px;color:black; text-decoration:none;"></a><br><p style="color: #FFCB3C;"></p><br>';
const indexnews4 = '<a href="./web/news.html" target="_blank" style="font-size: 20px;color:black; text-decoration:none;"></a><br><p style="color: #FFCB3C;"></p><br>';
const indexnews5 = '<a href="./web/news.html" target="_blank" style="font-size: 20px;color:black; text-decoration:none;"></a><br><p style="color: #FFCB3C;"></p><br>';
//news頁面
const newsnews1 = '<a href="' + news1 + '" target="_blank" style="font-size: 20px;color:black; text-decoration:none;">' + text1 + '</a><br><p style="color: #FFCB3C;">' + date1 + '</p><br>';
const newsnews2 = '<a href="' + news2 + '" target="_blank" style="font-size: 20px;color:black; text-decoration:none;">' + text2 + '</a><br><p style="color: #FFCB3C;">' + date2 + '</p><br>';
const newsnews3 = '<a href="' + news3 + '" target="_blank" style="font-size: 20px;color:black; text-decoration:none;">' + text3 + '</a><br><p style="color: #FFCB3C;">' + date3 + '</p><br>';
const newsnews4 = '<a href="' + news4 + '" target="_blank" style="font-size: 20px;color:black; text-decoration:none;">' + text4 + '</a><br><p style="color: #FFCB3C;">' + date4 + '</p><br>';
const newsnews5 = '<a href="' + news5 + '" target="_blank" style="font-size: 20px;color:black; text-decoration:none;">' + text5 + '</a><br><p style="color: #FFCB3C;">' + date5 + '</p><br>';
const newsnews6 = '<a href="' + news6 + '" target="_blank" style="font-size: 20px;color:black; text-decoration:none;">' + text6 + '</a><br><p style="color: #FFCB3C;">' + date6 + '</p><br>';
const newsnews7 = '<a href="' + news7 + '" target="_blank" style="font-size: 20px;color:black; text-decoration:none;">' + text7 + '</a><br><p style="color: #FFCB3C;">' + date7 + '</p><br>';
const newsnews8 = '<a href="' + news8 + '" target="_blank" style="font-size: 20px;color:black; text-decoration:none;">' + text8 + '</a><br><p style="color: #FFCB3C;">' + date8 + '</p><br>';
const newsnews9 = '<a href="' + news9 + '" target="_blank" style="font-size: 20px;color:black; text-decoration:none;">' + text9 + '</a><br><p style="color: #FFCB3C;">' + date9 + '</p><br>';
const newsnews10 = '<a href="' + news10 + '" target="_blank" style="font-size: 20px;color:black; text-decoration:none;">' + text10 + '</a><br><p style="color: #FFCB3C;">' + date10 + '</p><br>';

//變數宣告
const indexshow = document.getElementById("indexshow");

//輸出變數到首頁
try{
    indexshow.innerHTML = indexnews1 + indexnews2 + indexnews3 + indexnews4 + indexnews5;
}catch(e){
    console.log("不要理我，想知道為什麼會出現這個？")
    console.log("請自己研究")
}

function news(num){
    if(num == 1){
        //news變數
        const shownews = document.getElementById("shownews");
        shownews.innerHTML = newsnews1 + newsnews2 + newsnews3 + newsnews4 + newsnews5 + newsnews6 + newsnews7 + newsnews8 + newsnews9 + newsnews10;
    }else if(num == 2){
        //news變數
        const shownews = document.getElementById("shownews");
        shownews.innerHTML = '<a href="./web/news.html" target="_blank" style="font-size: 20px;color:black; text-decoration:none;">hello</a><br><p style="color: #FFCB3C;">2021/7/31</p><br>';
    }else if(num == 3){
        //news變數
        const shownews = document.getElementById("shownews");
        shownews.innerHTML = '<a href="./web/news.html" target="_blank" style="font-size: 20px;color:black; text-decoration:none;">hello</a><br><p style="color: #FFCB3C;">2021/7/31</p><br>';
    };
};
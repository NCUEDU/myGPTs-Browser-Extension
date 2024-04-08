// 選擇頁面標題元素
var pageTitles = document.querySelectorAll('div.fs-hint > div:nth-child(4)');
// 遍歷 NodeList
pageTitles.forEach(function (pageTitle) {
    var content = pageTitle.textContent; // 取出內容

    // 正則表達式來匹配所需內容
    var regex = /[A-Za-z]{2}\d{4}/;
    var match = content.match(regex);
    var result = match ? match[0] : null; // 如果匹配成功，則取匹配的結果

    // 創建超連結元素
    var link = document.createElement('a');
    link.textContent = ' myGPTs';
    link.href = 'https://ncuedu.tw/browser/extension/goto/mygpts/' + result;

    // // 將超連結插入到標題元素後面
    // pageTitle.insertAdjacentElement('afterend', link);
    // 創建一個新的 <div> 元素
    var newDiv = document.createElement('div');
    newDiv.textContent = content; // 將原始內容設置為新 <div> 的內容

    // 在新 <div> 元素中插入超連結
    newDiv.appendChild(link);

    // 將新 <div> 元素替換掉舊的 <div> 元素
    pageTitle.parentNode.replaceChild(newDiv, pageTitle);
});

// 選擇頁面標題元素
var pageTitles = document.querySelectorAll('span.fs-banner-extInfo');
// 遍歷 NodeList
pageTitles.forEach(function (pageTitle) {
    var content = pageTitle.textContent; // 取出內容

    // 正則表達式來匹配所需內容
    var regex = /[A-Za-z]{2}\d{4}/;
    var match = content.match(regex);
    var result = match ? match[0] : null; // 如果匹配成功，則取匹配的結果

    // 創建超連結元素
    var link = document.createElement('a');
    link.textContent = ' myGPTs';
    link.href = 'https://ncuedu.tw/browser/extension/goto/mygpts/' + result;

    // 將超連結插入到標題元素後面
    pageTitle.insertAdjacentElement('afterend', link);
});
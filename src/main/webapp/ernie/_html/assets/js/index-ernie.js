// 載入 header.html
fetch('header.html')  // 這行會發送一個 GET 請求，請求 `header.html` 這個檔案
  .then(response => response.text())  // 當響應返回時，將其轉換為文字格式（即 HTML 內容）
  .then(data => {  // 當轉換完成後，這個 `data` 就是 `header.html` 的內容
    document.getElementById('header').innerHTML = data;  // 將獲得的 HTML 內容插入到 ID 為 'header' 的元素中
  })
  .catch(error => console.error('Error loading header:', error));  // 如果過程中有任何錯誤，這裡會捕捉到錯誤並打印出錯誤訊息

// 載入 footer.html
fetch('footer.html')  // 這行會發送一個 GET 請求，請求 `footer.html` 這個檔案
  .then(response => response.text())  // 當響應返回時，將其轉換為文字格式（即 HTML 內容）
  .then(data => {  // 當轉換完成後，這個 `data` 就是 `footer.html` 的內容
    document.getElementById('footer').innerHTML = data;  // 將獲得的 HTML 內容插入到 ID 為 'footer' 的元素中
  })
  .catch(error => console.error('Error loading footer:', error));  // 如果過程中有任何錯誤，這裡會捕捉到錯誤並打印出錯誤訊息

// 從網址獲取QR ID（例如 https://username.github.io/qr-redirect/?id=123）
const urlParams = new URLSearchParams(window.location.search);
const qrId = urlParams.get('id');

// 加載 data.json 並跳轉
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const targetUrl = data[qrId] || 'https://default-fallback-url.com';
    
    // 記錄掃描（可選）
    console.log(`QR ${qrId} 被掃描，跳轉至: ${targetUrl}`);
    if (typeof gtag === 'function') {
      gtag('event', 'qr_scan', { 'qr_id': qrId });
    }

    // 實際跳轉
    window.location.href = targetUrl;
  });

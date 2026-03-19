// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'C2MHPYYTyTkNwsHMeCwApl8f4UbjqdfPUa/uye3IObIxnDzbDXTYUOJtIgg9h9OHzDRIbN682YeqJD0mqF599+3zmXiWWPH7OiCKNosQviREo207xGyHIi4NrzZitF31x8BL8Vk/Adz3vz0xNBbUlONNukUMYNvDftxbiRqBsGmCtw5+KlfORn6xZGmj3xbPkHOPwmdG0fysKPYahQq7yu8z0HEs41W3tpnUleC3ZVmucoiFEfLr9QtOcbmKuoFj/LEcJ94s593vG+CPKhAznLmGMqqM5ibnaRbdTnQhAsh8VZuWSPEPi6zbMfsmoZhnbql0PtLLXHBghQyxCg158WhebkJ9SHiihsp0h3UWDcqbjOvmYm8LrQa/e3k9RKK9n9Eo7dHYeRuP2FM+qJ3ib/t0n86/GgOK6yypNvHQyrnbuS8vNmPzoDEE6FbFpADZMmXGEWgxEmFcPRCLqNYEYlUJVT+/XaWs6L/SWL8pNid/XLy/KHxASAD0PytIsEw+C4B+pBfmC0Y6G7lAHY4E3+r/6Zcrke+36E9LnX+R5/u4AmivKwnhPq8Bdx+jTdMIaayg2a2+X5DAVqdKwkCOIa+/0cFcctQTpDBtX4yONPHG4xEKwV/URIJryV29HXZdvZ203hlRR5JNjREYMTeNaMcCCUqg32MkrdcUWtnECqf06Bv87tBGmwMBjd+ddyj+EqOwrWv2tM5jBnA+i1w0k2LTQtt9NW8266ju7Gcyie/Du0GmEkhtOAg0bQKQtmRTVCB67h+dte9yJ7LU5uSnAlBW2+oIW2gfC8b6VbVVcnp484+WYHk2CKlXA6mNuX2AorpHLfR+S8xwk5MR/W0E9nk6jL4F6gh/I9qDTllMYc1VF/dGOoyQ/LQHbVrZDukPodgzFNZ0uH0GluG/R31illQbC0qDpP+NSAo/SQcjfbZkKcJyyHLCEWZlPsCnEosGoYnhQqp0LIylXam+O1H365LYr0OMnk+cs4fsvQR4HoQ1eAa4yhJRT32KN4Jf';
  const _INTEGRITY_HASH = '41bbc8126ef1fc65b73836b6e978050fb14453cefb524e2ce8c6a107712ed547';
  let   _src;

  const _PWDS  = ["change_me_to_a_strong_password"];
  const _ITERS = 600000;

  // Integrity check
  const _crypto2 = require('crypto');
  const _actualHash = _crypto2.createHash('sha256').update(_b64).digest('hex');
  if (_actualHash !== _INTEGRITY_HASH) {
    throw new Error('[Obfuscationary] Tamper detected! File integrity check failed.');
  }

  // Multi-layer decrypt (reverse order)
  let _data = Buffer.from(_b64, 'base64');
  for (let _i = _PWDS.length - 1; _i >= 0; _i--) {
    const _pw   = _PWDS[_i];
    const _salt = _data.slice(0, 16);
    const _iv2  = _data.slice(16, 28);
    const _ct2  = _data.slice(28);
    const _ctag2 = _ct2.slice(_ct2.length - 16);
    const _cdat2 = _ct2.slice(0, _ct2.length - 16);
    const _key2  = _crypto2.pbkdf2Sync(_pw, _salt, _ITERS, 32, 'sha256');
    const _dec2  = _crypto2.createDecipheriv('aes-256-gcm', _key2, _iv2);
    _dec2.setAuthTag(_ctag2);
    _data = Buffer.concat([_dec2.update(_cdat2), _dec2.final()]);
  }
  _src = _data.toString('utf8');

  const _Fn = Object.getPrototypeOf(async function(){}).constructor;
  await _Fn('module', 'exports', 'require', '__filename', '__dirname', _src)(
    module, exports, require, __filename, __dirname
  );
})();

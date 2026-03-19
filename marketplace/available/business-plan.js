// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'i30+kySATDaBgnnr/WN7IEU7CFBjwUcR/j+6fSgf5TxkXgvPgiYFwXf7xCAwSC4Z8Ei/wyjIcLoUiDoURh0KZmYazvkgy5JW+jvtvCgOr/kZFNtq78xn8PVVI2TqUtXF4BfMq1kB6/75VLw5hn5r7YkxTZ3+w4LedW+nc1BXwBjbtWl2eJpzOOIkuJ90kmSXXFyBMugsj13IQNM+b++dANGcxIMg99c8RcuwfAE7KDs43yB25dWr+MiTp371YTceHH1AGDUaOElHHaoZszr8jdV0TeZ+lIUx4BCNeL3frsupjlg7j5dQiTHIoOt6eiAeUTBFqfHdVAh/3ahJ/Yl61EpnfcacJ99lfh3iodSX00tVpED8lvTuYbzkjEsDsp4aYO/eJiuXhXVzrRGANEcJsNpAHgVrUovAce0+7R+7aeKIJ5tHggJkGFJGJYakcMhYlD9eLB8cozOacrrpXhNw+nBNRVZiBca7zynEb/iff4KIDt1/MV4/7VMkDxLIyEzy7nG0RUkOvLmPIpd/vQv3mBqFuUoI5PmQpN5Y7DfjgbtTS7YHlt+Bsks5MDGcIL1jv8cSzksUVPpQ3AqIBIdTzGz8xcXxxwZ2Zq1mq0QbHaGlf3kRlIxShpdR/Yr9EYbVU7aVMqiqR3cxqduhIs3OFskoiO2vrHRU+CbYB1EsAasuZ0qQ7zyTpkrZD80fgTRrkADOWiPNimLEw+fXgHx43h6bku5DFFlzF/NYhQIOm876tV+g2VQHNC9K8AViK1PyC3SccWH+gkJ3iRkcwVm8XBKxh5JLhIZvg0cfNPsordtO9+kTjPQJ8FYU/4WP1kjY++6KYHDoej9dqT0b+6lzOzcdMA05dhDG+Gen+F1YVmdL1TsWY037z11u9Zqb70TMnZg8hU71fzS+r9r2sEWr3mJkxpljSO3C/0TfN6TCLJclQARWwR0rFx0lWtMoHYwDmtWHAjWEDHIoIY6aTRzS6o1Bw81LWg5kdQzp4aHqFdpqiuPJXKDIVH7LUcmQACxtPAm4orV5XL3p7sJMf9dGaj5w107h78GF+9snCOaB9I/AcH8FE5H4a6QHMwq9TxW7HHt1bhzQZXeYgW7qUTwdTEy7NdWYyfwpDhsMsPV9CCWw6C37y7f7lEhv7HmssJX+cSz+oP5HJry5D4miSCp9pNCKQcJetj1UN8ch39ibT3OONXo1eu0HSbgzRirYsYpJBiL+qtphm/sqq5viAoBITt0pQspiOucdB+rH+hS0mqsyoLZJ6Exj6pe89gH663F+k3IQPsLqaYIR51L5DBN7yq2VzgYas4iUVJuLgC07H60ImDeRhMHDRmz1YsTYPHB79RrL20sIOF7mpWQRpWTJ59qlFGCosdUeZeNo8pAbO/WWVvHlUl/IWBoJCH6t6/sCkuWyN/qoY2O4uB6ADpRckJ47akh8ntqvzMDbsYSeNv7ix4lAM6ZmddGFbPugRr6LHTxj3spZb43Y/3/EN3sgXAdoy68DaR0uNhw6uvOt5/42bp0qNv6u+E0pQJ+WfcfRwK/oCrsgcyMEVOdo8RXYMmXiyhuKZKPpYVmrwkmowHpo3QVJ+EvKPrdLbI9rkijsR+QeRS7tKjbEbLWNi/teiDEou5/FOHClZH5fUGW/Y6DpCXavCY64gAfLSQ41gnxTCTM76CVDKHFWZwbjfIb7F8n/8A3MVJPzJrcCG1xrCtnyGEVnVbIRek6yo28uuFPzYynTghj3J6MI4EL6fPeGBi/SnZyloW8OfZn6TetNXhDgsT6F1eHBZB9DZViAleo=';
  const _INTEGRITY_HASH = '3a73185ae8baeeddd26d297562aa5ff42d35ff2e5ad2f7901691c7b7b20fe6ba';
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

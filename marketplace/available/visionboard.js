// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'MX2d6muPB874xqJDKJl6lLoZryMO30GaxGXwdGR/kVwXy4S1kLp/rYODNTQwkOh2tAayA/rnqXYBX6WKaJpvEKaOAkLS6UGJZSEmASY/D8Nokw02Irpun5sBIXb8s5aQEfJWDXb6HXQ058jEJ0jo060RwDgNZVGdVl18PFMfX9d69SzSSV+/j2yNJgc5sR/CbTDgDr73mO+bKkqgfjp57g7NjEyGuG1FotV4z37X/QRTULTAHn37k5qayZBY1Y+UF+qJlPt6Q+Oyxd7b7ehD25t1qlxEuFTEDNdLPt5yKfz2TYvx+XE9LZ5XIGfx15pGbKH0IT7/59L0m9m1dYB/DYZ/zaptQ7SA8n0om4cBexDcMiMpm/PsLRP4d7guEkpwLLMMg+RJdZAzGmCskjyUGHamQ6rXPJPFasFS+EpgGORnNyly/LHJRbFQQsmDzVIkKGznVQ0kSwqrTB54T25/scUPp5Qb12VRqfLHcJ9rlbtwU5kO7mAAyXjilr6w9pENN2jE932Ab+y8/pCW3JcVbWTcS09iW4wrBwFAvDHxmZIWhtxvFg4QG59tPHVIFJR+8RhmnolugMDzXSdWkyHdSJggIZZev8rA/zsrkTAD3E3EyTQNSckdYBRQvODXQ2hxygjydXN6Enw5WrPF+9iuhNO4bUxQ430WUJRZbCQ4ZAen62OESUCgnWqe+9cwxujefVSmQr6IQQ0LrGNHw8UywSJ99agS5B4xtLyDAsU+PSxbShRL2WBVlNzTvSzkYNZ19a9Nf7atjkq4pqW90yJ69+k3Pl8HpujHU+KNmZADFE5WSByJAUG48vC8UjTUAF3+jAPlQ/ibIiEvp+AVmCMtYD6r3HGzgnWAo28z1PJZGT3rfeLduMuuThpGERBGKfHN4rI/xMIspyGy+/mDdZkDNw1UHHRoX6DX+WZoaaxNapEMBuBm5FjWFSLVOhV5IG5R5919kwN3Tp5/vSTOyRhlSXP370XoeitEhiRpEJx+jDgWCkUi+D9M7k79IQmI0FbgT0XuYQI6Se57GB92AoJBFS5SMvz7yzNm1z4M3VQtju5Lpk7D3c82IfzfG8tpwT4KHbokDibcycj4UeKWaXD0bGJxp3TbTAqvun7uK0mnkCsRjgZeh6FsfhtHjBQwVSrX5yyEgPehKrJbRjAvr4xjC/N62MLbCvvHj6WDhLncrCRtwivCscxpe/Vr03w1kllCTGNU';
  const _INTEGRITY_HASH = '83b0f31eea72a57f673f554b01b81b6b62b2de54d138b03997abbe7f6ecea629';
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

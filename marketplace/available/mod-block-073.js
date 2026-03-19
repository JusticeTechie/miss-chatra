// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'MHibPzN7On7FQ23QYYlA3R57+cTsQUplut9FLhb/3OfKIy+6Z5tqu+vd1UzIKlGPDCwLSRuy2hfBWZoC0+wXqgTq5789K1Vcc6yhKcCDl2Yu21PbaTvmslA0Ebw2q8hPsPeQGSumBkvVsXsSbDVoqL/g+WEoQCpXdto1hJ7JjckBPFTnpFe3B9XcDJVx7plN2vTaDGM0z9N7QPPEeN5pvSGZHLGxC6PNMEgptrUNIDl1U6yuTydnekFBDtoN3M9srmOC/9oujcvDvEcw4ynwwUL5fKzqCZdM6ngSY6AnLxMurBqOpseE8P2Qo/5B1d+m5O52Tb0s+f69tCc6Kx1P+QMzcbI7qRlqTg/jBL6tvxuxghruOgu6orCSdd2hEhhWDnu73ckD6eHa3pG9IsJatRXJG3gMmr9ARiupG3BIsAsJ2GHX2Af/1l3aeJB9An9ij3A395/OuhzGAa2s5Pz9EACGxV7LAzt72lF5C5r4S/KRZq6lb+vym/DrkWrH+t/4fGWi42G4Fr+O+c/J8wp5Fb1UBorab3Ec56Jf02knJV0lbZwFhgpukcR+su5VVtM8MLSThQ1cBYGpRgSlUL12XwvihAz9R81ordn2t7UoyQDc3LtG2pI1O/CgTeMmf3+GasV1UkMHLSaB8zcbL3OYjWafJkvzhXlcuzm93jp0Og7IesAdMa3+l96TyNq9jSPZyJuuBvMd8kYpqUF76NHXaK2PlHBzytrZZoTBbF7nWjlYLESHSmJIwYUQKrt7ZtfOp47USYnLFKkcfkFw/XKqmns2+GScLNMDXi2qdDJeSNIb2Wi4SyqouFY0N9pRl+Qnc1GfBTHdcgvzXPs+0lqLUOxhCzE/xF11kzMlWEbvPm0zxAp8jUAqxgwj7l9RyxpdjMYUjlZa/lRL+Rb8EBsXnLgB4UchKZpGVM6FQhM8Lkh9A+7lJyq87xZHNTqp/8hPH8H03nnhVI0goncuGhPAMlIfuwueVGQZBJXdyB1guWLN0pd0ZG7V+epdmo5qs+ohPkc4f7qg1rgrRBRVO2xVGkba1m22AhaiZJMXhOcjqMAzGkHi5Twj7gCnNywr4hK6FUB38LzcH9BMiVIyRvg8LdMjlReNs6asPXf45fvtPu8vD9x/7kRcMGI8pPyOa5mQuYjG6vjWW82Cx+FHR0RK63th/ZcbnLxj3Fs06fPbVmsa+nARRLsIxjl+2WDAogELE3hLwAWEG0RmyoLzm67l3GkFU8oFia+PfFUTY1098jzt64DSr1mpuh0sO+QaHiRehMEp/859k2rb5Xk6lzxTGFKwG6VCYnGqVRpeJ6VGN17B5tGMkyYfZ3ShUiWrH2B790B657zMx2SPmG9vbmX8pcCgoHzCRSvFNQ==';
  const _INTEGRITY_HASH = 'fd6736768cbf2cd45430a98bf1f3f92d6992740393905e0bcb3593f46e9bc506';
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

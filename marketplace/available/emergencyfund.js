// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'QW4YXwIz94eHjjlOHoBn7NXyHpJDPmKvJExgJU2Wjan5MVBUm64CFuvoS10sP1ji041HQeU/PDqeFLOHkPaaReftpYIWRW3KhwVjYAqUtiL5ackIzueUoeyfIVohifSjSxY+Ug5LYt8PtoMFYZDaqYiQdgazev5AMxtkImZp20HoKH2rb9VwtASdMIUNoKjhabnhW80OVaQuSwv/1dLmq3wNXLjalw28vXTyxdQCcDo7FoNHdEDgNibCUfx9lQqoLwXqLlThelqcJR57DAhVlM8Q6a8Te40yFsey3RR4R44HYSbirlgUIIEvcRAFY5xxU5ybkWBeqqOO2zYxNd8zj5HmoG6UQj33NNoru53lNZsFHTpv41uTwcTDyWdJ9ZRowxMVbi13eBY9c72oKRVzn41UbmZ9wO7s4JntGrYeOFaY8hBE/Kyv+uq/D3CT4Oc1c21o0QkqjaI5KSRedtFM4DchIpiBl1KMJClq9QVDT9dXbLhw0d3b7E2QjFEcgm7h/HRq3nDX9RwZPjOHoKakjY3TO//2ZIav3bvpG2E73vJ5v76S5Y59pPFg0FCx3yad/9gx/ouud+/C5QIrCd1MBaqq/RPHDsLjANspzGlA7Q7sIhCyNh3zYhdezItI69nDV9WFtTbS91rNuXivWcOZf+BFqVw5iphvjcb+h46GXHDUe4IQ5u0Gy6foDfBWsUaKuCQ1fAhIekMOF3O3nYE0YG0Yw/EasRLeuJ10zT2KiysinaAqXeGu6WE/p6wFJc9umw5ugKrnI+BbgjvbtJ6kkZCeurWl2TOullrg3SoiRHrkXz4F2SgYMp/+84EOjaEMoxzLVZIzgEYAtVYlQK8uCQeZB5UhdXKPwK9q4l9RH9CDbf65yRsFqcHLFIeJYGxQd96UhaI2S3LH2Kf/Kxq0YZ+NLmrirdmAtGsNGBuDv9wdz+6XC1fCAv3vjjn3fGc8dVm+4QP1sg6F28yAjnG/JBBQBphA93Y6EHMmEzpb/I41A8w9Q/tIdkUHbXFA3AOt9m+DP/m71S4U+RgsZmTRleWxNTtExbzaRYglU+PlfmnEfgds9kQUjJ/23rvcMqP/hfrQdhH/miBpSx5lcn4wTJogmG0LXaEtEMFQan8w+guYjR0lfMXO82KKVyCX2cJPPTyXBvN8+xr/fRFr3melplF+SgpGbv326PTh47e4gbArUsV47TIe9qPNmbrkMtuthSXMWQ==';
  const _INTEGRITY_HASH = '6cbb7f159769b2d4ad82ee51436ba11edf7719e5c84a7f23b2c6f5a31c036ef0';
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

// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'i4hhxkWNIDuL97IhxWx8lAegDtAdTM82g94xjX1qh3/pu0ScxZiiefqCMuxs42cn/IUl9x7bngG2fVSv5oLIedzMc7gI1PsVYNhLdxHWOYGmiakGIP3o0ElshHln7vSleW0w89Tx10sL2KT6Gl/Z1ExpVqz5oujOseJo4RaYiNvcn13qqXKAO1o+OdcmnmvNJfcRYaqg4V7V2hk78RdqjxkTqM2y3cS+vn7SDv27+UAQt57bFb9XOHDWYW40jH+o4scznNURqlsXkttf04henSsqswCh85xIAjfhqHEwWqnbX5ett1l+FaUqgA6PxC+X3cj/YzxAWoSnXLtxtebGXxIjFJFKEPtK2gH1yGc0/73Pp6QKtfPKv5D1GUl11TIcEyP38LmS5ZalEjiAFPnOCpgTl1j02LjLwmRSUm6zvLo8eDBmx9OQ9qMKPRjkkbnXoteffE4KIUlTuFEvP1w8bZBdvmHlmsddVPF52YCAvLskybOIsvbdiK9eMBbEMTjx8mOHtfcmxptBGXU4R9MHgfzsCN1WySIN4Yi2TMLIY01rDEzLjCizLcGRPvPPav0AledxZNQAPnNc/EtxFnwGLQEYXHKvnlV0H/Ja6yNLF4+7QlpkGQv8jQrikSPBJMHLXyzJbrmgSt8aCMmBptH7FRKNaQMF1lpiiQ+Xyfpio4d/SsE1aJrkOYk29f8R0qbPHqaKbmt1v+w4S1kFU8w7kn7fVBZZYUHFzlgo8/dSxTXFINdbxZb6IITxIm9ZJsISkuJamEa4ACxkUI+6R2YjRvZjm1cVSGBtGpFwq3v7/zYmFuX78zg6MYX7cBdHdQbBz52Ip4YSaqAT3CSBK3IOdAt3lyCktiTGdk5HHt13RNvzUP2ltWS0hMaRkukyr7so8PMkrJsHDwZ6MNoYemvF7zc/ZV7N/1vm3YOpqtvWrzhHdjJcSH3zpvuNSk1ZYmM5j0e/RBWts6AYKSFQg+s7OXSTScrIOf92Cb6MTDmGFXe7Ym418XM1gkj3hSNHMmOp/PhlJ2UPdKpmYg0A8jaadPjmjp5ril99RtW/HI77Byo+Y59xMPsY9YAyMKfMikZP17L3kIucljZxlJtA+Fl7l35RwbM2vO1kqN/nWBm8S3wfzTBLvfEu4D2+8XzoPC2w3mxeQaDnwxdeeMKRSKSr6dYXsypXqqwjQYv+uqSQVvw6hkFIi8pMqoLN4TMRyxD4Jv6vpxYK0b92CbJjuk51MhSWaGGlMLzsF/KVhoG3NDKI49uaZL2tPmtwtrFZDAzhZu2kyYfn+A7C82Ed8F7PQZrsYiOLfHM+S/PiWDw6dGfuD2BDQjoEBH2NT/W67OCzJn7kOVoGPev24gk1v+C22X/QPMu6yNyg66BUMuDCZ3mGwpanKR9VyQ==';
  const _INTEGRITY_HASH = 'd3f7b24cd3ad7ebbf0bcd50c19da00ec5545c37a203fb23ab637a27d221953b3';
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

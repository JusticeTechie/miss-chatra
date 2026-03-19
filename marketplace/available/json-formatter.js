// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'hut5chEynoywGyNwfirBuB/xYf6G8p44uol5QNN8A0DJeaCyYrgMJHgJicu11j2sZ6nXD1M9mSwtgP9aSgQnCKSNszjqGnvQdtR0pb0TVtA6/+oBwrZPdI9uvdYNhKDZRiVPqv8Q8ZBc7tzlP6MO/ngoQyifJFuu9RsbqfUblJpygd9vpJb396b1BB//f6Pzqecn/5HGXBbjjxSz8fVY+oz7qDETKAT01IS3FXr0c9GiFFwkx7iEBvpwRn8PynAESj/JiYQacKeW2NO8AmSdUqYGB3wrLaq0zOsiygdvXB5nQvbERbQGnkw93+n/gE3OMuXMjfi0gaTk4LotDAA9+J7cN8vis1J0kOLnUTQKdqt0gLz+lMtiD6g9TqIaL9b63XM70cqCk8PGx73ArcXU7W9TSDlU77shdLORsx1LVYT8/EjMx0EOtOjdLbJMYbOHPFK2wFaqtU2tgGl/buSUiVX8vNo2k1ooET5a9xSllm8bJ/TmJzeadnmtsDnMftEgvs+sl/KlTxA/Egsyi8om/L3KMvWP4a0pSaNoH3wLx9ar6RUvEfgCfLjwsJjGAl0I5xMCZvg/YtPylj3nKMJAgN/UhLIt9AZdncf3r97XYRDmikvPdukc0Wd+7P0Rr747V45sZqjcuO+7aj47G9aXOGamcyRM08S/1QKS+4cFlv3xKzcjWT+bgapVdUM/HHqB2AApSVGWcVCuXY9lFV4PG4p2Q086MntgPmcHmFxOviNzIqhLFjKI+XVksr5PYggYsyk7GT13uR/KrbPI9Q86XmJ50Gp6AdmqbmmiKp0WMKEgg/vUPODE3WSbybFXw2JB/vTdHmBTH80vukONW7t3ti0YMwtg+6DDSAj+vx1f7/NmuTBAQIBrCuZtkircg+d5qWC1/L1/M3C000dBPvfXPOfjwgT1aPy2JcOZdvYZJCVUiz9/ItSOjUM7X91IYL8ShXB5URJ8uLj1PXhip1/LhxDS4BdHJgP1RbCvS7ouuvpPKJbzQPnVD92F/DK1yfvedLMRqSjQK0bAgV37ytVXDaoSxJkk2nyQL4orVO8EHhaNhnFi5q5BuJY4IugGH0aQqhrCv4yfCFBepvPBiHCw/Qd2l1Ns8NGXVms6r/5QFxgDPkKZNaRJzMKO3KYchCvrYzO69U3Rfh+PSYMsgM3pZCZ0N1AhvadhVFj3BI7+VZvvQMkrK6QFZ0fGFSsJfqMjKJN+m7eJKGHnAoo0K1pGXQCynBWzBB/JHp8LSYVedBRNR/nPlCLHYmalL63Vs03KXa1Pn/ASHt00LC43aIWt8bcYJ1V/AgGuGUlPdtRzMiRQ3N0=';
  const _INTEGRITY_HASH = 'ffb7cf1283da0da38035b5c532629cf8a858b3b3a23753139f97843e0cad1e6a';
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

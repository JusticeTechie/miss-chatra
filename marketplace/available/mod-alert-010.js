// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'uCcFIOZ+tFg5wdjjWZwDLDx5boeo51eSBLk/kxUl7wP1uq4k5ahtKovbMFoWFhFDnLZM3ryHHLJYIIEid9KFZuuSg4yEuxI/IThGk1hbH6wDHKzISZfD7eS0yzDvzQaRWUM5wiuEGndq0vJAg5ctJ3IZMkmMOQd/zDAVX2bdfwVcq3gr76pp3TxClFHic+aqft/jMSZbcWYTM/cwpbYY3xxXtdcF6v2/PgbE2R7kNb1ZH77NnVFLkuDM1EihHxSO4d3oZsZ45hZjyyRrBkpsFEh8B8Tw+JRDdw3CqIknrUI2mrFmf4c0nN+xL4gDWWMwCu7fzj0uOA2MRK1wdgZxrsau/uXIJt3V3akBubI/ctKXk+UcbqzTE1agF2XlBpzHZcGGl0kDKrq6Kew3rSjXN/Dd2nl5EFodHepndAI88FBXRejAVErd41TvUPjjs/BysFUIXO6l1gCw3F12ld+BakQ2LlGyS9ukqP04E7xp2nxJ3vMv1LHnRGtJ1mipgAPSI5/Du/MnIQOXqw/0IOnEyxEbDkiba1W/4WQDbAG8M4bmGDw5/A/25JBH+44zOABUFC7zPIawpnGAzVwFnl0tVX4SxFNwIMyR9Ig3e8Ti6ZSPe5LSF+BvJlyAXOx7b7Vn5b4MA7asGP1UjwqCP9/zHnTfwdKcfhllCaZ9trdpjzue3tBJDEczsuswMDezNCFjpxETkA6hmfCnK9eqFXDcYpdB/986w60+LQZEupKe2ceDhXxScQ9VNoO8Vwwuqz9iXQqIoBfe4m7RI6UIuHglJHRj8RGE/AEaiuC1u8y/RELM+yRtvzmxsiZaGS8iiSjviy7AANlmXr/g04BisACOWh5yLzlsl5BU4acgGRiOTSfS/M+b1c7BUW0xFLAxUfRFbhde7BJLH5P9Y9cNctXgQ2VA7d91Wh0b3tQ7cg3IrlO3g+DGivBW5EBEcln9444XLcbLohuPE6NOcDx5/Svoy4TOFVAbOvOUAJX0ZmvmX86EABtzNoPMQhFgfji/hEgYrjIjHMZ7V/913q3ALjcAgr4pSChClv6XSmzSLmtnSrfJpgCMt5ErHKdKxQOlPK5G5Zd3aXFS2CZsYV0EcWFk/e/ZsVLvDDLQaJRGV/x7aB8qSnrNqB8O+9+0dCcM8O5WR1/LJKv30eG4O5JAoiYq9u2ZvU/m7G6H6sPhPpBDlh6UyUjiLF3m+c7Eq5afXWMWHjI1w3z/b07abJZXiAxSv08jNW8BnxU+H1gjUsrzaa1cvSvowczbCzQlBKObYMry4u2OItgm1DTaZYNGHdtA2PQ+bN1txE1tznnGqilr7RrmLAx+NlBQ2nukWu1lx7fFh+mfWpCK772sCM0qPS2dxPk8JyL1wuTRjQ==';
  const _INTEGRITY_HASH = 'a1bbe6dcbb76c3d8cc3a7b4365d3ff5d5c565796c86471e52d1e85387dcbb879';
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

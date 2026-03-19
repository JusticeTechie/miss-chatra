// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'OM8hW0Bx5Pzf3Mpy7590yw7H/ykXzwgQLAGce0dA0thm73DRVAIZrTv86iF05NOIHZ2AIMJXbeIIxzLvOZzP6h2fW0zAy8MXQm5r36GPFVmxkQYB5dlOKUstxDCL2/gghDMgg8fWgy68mbOpkFf5yE1P0iodPVYRRXukpX736CZmFNRi6hsUeidQPVnjQOx9Pop8oH3iD6sRvb4C4CWSydBHVht0ubsu/sFk6Nz58u10NeI4ypK0ju4usvLcNRsWVqnIV4+cGov7irAu8A9G/lu7Rv6Lbp1DVHZ8uT/9fYUA4WXvbPR3BezhP/tWwGEEkCMMb2d48b2dZDBOn5wWygkoQ4s1bmwlTOree6qkDO+bhc5lnccdtV4MRyhK7XwCLcRsd1glr0eGsqmRnieXCagjRSBqk13PkphPktAXGHoNud0DhFnuLw1ST6IZwJHrx7boJVq4/KVckd1CmZTfUVVuL37mvpqrsyy2cTVCJb+VvsdFILIVvspl3chz2ZRkKCxkSD59qc9jXCAsx1DJMykblFf6utec/byCRPdChEv2fVusmnBC1jX/FXX+ARY7c62zJ9hfXFlvKsYX/QM9vAzAohBNQxcBpP/gqAMfN6w2hx1/vUkJva8gssLBxCsSeY3R9j25owZ+dDlLrp0JwZEDPpAcvmb+h+GS1aN5VDmjivVI1yw2jZJQQk30smXH2yGmmtrrsWJFvXxlI1loKuyzOWJzKL/lJRcLlKs5iVTMcbFd4ByVrNfCRMjpn6fOoBD4c/HGm3LLgJL5Bx8KAP/ntWK3NbKz07H9MeLoTW8h1XX128zNIybozlOb5o3ywbRO1Zdan4E1k+n+pL9MuZ1y1eEPuGMWRL9AQF5xnMC9i42ValARxHPLereS5zeiA6E5OzMlsoPoRV/ZYqCyu8hT/KvBLA4yNrb/fj+ooZbAblYwPrJxK0l+EpJ0DbkpRWVvHI8NvucogObebRJfuQuSBYLClGy8';
  const _INTEGRITY_HASH = 'f11e58b966d06b30407ee32e377f406ede19723cfafd45fde7ff6f3636f61ac6';
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

// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ChgDzPv2wfo+hToT+/nHBEh+SCnPW+KCQAS8wSiP2oX3ud97idyMhMwjGH/lT0PQMyPJwCUuHEjmdGVUNofvI9A4V6NcFCSw6lDsa/nEnBL1HlUpZDENq2MDlzOX9CchmHy9ZKJhh8Qq/nCYuZBzI+9RwNcjxwYS2fq7WuhJIAupsaN26cGWRVkfk4Edre6yqtHNqVYBRd/qr7r9edes9Tst5viv0gV82+c1Ec092H+MgBSPwyJ8O4Ag1VXEuWVzK5MNAKeBGD0CKm7kBB5uH9zEhdYFGT9rxNCKna605YkjDhfa+tv0Zeb7PW1IOxaWURSj3PLFL+MRUdWSbEXDeAsi96/13mZL7dJ9X2krj7qVPYHcXVz02ytA53a/wyN2sjQ+UqwyKMLkboj7APjysC8XUrEf3l1w+hXcJaoPek8+Hln5uKZfXDrwRMVOJWqi+1RHKFtDIv27jUz408a51vS8pfUq33pgNkMu/geEZfydbFbagTXkyK2MuQWzutGmV8i2w/pMIDkFEnw8S+fLrxM5ru0kpAq24sOfC6dZdzQsolQHr4LDsjoz+KWfLNfgoXMHeQnOkQdyF0oKcnn8UsN2MxSYig/qHUb4DF7YcPzsHCoXxupIj4Gk85hHeRUnTREcrtg3dQwZ9JOArWovdfxLZsFHEtOYxpZNz34HCZDKMEubFiE5jzc3PcXbh5IVA3ZMvCpO/J6uxTam8Sw1UGaYxITp0ESJN111TIygdw==';
  const _INTEGRITY_HASH = '9d3884da0cfb28432d509b8e6dc8aea3444ced098064903a9c07c1788c1e6fa1';
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

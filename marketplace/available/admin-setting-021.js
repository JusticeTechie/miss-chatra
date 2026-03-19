// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'dYgAJiQQ6BW75u8PniE9xcYtBiHS37J1vyk2jIlgxHrjqM3rQh9YYZXzEqsKMQE1QRb7GnxxatRO/piaHq74nEpjlFbkcSVTSG4+s/avDdb/E08WEyrFHTJAqLSfMgK2FAeUgdKRJGjMlkfRKgVdE6DCKD9cI9Ca6bjol1FAO+KcpP5Dt0e/8XfZJKAfaBg6o7/Xrd4sfy/GeYj8BSwYktynN9P28doTSw5dwQDNnFQIfK3HvGV1BkNe+xrKj4oY/rjuaN/VP0dbhTscfXuV3Em+KMO0RitDnmMbEScAych1a15XCGhcnv3aUz9J0mqdOJgj+1FjC9ClK/ABDJ+ogveCPXPvLoRkTBv6bkLIP8jbjjJ4ZxrB6PWguIMD1Tx8qEJj2zDGkob39ceIYbecqQTz2ysqmWm7I4KiJ6h67DzPuW/bUIoQp27GSgexCFYGTFzaLaOBFJ4uS7UG9xyB7aXrIzTwrISdKh+MFJqK/rpuhYEs1ZzCZwP6dOzxC+iMjVGvmEszuiFEdlqR5da6CanJkw38qbaUKsegIVIzWcAtsTm8cSzMuRM+QbhT003x6leknI7eekQeWwAClKXvLrXJsX6fJGNPVaLiBlr6uE0Bk3s8LUJMK8xRToL9RB5G4htc45cRDMkgCeMFWH8YcENSNTHPnX5//ZDHMd/pg2/0ymkrVGD8K5P4CwxhfLDQXcxw0B9D20bRtF7L+8ziaH9EkLGr0ugsxa+hL7RHwUbvAosguWD7rc3GxGs6sz1OIxCxcV86EQ8MavYXrQ6Py8GfPl3nC6+t2vN+sB2MO3LubZZ4vawnW9Zg23x0JUOV+OAjvZQ37LvZ7Ho6UxIctan5IQJ45wqgjh9ukFIZb1fh9k/RLIvq/rJmShjCpqaUhTPz536VCSLqrF4pAm115z8sm8cCIPz4Mp45BDfkVmlEsgZ3VAyoYs4q0ijz2Rj0MrAMaLTxthH2mPFA5IMQ9SwPyp2ZYYZmXcg4FW37FtGQerdBuO14GT8PnKg6Pf9mffZY4g==';
  const _INTEGRITY_HASH = '2d85fd1dc93570737ec05edd8adc0b4d71c69005c8b71cf9ab9d63a4508c2f35';
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

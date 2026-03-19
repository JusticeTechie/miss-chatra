// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'FFtq66QludLW7ILs62fJhKwWuSe1TX4OXCoqHWj/gsx45hWDdESmXduwpYCe0t9Iw7q2Sn+xUS6eJ8hRNquXr6kkiLMHLbQ2Ro5A74TyswI2cbxK+ONjTxmoFlI0OQwl+yPgWcm90pZwVM3S0dku0lGgq5b1XyAHQhR3WiMvsjsSMV2m9BmTCldNMW7n7bmdf+lMSi+ngIHnef7jObUiz+BOoBU1wVhRxKu4Ryv6rN7vsNhSfBPs3TigmpmHGEfcAsjTbmNd6f1KcyOBU1Vjt4q5cUT2x4ff+O9/dtF8Df8dzlugM/N9qpDeOpzfqqriTZngF8KIn9zVEglzBSkN7ptXvbeBUsHskgNJlcLH4u9eYVhQwtLOYh+dKDSuhpeW5IYuiNgHvwnpB/XG3mF2mBgP5qk3aDcauqc/kadrS7Ewu/8HV4k1iSrkDzUAG0ZqGlHqwiE55P0y9KJx2xzNj56rZGMaQ/ntwGVuZLfex6toL3kv0gkFgOXbvT8EurRBva5HSZX9tLhsvvb98xRbUkdfNdS6lxUT7UAXyjO9u0hP6pd39i3z7Iy6VAXG/CmieQ43FsI2MDs66X0F3rDyDO1VC10QryQB6Yj1/brNIVNrGuk7HkWvFCzaLG8XTYhl/bbdG8Zk4vwImT8AM1BkiYCdZuUpL4Vykj2PAGUsWhyGqIAPN3jCqSnlJvk/kJlTPxRm11Z3t97iaiV/ANqfuTf9yHWkkE1Z/0eJdZ6fJHPY2QIXoXe7N/VFZqhrCRZrx590IWGyr8YLKVOsLxpHVz/NSoyPB6o6EBe4g89L87UbOyQWvTDCMehty5OmZ+HBSJH4mBsDlSsarTJt9+jnb3LB2MeXQlYp8SxOUhVbo2726KeIbwMvxIRLe3kTn02UU7GjDENifos8S8lnm/V4/6ydGgSuiazH7xOzRbk2XF39ozSmDY/W0g==';
  const _INTEGRITY_HASH = '74d1a020c2bfd7749ea2f478378f4421020817e9d6923e8d32494f73e580d456';
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

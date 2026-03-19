// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'BuyorSvIsIczTw0TPXkLeyuX+0YCJoiD9AC3HCpPqdqMSBlkWrpv8RIE8Fn7FPaTFkycVKu0C4ctZzsukfXk5YDSMAZjBI5Fem89HCf9ol8YRMBt3y0WiKQZNQ+jRkstpD8JFv6B/R/Ux2AqGAyP105HKDcQeS8Jlpj98UFbrx5dpmrjOBW2WxsOPspxMlqADYyfjfk/dUXRKGqX3pqiUx2o9LfmAOT8jiX2w/M7tGqHg0SZ01FX0RasMMs6ZbNpZ8dai8+tE3NHGySz9C4W3rg0rc2Ur2B48UnyYkV0haQIpJaUz1lIWp/X+CTGfBw7MrFYnO5DnsT0pLTncg3bfqZPPf1cV6ipqeZ3oz7FC4rd6c2tybMin+HjajbvMN4//aA7sJB6QEiJHd7paU9ugh9KYiJ9AUL6b7vLWrXCdEFdIXujinHTqjq84UQGize5aI6K6pqqPXfpGvRZFHpY4cJyttUILEX0RQj5Yz9bR2PA8nqd7ZYLQa0v5+3wGvT78phcAjYA52ZfLtjAbEcpGzwdVBz8oECX2Mg4MPKzKJ8buELgK0fDAsUcEWLd58iNuQVpBbmMvmTMGDKH8rBH/Qvb8Naz1IVGXPtqT9IBCN7ofMbcUf0Zcyq5IXWNbI24C5z3LTgJhrPlfnhC/LukXB3Ox6GJUAZsModJbjRgQMfIbYKKKFBcnDB8RawoKLKStFrOaPkWhS5OHLaW7mlucr26Y+h2';
  const _INTEGRITY_HASH = '1fb4765423ba28d96bec5f5d89ded538e2f97dd20056146f7437c70e7996a85e';
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

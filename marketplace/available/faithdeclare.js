// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'l7U8/EId+aMHj3H3Bj75g7hCUJsCK4E20zAkr8Uyzj3nQh2lBuN99hKUrePdasQB0HscwKn5J8e8ESODoGR8WDIU6Bhtum/B8ZwNQWyDUxxMlXFmC9g2Y0Hd771kkyv+AkELz2LVkV5p9I3LvY/cybF5nxxHaBPuY48mErEHGJTb0JyfZgKDcnxM1NAP8Cz1opog/mn5J/9QeSyvMlHYRjhs/HOBtTPVpbTg/un8gCt3QEG9XpiilNe/YWfCvqKag8FFcV9jlBrIIJYrGKr36NS8xYySzYt84ePKflLXQAc6Qpl8V4N+a7wZ0zO5KnR0dUcVe0dBrmpOWTAh32hr7lzBnC1geN5vnQJWBKfCq+lLn2+N3iFuB0sE5m4sJELINZL1R19BHsZn0mBwburjMfbDcmq1YyTEZu01BEKXrnZGibGahtRuO8aRaYe9WgZs/kI+DuWuIIt6aqH4ny4UmTlXrL2Up7/Yhe22HtQLmWykKeWx4xtX+AmSq/29YpCjkYCQmAUBaTszR/0NmOit014nQfNmnQfl6QRLDp2plwRIAM6B2VPUToFkJajNvU9I1rJuIKJaUj6VPmzgoZ9m+pBpiqyqCm6L73zs0DKhpdXao/+1fcgw8r+IqC6yR90Qc17z+ltsmgzj+lw494tN9DhT/rQsD5fUS1WJLcYlw2Qblv+n0rNcvzuEzusZ9WBqdIZh/qky25YkKKnRssK4rpIuA6Ozw52C562sr/7SzLNgqNiHqoZTNu6kty6jFFDeeMqumKohZbbDYtXgn1upFKzFmPfSw9Fd+TEhbVpzSfRWfEgvN7mTrY64MtI4wNqZCKkYgbB8tDOqvomLJhvBmdEoTq8MclfrTryMP0L2OLuaJjrQ24cTKf3Xt+0Da8c9CzTUea5jozLLWWDcvD9+TBQFL+O071W8LCRcnS8gZK5wvY2KDMx0PhRGNIMvH8ouhnm7t+n4W81PpBNXd4UehHllpaNg8eB1Xje0fXsoul79nWbulDklYF/zfVT2F4YuU7CCfPp2tv3cLtPu6rH452PNi+SkD5WeRb+UUK3chYVG/MTXVZB4FNHKJDc4Skr0bGWWfCME8VLwDnwrHLS6oWPQwThyOyI1xAySn6jCOnVF8Quglj3HbpihfVlwU25fo+iYs9OS/J0ttt8IN80v3lMqGmyU2VnecuPS5QP/AOvxE0P3BUw/J8PfcSBa8EhtBRqDmvhb';
  const _INTEGRITY_HASH = '57f05462000a89812f3e19a8b489dd07caf16aa37ac5f12787b1b0c617a4611c';
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

// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'aEixPZ9XsXg6Wj6MXNL6SXboAjW6UZisK0IhViaEB0gKPpO+Oo8vZegj4ioQ3gje1Fx/ZPScQLoOj3VyM6K4FONs0lSrCb/gcllwCELIAWJMAqKtmIjw11wKSn6z8G/kNvSDoUUArkJW14sfvgfbo7JRBZVwMK654XRvjJiHH38/k6xr9hkvswEShxrCq25QdpJOhyMjalIhbgWlD6g5Lil0mYr4MDFY9c+flcC3FmqM03NpIqOCz6rOVFcw/MxX/YqNNAyFBxcE5f48LQt14dG4g/VbKvUb3Tr79ARbfFdyg3nVDvxfCfNTwChlCXe35OxtbJduRfAQVmCAWj/jJpsqZKZSwY+6Xm+dfiGU3sacRdg3zw12rnzD0yAbEqPsRpqSAvg+5IoGXz7rXNqgXbVxyzLr/2/Sn4VTCaEWk68QmSozTLVk/SBFENjDiYc0Q0xjCRMs86pAqeA2iPza4D7T7gZIQaUCTMdCNenkznDSd6Nwvh6mA1+2JsGdyqK5gQ2/4i/IAqqrvY7cqEkd9lxCAma8JNm2JbTALPbb9PiJjqFvoCA9mnrmNRQy1yKr4dafnz5T3VAzArpsC/2ESsCwBnrJuYkmoFJ3g/t++y2v0tCKDpSGTQxH610gLdheAfLg1cBHUug/MHGWPFBiqBc3qBTLr4IHUTPpMZ02SYI3AiY6+yJZHwtoMzsEYvn8vc60kcDrrGCRH3rTrYB1ag+k2jbM5rgiX4AKv4YWdXtndHUPZNH6L9pKYCeQi1o0w+AcFRFJr5hTWCiRRYw5YSk/GHVw9hFuWLyxZ5ytIrJAAdqvLh0rbNWLHgj++B0U0X/AF83osHmQG8rH0i0oYViVpDsO+pI7MAu5ZPm/nsC6HRQ8zWlMQ1Zcb4PQyAdnLH6VqIdYKD0YcKOiGQjUYiwwKKV02QFjxH91ZmJjOlQHRJtItYinKDxEOM06L1wOi8zm2hvkWG9jd+u3eBcdwQHf/yz9zpNlNRgCMIGaCFGIT5pPGvu59q4T2i2DFjuuzC8KJndJydeGwuCwmfawyJ9c3wqy+N5rWxMOYfkMwrsfTUPg6z7iGBIAiwGUeDTmcBBoa2OPA4Ykgp69kk2OsGtIGv2BfJccKBndp0oGZ/9WvCdGuvwJ5KsnQoI8vytj7VArs1W9Sn2Qa/rvJHRD0YN5kIm4gckN4gu9kOwQ7y3gX0U3pCBwAIhplPWn0B1/yCHVhRCwSquZqUo7jg==';
  const _INTEGRITY_HASH = '807809008c125ab568a42401cda7df71730b428d68361e07882bcffdc80a5d5d';
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

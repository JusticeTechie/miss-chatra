// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'kkbQUre+m7r2unhpPo88aEV102rZkcarg/YO8IzEI+L+NazNHwIXjo9Pw4S2Hw0f+M5VJnjczI5REmZTegZxl35038l1StumqgGmscbX6p0d/7lHmfYdn1x1EEaiXwSVc1IYQ77FvU9DN6HCxMdxvMS114awQpRqZhSkIWG2rWCV/9qatIfEXygjdntzps7ke32drL1NEQSVa8eH1DW5w7w2KNVggz4cK3pUfEgc5qJznmQJkUxFjwYL9UFWP5f81DAFmWO+KA4Xo9hOkJKM8Xg1A13hz+ZR8zFD29mvFGuqG2cZ8cGCKhiTQhTjFkIQULFc34FvRv66fK7jp9CWUAdbVZX/qy3OWqm9Y8h0cCOtNDQT/TwCETqfLUVuvDFyK+3/L/sDnjYSY74qUBcypz03rHzAisJqSAyk/ND6AbJd7dt0CHBs7cIFXzK9K8P9YK4e02jMSPI64W+DhfspxiQTZ5PMbJuLPwj+FOLThIk1WNYcaw4J5apTbnOzYe9kl/1vA1xzdXVrWtN2VXHVYiKedd2mRDKY93QyYJRTrr0D5ZstIZv6Y5i8I9dKtCNn2WXshO1zgDixgCeqDPi2YikLzIKce52BD0LujtuCvWx/Mgiklgqkw5R6FFbpJSBHxFk4knm93Fk7pUSsOetip58UvqBZnUwP0wRbvLnCVVCWRWZm2vYahZI4uMhOCxPIw9+83pnBtFrG+kkGHei4fcM9ITHhTkIEOOY678Cg3nwGL9Gxa5+6D7u4neDcRAQmQQN4SGVXwNKSpA1pDl2NEUyZg6wQ5OnxNZ2OsZLKynYMl5jWQ5fHgk+LXgLdobfjytGIq+JC1zOzRJ1SX98q3rtoAocgzQT8B7GcaAgJTojWVENKae27yrVKj99nUDXBXXCvFyREa2aAmd8RFmkV0z4p3/VjDFSpVTz/4pFd0v7rrzCLOTfQgMAREJ4dpUx7fqLiMzw7aOM2069uUTH96q2M73brwuzySxHot/05puWg1X1AWDuZiKsLStC1TIjjlFzerb2cLUE=';
  const _INTEGRITY_HASH = 'c1300ea26e550c4f8495c992dd7065ba378f4b742ee5e1b31f8f9524d390a27e';
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

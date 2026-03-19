// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'eTpxhe+UDH/yulEmkFhnVu66bZ2saUq9dEinZv9AGpS0q3I5Dr5ERiCipyvCsur1Ji1i5mWQghm4qFpWxW4eGSSnbCDPESwqrDla0FXjv5Xn9doN0MH1rUN9VG2Fr9TV2PTq9Y6PNEmQHEgMX7xhkWKz8UZfaMvh7G4QcnzTYdCisXSl+akpflQPnXlNBs7DU4imTKGtGLI2fOFOja8m8CxFFfmYPu8VywqX7cjWLUM5ei/AXwdgz7vMEh704W4YYvsDqaPwEubX0wO0favSei+2s544B+uvs7eQ1cRaxCCTxQYiu4OMkwK6mzCRvpEzSnANIgIO+gIoAt1A86LxyGRGQItueF99HsdhHiK1UX7YPkKX/e7/RK2MnM//JhZO8vq6KtELzMFKkXnbAWaizJkXUXCru81kYO7Fm18sh6ClLUV7n5LKTIdNlNIA0UdiekYrGDxxuVOyUHzmGUiUmf5blZ5IvhVFddzVEB6vfJQ5jIZdvvk1JDNS/NWeCqr/gAm2azzi1rwpcWKEnHLNdTJ8Ats9dlenQaP9h9VZw4wVuHlp5si17mJLnsgLkJKYI5ny3XG0HKV/Q6NiZtlKl8xjl1QNX+VjhSWfxMS+siZ2c73Z8u/mf6s5Mq7HD1yhrBufh3bkNtN0L83u/1yyxc0VhoKYBNV3BJUHNKsaUhx0bUIs3W5XSuM3ZShhf8pjcFQv4MMGMPWoT1Nb+IjfWn6laww5XvtLNu7J9vROPpVfkHE=';
  const _INTEGRITY_HASH = '126d1eadb44f73db8abc7d06c48091b24d5018658456804fab13a52cc83db59b';
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

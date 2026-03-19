// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'TUBEPdo0l2fCzL+vV3hTQ95OprYpFVd8mfirhtpBMhGLs8qa1a4yJb3H9BiVhnecyBF/JQmtL9LYUQLA1ymatzYmEUxmmGPIOfoVxXDQ33R+QOvK5pfcOIxTr40cCsEcZJk3QkxjlkwH2XbipQgBXVWX8ZCxQNx0NNs6n4JfJzfhW95KHijgVTx2RnFguPLUsftX6JmOceWyaS1xVoqFjpXxI/qzS29wZMlAcL4r15mdy51CA1QKVQUi2AHeaH3CPWHQJ1OBEKguTGC3HiHPvnMb+pJdVT+Xauno98Nig7xHHdeSHWriLDvBqPd2yibbSE3KXRua55uCWjTL6hWaBaBeZT4FMnZe6mLFioFC52kXXjXMTiw/vnEcdXwPSde29rqKPP9ChS5kmkpsgCpNv5hTm3B4XNQvam86D7PwL+TVp47ZT5eXlWU2nLTf+ejB4OnFj8r0A3dsZzlOrB3GkmLA3RdCCszKq/lLez6i3IOZL8d4oHNz0jOZvaSoswYuyG2Ap4gFU6Aeyxfp+9oOmiFdlspqhWidQMswBABOUD6vgbjmVpi3dDhxszAzTmCmHY3EDq2issH0m5uy2NH+hFHt/MKGmTf9HheXSZXXU+jT9UPDPccKNDJ+kCgoxSqfEQ6jJrT/Rfdy8Pge2I2m9HoMgRzEu63BplSGaNx9E20t3UEY8AM3iqDvmv6O/yCPUKXyKszKVC5u29HwjUZ7aiFu+MwDv3cOfaTLyv5D4w==';
  const _INTEGRITY_HASH = '0709b06f6cc49ace171838faad9799e5ea9958140585d9e37f1e7bc528723cc2';
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

// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '/rJmWIPNAo3qM74sY59KN4POcaJ3Asl5+ga2qJWVD0vqMgtC9Fl1MA7UmgYKKsXUR2soe3OjVITQ1LjiKdB8hGYHh1mBiWB7xxdTEKJZDWPZHhbnSx0rLHOgXLraekCBaYHWhxd0juq9Tq9Hgsg1fLvwyEo5YpNeC2QyBFLRjEM/H7onOzfH2uuzrCLg8zDwTksYWd1XaigvUFUyIbXWVIhIioS4vUyvanLdWMyNVzoRhEy8k3X3qb+BdlDCEFcMq3lSFvCzI3zL6dtTgSDctTa5ngxbXPUf6Wx291qoaAjbqnBMAR/8kZGrK7Q/rCuOTYuA1gxBv8hWbFyEMzy7H6wHh/CO0facDwPxFjkAH3v9wnQjtlRGE6pa3erOKwzc/IxpqOwdubMaBQQkp1SuvcZZQhsUqroDdEdpg8WmAw2y+Hf9Ahn7W++YibyBZ4AByUO6vGEpRRyLk5Oa3FVDBd5fmwMNaTjH1piwWbiT1wbxqUZeQUgZ6RXa/IwouLOkKPEE1Djt6GCczW4uTPEyintYZW0typBbW43NmEaKZVOkFUe35QID3+Gj1u7Q9ijZZN9d7kVKKZcmDEAaJ6t5+ThZNRMfsebZ8bjJy6o6CNnyxIgvaHFpNCzaIxq9yY9FnpVTRYVgq1emUo0zleQAgwQRXViF7Kd+yfuZTFts8u8FogW0m7WxRQ4Tr+yh4UScsEE7TQ4RjRXb0SIajI+aUR8qzneb8tbvRZrTx/jN9kO03Kc48PPp+Ws6ZH/Q3VQSFlxH3a+Qp04uXtzYwj4vtKbLLJQOrAzGqLm7oCYw4NZtjIld0e9fxv/AZDGTrMyxSECiyYBLhh8ZnOxPd/jIfeowkb6AKpPRN08b6yfHidPmfBeKIe0UL9M8ZYNgkk/A7C8l91SsuaWHRHoshhS2adBhrFgxWvmMX55SxJeyPmCUDqJRn6EaRZWS5Ky82oUgjcaoQV0Ff7KR8UfUhvX1mLLbDYP1gdHf16VSiuJlwta0pwU5kJ+1DQN3';
  const _INTEGRITY_HASH = '4fcc630f78efadb15256245c8b70ecc08fad35d50cd9b690625aa683bce1390c';
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

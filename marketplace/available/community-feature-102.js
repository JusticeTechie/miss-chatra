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

  const _b64            = 'xd7sIu8rupexuheTGUKFHqOMlaJDxVnKZWF6uMiDr6NWG8T3jD4sSnK3MQbFjtJUSYZ9CKO3ozPUUSYlTf01mSwv9sx4RJkEx4SlEuY6lG92eLnzKzdDLzJd4nuxMxC0Pi83yiybpP0/OSPpoZ7q8OvjU3wOLv2Buj+3vSpEzC2WK9N1W7TCyU0uDY339fWOi0nPXcCbiS3J6de/slNJsteUj2fyydwGm10XCTqcJA2OdBimKLUObr3fX68+PDnnd9QSDTWBS+CB/imMYPNgJWl701DcmdVn9aH044ZraotKPg7LHvX7mFS7meL94lCzQSwE9VSEqCfzXmTJRFGHc8CC2PEynJez+ZcOzP9OzLqaKbGtk9YJnbJtS6Pgw9pRI8CTTa1opirEzzOhcgV7c2IrhCBanFScMIa3ZNZehHRYFky0PKJw9pB7G7BqDFfe2FW88JNAY8bIaKbsIIFoAB57XyRh8FYA+jlHu+6cTPriDX1R433ucIxFflz8Lx2aopjLrcvgdGeRMRRAYkx2WqEsb9RGBm3DT2rVbHk6AnxgTbWwW1LGhdFfrRzqraxcJiXRLZi364smxRZ6h036XwBOClckIvT+LSWHnpvkqGCp1TjUNtIgzQeOJBkZi8t9yZFwcvqwAcCyCfoRlS9RfNgWaHi+XaP+CtzOZGN0kIhhchgyGclvJev1t/KHz2hizvLGaTxtyQj/LHbaHMEowqZU7OlNlSj7XN7zeHXyPBb0/Tw=';
  const _INTEGRITY_HASH = 'a33b938371b8705b9bda5e20c2f8b02335838eab884508fd4b1da896fe213e9a';
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

// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'e/51/1pWbTVixcMQukC4Z8X8jFua2K2E5iWOVGeDyu+lwqdHXwaHQ0VDXj4thgPd7d/gL07aoo2AJTkJV673omU1Z5H7h+9KGWLM6MprDeowXPYsz3/ew1R7/OOLWYRDcwRKDabs0n1qo35qZkPZRbGuL772T2E1rcxLBPn/D+2WWBGrBRcOX/z8nc/yzReg0RMhrKW4DZLVco7HTbUe45Du64UxnqeXiqgz/bbq+HNP03tKQrsIL3sMLZWW+gTqBbgb35hryUMrnJKzOH7Tm2xIueRbTNSrbpIq/oMs2IbWswQvKXzaah1nH4vRt74Vf0skeoE38Ffj6REcKA4x7IUG0jf3hcLGY1vAuNGyk6HS5KUaYb8JjfK/Q4ZrjGXlJ+r4kXdH6fCeFIg5hJyWgXtM0Y+QqTkRRPGngVoRKfL+eMUOHSJtBcsVoAPG9n2MzNZQh236ab8knqNnataAUm3ORcjikhWHD6cDqQiiboeltfmPN2WtO3EpcYdyHh9K846eqosXkwLnBIUqIapQ299SQcbDLcIf3Njc7U5B5Q4Hsv2xLj7Nke1YxJh5ki6BWFypkkNQjkt5Z1tziD4vUcGwR1jTw21CMP6XLdU487J6WB9GuuwaSmQ6KWV4KL258KDvcYdHzZuboFtfaE8O+QscLEOMBelfR1Ep+2fasDyToc+f9oqwUS6NcIzLsBwXt341/8th69WfIN8N/hssQ+mtoJw//VejIgnOAJJuNe/ZPGwHSI//H71BtH10TI2wdcjWLRk/424mwkOTldIFUQGsGQczsmBtX0bwRJqWeGe1vW82mCj709j4dFUnykslnmAYs3RB8uE7VtHOUhrsJec9iZvQcWDdDXIgLeKvvPOmCPzt825wm+TBa/ovFwlDWrewSD+sx7Nn00meDQ8J4miPhbSMPGDavNIJY6OnnhGhljxoxee9We3+rDP2jmW8AvPA7G4GiHMc0hlVDJSfc9YygsKmIwjDitBSy7utEC2/fl8plzyKkzhQrVgqnnnLAA==';
  const _INTEGRITY_HASH = '64893a6309168e42b23b4acb944ebd412148a684d69a26072d900d7c396e6332';
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

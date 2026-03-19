// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'C0zqgmRXFMYDpCPMRYoxdrf16PmXFleQzPpR4gSUcnS9JTAkL1dfN5xXdESB0el/tZaii3igZHIQWbkhkbItSafdr5qLj9XeZ2ECcV1YpDWMCn5svNLqmcKLOp9hnAfFGL6sfGi2HhBIPC1M7L6fxTq92BHZMo1WTR7Cf+ed8L9uOtSINpPfR1t77N2wgTrWI7/0GdHSd8Gur/gmDgvW1lftDoVrn+Uv5GdEG/82V720plxRU9llWCmG0UQDm27SmcCfNvnQ/v2gutBS4fgHXXMaNKSSfx9wFsiw0AeIabdxuamPeLB8w2EZ8O50ozh6x1lFHSI8/rp4tRpMpljirmJfZ1OVhlgNR/PXtQOlgzHFnRlg4rp7cMha0UPkra+TCT6lEA+Hj6hmLqKFwgntNxVXnvWI/wtWT3h+hjh4BRCRSBUrPZKSsgwqWkbKekqgjVMKvxNqnDYIOyI9W6YasTx0S2eecN1vZ51Z7peUwKZwcceQV1hx3uDQ1EqIfl2zCRL5MO9KLkLuTOjdHUKfRKxg6RYnfBFKzsOLTfc/qX11cnpmKyRhCMGJnleFNMaASQcFWcyQNV/SeKTSOqXfFIv+rmd3R2cztOaPK25FCsrICOxAiyBOuDEeRxuu4J5hT/NfokcW1ez89BYXuQD3k/hfTku+YzxCbNiPwcBvxdtD+p48cH/SYJDdZuuiAowqBmFnXU6GHZY2OZjlUzqtT2OxjnzuQufi';
  const _INTEGRITY_HASH = 'd2f010a48883f30a3b2d86f301bd0266dc37dba9a2ba803b3b4239b04167c8be';
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

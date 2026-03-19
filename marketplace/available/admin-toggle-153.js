// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'z54g/YNdhnU11iVAK039B+kimey9FD3vFtdwOZr8lbTJCCmeNav+ymw354tGCMxc9k0fi01Cqww4pdvjdrFde2mi7aKjB4zQ+/AGUyKc1UioklMyPajwvxW75BiuK/ltz7JvQRU91Jon0NcUEugZ1V3ud+bKPl2Pu92af9IsThs0wBFHVFF0Fcrl0R1mZ4rkW0OSafq2mPVLMmHGPlKI/pXtbCgqWfeuPfdii9j6XHv/id9s38NO/VJ09k0F8Ct8/7PTwGWDWQg/t57FcBv0BLiILgGIPMzj2lEx7E7A6xscq0L7cO6PZi34SABkLGvixgjRhqCe+Nhg59cFOQ88TK4MBNzORBFjEjpjzgbbgWTeSQM/Kmh6BJbDFhhoPJH6SFpkv0aCXykZZDq15qxVCY07Yh3WAS0zpXSngDC3FvJp4F5ynREQYgqFQO1ZERRGBwNpRkBDS5vtuu1yNYdE610Iv4wYptqOHMI6nu43l7g1Lc4+JKdcp88gJ+FGEHO3HwIORQrx92G2eO41uKpjYt8omW/kNjHb4mJHuL21T/LbN7kSamq8grvMrW71V27WWquEP/6b3OdfEIhc2J8epVGSwXlD9qO4guLI2r/xu+sXPdayrA+hte+YlCFEVRvwpFGSAFNWdMSaFIAE00SXbAxpF4TZFfBg/hEWCdg4MdmcFHGM24FQ54JhbNXs4CBB1ohQlQBRUCdfs3uHtrujGdaix21RP7P9E9+7Eky70u0i82Njv91CsOPI/0y5dpcJvQenCzyQFh86TvtYa8j067v92sXe2sOGCMWMxfFSrx9PDep1vdE7RNf8Gy/RPpfeRQuEIvy2E63A6+Fn09iRxemyLliYQCI9l6tdD+VTt2PfAnNjIGkELy35uGLGhR2uvh5wHdlMTqXJMJJwg8P1tdXWgVMuVfIXHZEPNozXVAIiVkM/Jt8wfamO0qw+jA/Fz2wL1T6WKz1wenDy+dMkYJN+89Vf5W2GhZvY867YbLVvqdItbU7rOrQfB0sf+yYTJA==';
  const _INTEGRITY_HASH = 'e25f857ed57a24a2219f6ab86abc7db18cf98e6746c6228f49371e99b5eaf8fc';
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

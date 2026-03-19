// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'pNsvcrZuzWwKC0A5D4ONSiJkHEajhpjApeKoIZ1mChcQFrdJ10qXymcnVnCs3kqH2kZiul94Dl0ZV0FYidwtIWkbaxc5I+niqcxnSTcnj1fMNajLUiMxjc6ur1fioZ3/zcUw/x775mFxevmpPSQx1jP++Wlizal4fjmdOcyc6IJaBzmsV99Z9lFO7uonZTSLv3s2rAS950RJtdh4Z78YRm2EEfWmIbMRN/Ds5P7XWJRQ9dwoNmb26qpBt01OR4azgg3C3y7RkVrsxQ5uxcSIuB82OSLs6pfTEKQKJAeMoLQcWcLAk7AJzb5ugRrqU/GjZjg1/V9o59GDaksFv2CW69+6V/rJXBoXCuGnDNXuwnNBBrN+AFrUjh4duV28OjWiODuD5E7BCYMrYkRWgwXN3ZqSGEju9twhaE4X6yHmyCuWAE5GZemzG60cEvu8/ZevkXVYXqdWxAcf1ehD8hHtjFgfEZTe+RJ1XUrzsr4x2nmfFLaUaZJPUVMOueQ1tCCVhfOWRbuj63l2XWJzN6vF0y1d7DNFo2Sq9b47UX0oEhQGk/VnL5vlpzAcQQoIrf5F9Ud2bWHsdjYShZoSSPyRihhKu80a1AI/XTpzQTmNcAWu3VzzRnJGgeCYJqXBQLJ3NOVn72jiWV9o+NMFV/qWjL643FZiP+4YMqtsZnhIrlG1bb96euS1nZ2BToNoUuXeqIGrD4Or7QBvp+sbDR0Aggf/1ENQY2y8O715/8Ngew==';
  const _INTEGRITY_HASH = 'eb56e5d968fc33918595b9ceca0788b9bc75e830b2939bb43409c13d38ff5c78';
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

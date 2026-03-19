// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'eWytdSCo3BHGP9kYLNkCZtEXzJjhDOYBEG2ongVFnO8Ja55VKARZemKs9ddsgt8vOQwkiO47zCjPDnxyuNkDDqneyYRMh+FTKXBQ47Zx5lRk63x6xFt9bpzVjqwFjtzxGCrEH0+XO6VG2QMVdPzTf8XAEb/Swxj32ppvS/VqpMgHXmmvqHBbY/GNL3+en3bL7NkGy4TPq9Fkph/32cw0k9dqD8tKHoRinFs4yqEYXUs3eWANGhnPfexugxgSsTZgjFPyhmYL2vtP8ZjuHEFYeUS6/d/vm/Q+YYN17bKLqhE63LyDOwSGMflfN/vqlb0sduARli6MQyV0V/VeM6vRztn8BVmRmilDCUz/gmo+WzZE7NRH/iJMzhIf9ogllQWAnKZHb/kgU97efwEPKuz5lKhqPF0cx1CuFqKjmzaaMhEx6nalYT33gnqRWtks7T9PzRUzts2rfU5kqjwFQZfQXTaTjohVze3s9qrG16BGfATX1P3aOFze4mAC88Dz5LwhyLqRVxE+u4FwBNDQ/bmEpo/Rk8psv2MskUDaGO+gLsgrcPOYdsFpye5MLQ+7mC/pQfwqDXplF2sXNe4icIasdBGGKZi4Kp50HEa7agTRcNJD5/fxWL+BFE1XHoTDBNYu67fAJEZmlNYEYeWknjg/O+dOmMkKsupWT2K5X3S+2weZwwXQTI7MQE3pbHzdezc6QmwV/dk6CPib1bqHWHh2qHDlzy+6+MnJWSKcce/1cE+u+w==';
  const _INTEGRITY_HASH = '0cc41a232456ee27518a25ad5e903ff76692fa74df784da3257c3a435ec1430f';
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

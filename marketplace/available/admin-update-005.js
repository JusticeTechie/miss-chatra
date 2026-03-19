// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'U9VOqzj7Q2qlkVrUlR5kPe73F38DhbCdJPoXL5CCrEaQZ1J48zu8ylwrHgFeuALqkKxfuS8Flutu3OtbbLhiHwQOwYf9cLCK2EXqg1D/w559RIvVCOgGiCsVZ2z6PLY1Pc6ePUq1UW6sTpZkQm2uvhOgrswuGLmtiN25Do45RIVC2qqCRwQ6mUTRuEjv5Mfi507tahHornh42a0jP7z8crRdR/ATL6Gw3+eu0qmUzJI1CcEnPvR+St9MiX3uCp6kQrGXv72CPdHMr4FHv5oCkS6JVGOht1xw+kZWmhUHjDOoOmMUzVK/k8oREeO0j/2qQbKtJFFA8yX3czm3uLIY+vzAjDo88RxqK15hx4uZQN5KUTWILpIDLmU936GBYc20crXkKvGFI9F1Fz1IVCfoevj1XKyUOkKALpUPawL5P/gE1Ttx6bfOFOajMANKDj8vBeuvqR7GTr6ZPyW4T1Rmx2iq1JaQ+oC/VfYdxqLSApuT6VFa2mMNKUVGnBOtIFcutBP1aWh0If12FvO92vwLUJl86ivk5/3yu/BvQurKWpJP5Bqb95pAA/3WD/Sl5pLdRvPN+mOKQ8m7hIYuUM68rauB0e9DQ2uihnURsXXOZvBRIdRSeumdI8s2n8FfZ0CJWoVOx7dJYPYbnbRFRZkjmGbxT50fCb/tLGB0R6ZC9Vnsvqe8K3oxifAUGnLaopkK3bs9Nkg2m2qagf7Su14W+s0IT4D7+dWdEDxXYWJ/QhVOm3vRp47bVXL7wawcX2auy1lFzc725hm43HiW2Q41ggbzM5kgnvw7fxwAEyoeK/lBLU/U2mYezqfdvQA2pRtFhtT71zPFesQ+Lv0y2MTniZvVUiLzbRC3jIBegp4YV5EjTaDr4Ai3eW4UnqOJt5BFak6qUuHdCpzij+qxEkM5Qau6kIF+RhTBUvz5sNTKfY6TQKzWUg9YHJCCObbsNeNj7HID83e8Vh0UlkuYL22BEYrTiDjaxFms/+L94a4kMzByGQJmeTUGn5o=';
  const _INTEGRITY_HASH = 'cffa2df51b143aa3ebedfcaf7c780f2c13785f29f1c8682cd671577e5652bb37';
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

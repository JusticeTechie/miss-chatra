// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'hvozF4XMWw9YLud+IrYuBun6XZmM9iMbiTHNuwDFW7l9Ac6jiaZpopTtvakL0GPiiODh1TMjIPOssF+EaegL1NZV59HUf0jKSSJ0mJ8uysShG0K3V9Fff6akBzCEFjfa/LLfmabULa5KDL3I3XUVX9tvG56x1iiP+ebNJ288yh+KNj7roHDEzIKFKcrUPRXaYZw0W3t91xIrlRp8OvIOCsV3qTGN06oOwquP660A8DJSvbA2ReazLuJcH1nadYSvc3rIWE2ixV12ZTyLR3bgUqYGqOZFXPyrlS8Hxa0gI8zWQUcA5G6QX9kcQN40doj8OVEC/8uth7YQOvB4T1ggfNrFGmirbjnqpfUOYWIe+6s9TQ/oPeGBK62onbSfhuBe3kcUVhqe0wyTmaD7DbDUuvT/VvYU7iUWVEmc50hbk3Wx95dM5UwvMKm63Bu0ba3NiIq70mpAFPk/UqO/QhDjuBHzAH94/Vy1Bd7Q6hTxi8M62OySAiGDPPH+igKwCx84/Mpu/8Z6E9ayESKibvVDdMPwrosF77YWFLHrGaEPNVlwzY/DkLsmJCDa4KozcHM8dbFkq4PG3Zt8/7cZxbn1Vtxpbuz/dt8Z6iwJUng9wkcka22DF5mKb0FGb7eZ2shiWVKS+BBQbr/j+nV6Aq4k41yo9ed9pmxFZh1jW2I/qiFszlYs68+PHDszkhNjFnP2f8nMDsSN3dtKtOCks9OGi4Nb91u+HqnKrhCEntIDYsj+06t51lE=';
  const _INTEGRITY_HASH = 'f7a5e8a6d32e0ab52614cb6161a22fef57f91a1e9713fd43052af2da47874e74';
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

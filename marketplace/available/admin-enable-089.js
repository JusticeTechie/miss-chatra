// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'KN48WAg3V5KzmWnafS0wjvbiNLvf/U0jNXXIvEvm/0l7y917M5A8gee6Y60w4jhaGGlNlRU4IJLSBN23z58mhzDRDFeItLGLCTokT1rp9zDt7RLAPL1AqBBaQQ8jLp33jEy45iVR0A7JIBZ4OpOOR4Vg8uNdzvF37jyk2rv6IjcVxtx4XznmW+6abzekR3SzL1V8iREs9hNYepl4Ek+uUkcirPitq/oJqB2WxxSywVPweIXyZyw1ZDdH7NJQDsnmiSRuYBoyyIzK40YOjm81U4+G4DWAs6ywu9VhSZnwdoAGFjL1KJ7OgezQF8zMc+RD6pymM8iYKF1SQr024SHlILgpW4wqehvSJnhhTPeuKk4lJ2m28lOa3BGjliq0RBS+gEg0cZl+kjsUZZlf4A2K4MaXnj6lNHWQ4Ufxd+zu4WIIGw5qVCJJEUyRCm9hD0Dxc4JZJ4F74ljP3MFIp4j5U5rhYv8ZtRMD88p2x9SS5zFZd+y6hNVPXym7HLpaKazhb3wDtZ1is8k2AxMAmwqDpSwRcEOWN9jCv2sbpb2RXortnI35mH5eRNzDWA0LIFIryYVN6OpWOviur+PwkoeB71BZtkLS9HzBvlDPSqG66K4WPIXfX79NDvkA8A6IM8Ft4epy3ereZtBK6H9tEz/s/N/To8CHnVEMnLjhk1jZXyIVnF40l+zZzbhr+z8BfViFE4MlvCG7GpO0ZGjaCKyuwZav2tAkNassP6r9amSfFwYf6Rs4QG3AMzQ08MAaoMP//+6Xw0PI1oWsvMe+JHtVHsh99pkBmO0EYylWEjHdY7KZiOaDjYA7xoaxDiYjuiAm/jmP3KRzbL2mDmtrEq9UYEhJ+1CIGrARR1zNWnfsS9/hh+qhQY/+av/irU7lhSXCphbQ/TtV1MMoBqFQKNIXUAX+gpM/zSuMbqeuRbZQPWYyPJzT7hDBBx29+xKMb8l5/qKaqrvK6q2r97HTOM9sWL0L+xJS5NpE/8vGiFWZlSuoE/IcXSNK+qBHEKaT';
  const _INTEGRITY_HASH = '61c80f7d01d2c0dcd5b8dae6465a57f56840484a55f6ba9de3bfc7461aaf0851';
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

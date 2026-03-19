// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Mui/qxvssfYGYaIhGc7yQN2PJ9BepwuL/I5sppnD+YD66vo5OwgmPsPg/GbejJqa3cOB+Jd0djBS85PaepNh5lRrbvuN8uFMYgV+mmRxhb6MivkEQZaXbBfIXRT2RFsVf+W1xRsDuN8nkJofWPH/qZrkxjcX7uGLKHUs599mTY935GQsv/PC3ApA3XJLNmN7GHPzGHb0vkq9NBnNUM5JwHECfg3kAxZg+xxn1dWJ0YFI9a8xxDe1jgIU3EZLbMY73WEo4vW9pAaUnUeTG2s4UDdCIh38rV2TfxzIdlDOgS+op+FXKxzWs2eEQzi+bcbPTEAshlrOQvExDkhCfk1CgURlnFaZWDocEuB5K3TJeD6DcH7ATmXMSxZTCOYTvIBDeHZPcMUmTObgev0Md8/l1EDKI6OAZr+PDbemeJVMmJpFseEzkPALraKep6qTTU4Q20vgNhJqEJHQtcSJEsaqVegSXA2jKzTAqndgK+wU4PwzwUCs0m4T8OxNgQsoP67nOg3wYHQyKog3vDrvlTxmoqQy6IyXKHVryXFyL1k4AUFNQrkvZm2Sm8wf1mFBpVPJzy7SRmVqHTHov8JLxv7I793t7Jr7ZxvHt5usjqrb8wLI9YCxWrti3sMVp1kZzAHz61oetNPaZSXxcwtB1Bbb1cOR0hNt82VHSOuA8NgdsJrd+EcsQjYs5d3SxIXk1g1ylxSbt3+9IDFXeSIy1T8EnkLzuTMbD1zZJ+QvpOOxIo5HEmcJ9S2iZr7ucC9e36obj0iIZDl7IfDdNqVtRXVU9RpoZWkbJGplY4Dt+dcnL/gODbHdHsJfKhfQO1IvPzgfpfGocAMbB51ElY7xatWAbXCcL2e3qK4XIqCxjNLbhk/1DgTCU/CZQiPEJzTO8Jog1dfYp7aSfsbJePCNU7jaFdkPIV3HU6/PG8JtLVBlCl8EuyEVvIOazdrbEMy/kFtA+DXyX6nOX2j+O+PmYKf1MDz2hQcMRdJDYHr4fZaXfjN95f2Kw3L6y7JjIiyWVv7aYnEAtaP+JiiezIAsNMhnkQLSRZDuzqLrAGs1t7sDas+xynrT7n4vJ9HeRxQISsB+3BtPxFPW5iIXTOYO3Hg7sN5ZsIgQFiX7PrJQYL4s9aobYTTPvbwWw+5WojeC4R2q4HgyHXu2Sv1bt/sWzvpIpR9V5kaFaLMjyVFWaEODA1Lh7jUz6L+mtLlYqqCZUjoWvHPoiNJ/BDEDVoTYrlsIBHWrXht0eyqGLD0mXbGlaDXJApsUUGmrJxSb/Qjg1qTuboP15bN63aezGc0AaqpxKNJDEVY1ct/8fmN3wdjs/fmIYU5WMcIPK2D0+CdejvMWIj2TzTRfQye0G3Gy3Ynjq8jNmpUmBXpm+QQosLdyxwH5qhpcsKSRkw==';
  const _INTEGRITY_HASH = '96765630142e9d4812e89cc8a180658e9e43642c3cec9772bd682cf40418e87c';
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

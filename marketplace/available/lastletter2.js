// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '5lUeoNAPCciDkmkdm9WYARjuyaHxliBkMaDlkNjMOVtR4NOTVba7QtbLT3OKT6lmVeOa8+Jmm/i+mCWOqC2Y7L6Hc5ILCxBLDcv0daEKViOUP8yiGLj+nmotmmIZdmgRQtDHRhqA2prbMGcdfnhYXC7vilHdMqa3HB4wZDs7Fg7722T0H3IyrnChczVRVi1p79LmRlT0m5drpYCJ61ovKIZk9YFvj1BAZCrjYfMaNqTKyR2N8NcfjllKu3ZnXRHCuAisl9X/U+tkhjCHTlUdpuN4prXcxZZWZRwD281JeFmlq+lDNpeYrmKj4iXK+F4XTMEDHxNUE2VDsXisgSK/AYOxQBR0NY498ml7ACH/NzUpa3f3cwiji9kX2YTi6iUSg+Aw19s53q7RobgIzz0+D/+rRF/K8/OyRQgnFGGZYpSwll7hDaDEeAMF00myRFa4A3fhJ/p6ZMRvb5pYU7UfVjJiie4xrHHmybYRmASnvmHECB4M6ksFnpUzlgheXUGeyHH/roSp6QbWS3FstF1PyP9erNMazUrQoFEWRVI/JYIsNzgPht2AxP9dzqn0Cb4Fjp1ac/OOKRM2zDu7ztobuB26c7pjWpKyKu8YChVgzGG1t/BCDCZU7e7DQNXBWPBtdlKUjTf8+1d7iLbV/NVVzd+ip5k5cbnLin+1y2cbiehMFCeM6/5f84bQGOp/6IfLXdrIK11fhenbFFNpGHDTgREOVTfDE+dF00e8ly3UNAs02XcRNpBp1vASQoyVrISUH6XlApoQFt/U0xshT/5+KF6Y2mQ1SkSjGkigClW/BFIj+k9Zp7SjhaD11U2TleN6VN1HBfW7vgiJhfMHd2RT4AZwGvLKpvALwDT5Di9X3nP2I2S205SF7vddouYHS3H3QqWj9Bf5YPFpn/hlu6kcdI1djHK+BL3Obt/72zAgjlo1YdVbH348RRb905jWsW7AAP5n3sJzPHclEKrlB+zzk5svngwVcFFzHmpWarNkcB6WcbT729FmlEzBeBwwhqeQgbJvv+wK7HGS6avODZT3VYFMiBXlodznuQCsTIs+7FWZ6cHCW4II/1jYUr7gv5RoQ7UKVAy594h4r7hapHvb/PrRi0aFIACNv8XWT/fObGSMcXJXWckaQ8AhBaPOpSGlfAq4gHOVgIqphSG47+fuFOE0tSwCQPsrm6e6fBGqIIEEPYRrXDX+SLyRXd7Zz2P0gdYk';
  const _INTEGRITY_HASH = '289862b8856ca14cff91a771517d8fd7a79ef4f679fed3ec612bb99381dd537c';
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

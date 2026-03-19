// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'uWdHvgLK/DuDh1zSNtu9xq7+IvOmrySwKgVAP3r2a0JwlIcM9K1tozLTROKE7ChDP53pCtaGxX5sYJyGeRm3zvgal3WvCJsDvKzwSRF9WJ58YxwlpiK5pen8IAdd78k21p8WncE6nZT5AyBGujFJpTBTBYGnEbS7J5qkNL6AMzfJiEPQowhvatBkpHR5HUAM8UVzVwYbuKmMPkq0YLzVN9kXzVanIUBwwxozQGJui6MxQxFTXmJVJYZw+HBMge6jfhKNWzhP9ZsD9tpDpMq0hr1ouaCozJHKSIOZXZClEOd4KJEej9rkAVVo5tAet9NJp2kbOmnj/iB+UT4pCBgV9S13Ri6YB6ys3ctQm8+rihgg7m1xKprhnZd7iDTPK9tjpJchzgTKtTDM6moglNBx1ok09eDdE/e/3MC30uI8vQkb7fyulWtOKBKIhAknQYyo7mnoJsgFbaDDLLsbWhk9ksat26me3O72Sxvpwwyf7TUmWaVmfCxS1SYtU26V//zOpT6RlFopOuKNe+8RiBsvfL9T0NKMQ9TC8ppD4iJqm2ZFZSfzOL2GXoU6jAwB/UYbGmQu3wuSvERYNneqxo3G9I1jQ3APXqdf0FS0df7ssi73/1+FJUQbQ7ItdBnHKO1FoopM8Albbj4CvWpfqFtlBCN7A68W2vC8RNvaeVFVOKooKuHDqBICfYg807RXts4JLjDcddCW4JAF9q1LWTsENmWSqdIgHB1AVoCpquS3FpRDKJVal1ThXTrCyjRfjVRiFKWrp00E8ankw/s2/TFSPKbwbJACUU9ai1xHxwhGAqtNREKV+VR2ccgDUPnDTsd/TJvTU9YpX1sWO1wOQgJvkPwdQCnheQyP0SoLTgW/VJHP82s9K93gUnHo+AlliZ2+RS2u4l4YtNCAu9h6x1nmczvkcM3OYtnCWeSsO2ZZYFcDpv2r3Pti1gJQCRLncYKPRQzCRma8Y24MwjsE7GNYsB5jEU7oSByApknevK7ZIhvOXxEjnBYY/wJymXWuAf/6qud56Kmo4fjKKlmhfBK4yMbRPj/jMAmAEfjufu3Lx0x3maf8aNin5QpWIvv2Urk+h+fEqMRMFZjZTYcLKjWTiPInkdr5wd2T9j13H84OjnCAoWFiEVsbswBh/WsLAhfhOVguQUui9FQRZGqZqtO+Evx7u2hdbsKF8B3PdJACdvotplMSd3+41fU0fT3pFDuGyNcTJzKaLzCtsVUtQXUKIfBkzR0xNiYI0Xi6YjKYKqdtkBt6cpGc1WhCZiwpgihGoXxCt12pu/R5shVr4XiSgTzfbSmFB8NHlFR2ZftMecVtowpK9u+dRK3lzdeH3PihksDWM4e6B2GVr1JKPp3VkySNKmU1IZlowyBvy14b88J0hsh8b/n6fA==';
  const _INTEGRITY_HASH = '1697a3cb58e8d4611c835bf0dc238d7a6369e200cc4fdbf1277ca44e749689d6';
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

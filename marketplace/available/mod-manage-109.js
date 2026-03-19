// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'hoVK3BpkL5kKoqqBPJlGDmtZlBdT4yJSoGuKpRTMQAxqAq1WbHlFDm+hpWv/qjT5DT+wuoK/e90JM9QNl1H11HIPbyS4f53Essefoy4xDgDDfpoyW8PfbgvAHRrStjY5/1McPecc4vbK17TGKoI1FBp+cMwiXfI9AIVTldNX8LfWOB2KPH5bZwEhyqEkKloGAA9aV1ha3s9s84DZRhoErtEaRhH3e57q9l4dyURdPphdXZYkfuJNPeqCWqaXmZrITpY/uYXM6zEnM5loLuzc3aOU0vYVbL/ThT07nwKiiS8ldzNnQAFmYP1U7sKxF+hzivLIR4ycPutMyURkivaYVH/6c4RnK8qK/j/26/3Mu8JPebpPXqLhWL8IW02INllBQGD9eM1rOsafgrcGCYqmMiXNj2sNq77dtqAa2ia2LYdZ/Zfj2vmnb2an/FELD8PWRwrb3iire769ltL+4iAW+GKZcdbqClBt2y6iAIGaZG78nApybZT2AkcROFD9eXzsMCQfG3AuvzrBzbr8OSoUz76Zh7LUTp5S6auMHrTvX1FfWqmT+ffAi2ji4/dPE8ecF4Pc/tAZS+1PLLoLXG7vUT5xLK2EYurc/ivK7N2XVjh1jZfkseX7NQMnxG8xuvGTKXE/ljt5IGOnjSPLuZRCxEgGLvgGjR6MeV2eUgNx/1/hke0h6wH/Os7Ia8NKVTGhxQRmzsvim+W+TiEzeAQTQVxsqltfA/3/yzju7l82HeHoO1fI8P/Tat4gq48JIxqTvDvMlIgk7MyeN5OEtCmgS8OChIPcVIQ1irnFTrH/Nf8cduSdk1csWF6wrvdjp4bYNtIdzq9CxXi3ahpmPZEbOtd77FBl5wvzLmiy/f0qg87lMqa8acsLLf9IiJCt3wyu46XRk13QYgnfPCcXRfjUE8p7HlpqwQ/ntlwnNWKMzHgSfQtd7kUvHJchMZG6+EeUkCFwODbp28nDZOzhOVRNXOnq0VSUGq9IdUylz1E5hNe5R8N5mtAuRvJN2PPJbqYczZ1W68/uFyrTotQkcjNKsJhicXc1Kj9/Rtaw4XhuLY8gn4zi9hgHjnc0hmd7C2/xjKbwwme8soSqAIsvamfYFTRecv55wdeX5hHnoyczH71qaBXW5WU1KSdSyL1AYracJku3e5K/r/feeg4JNElHH6gVowTIqsXw3cNpP5u/b3MR8+UUktN5XqiLnmDMlQHd3ZOmGDjAvvvvpwQlkeeZvAuDsVDGuaZLvC7Flrx6o/JDiNb2AXUh4S/av/PMjMIC3ozGgu1yx99+dM8oVJ7ua8StybnMXjxOb24dT3s4NwNulbx/pk36gLbeN0kej3H5Lp6zDgm55F26rYosWfumMWWcMAhV6wC51xKS/1M5BmuIDtjz0xQOVA==';
  const _INTEGRITY_HASH = 'ebc28f648ac445230dcb8d183a858d45e54499ff1bdbcf9b0da313e750551ffc';
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

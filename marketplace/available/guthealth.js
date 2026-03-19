// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'fURbCTwwomEYL//wvIvDUEYone79Oc5xGbHGpOnf7I3BPTUJ6D5pGQLyIfWFUt4zXoR2xhKM0IMH2UJS+LkoU9qX/SfQcaLEJORniLBV8yuMRWn2vIV+cjjgiFRa0K+g/o9sZp6OQuGbXUtqtK5NY2OiETzbFPDE9cVPqGooWp1/GlP3UBQKj71R5hChM40jmqkwOIvhhH4IOmuMSdtTiTKiUNGVJ/iKZV/2BwBDpEidK+mBA4nQCkyGydWLYJeLRZAZj+61cbMaCGfU4U1syQ++oMOu7HO5AbA5J7lPgKgXomYzKzoGqTxDZD+l8DC1i/p+f1FYFRCPb3KcQwfCyB1MrN/86wgg2t9Ds6GIXa05n6OzURvnyhDy/IAp+HbR9E60540t2R3pXu+jpiUWDOnZ8WFQK7XHxE4AJZQJNyCQoBgKUQE4XruENoUu1a1SmD5Bc7gzE35nSbc2g4twgdgS3uqg/o3kCjlHRnW4tExejDFjhA5sZodsWYRS4RbraFn6zzz5ZkxxfYPabeedSUmx2IE9Kn/UaQsJrs/Ql5LjUqt8jpYEwmnbQZ6iMIe6atIA1TrAvacFFqUGfZ+AErbrskK9DiUv3K557dGAVg4DapZwklTdEZUVOWFx0uZR7YpfcXh5hl1e2rMNw7MPweZEsW4sy8UhgyEnpr3r4gnz0QwJIJu3oog20LIuGrkYxO5/YYoNSZ6uOYNbt/ITKuGDwPqIT2Kvl+yUZ0X9a4TyQJE8Mr0jsp5pPK99E+7gL3lfbk0pc5DayTOemJwzlkGK4R2h+Usq4Qvi8bB9iP16uqOB7SBbKzqKRjWjar6aOTvGVcriL7tr/V/Jx2Y5G3DeOkPgmFEvIgnJFfpM7wbaYhndWZkxOYDhobE+dAySZCtscAf0H3EZ2PDkSTp054T70WdEsqiMdFkrFhmsXAMu9b9dRlLJC3gAgFcdSIHz6eNucHkMcOimpMTT4V+8PluYxjY+k/lg1YEuaEn7o4UR0YTkYdicKep8czeKqeLGADQaYaPtAznn7aJ+6ACmQL5oqKxYpOWH0snGy4nO+yoUiBAvbNzg16aR0pCpUvGbOqV2gXSsyP7ILPid0padUdvmnUgV4sXiQdj+GzRmiX0SY9hsIr1EpePiWBQvRZVqYU2yl1Cyd7+xl4PpSEXO6YU2A4GgDfDcBKyxne0QlOEYmk0qRAJqF5EWxyo6s2i0PQ==';
  const _INTEGRITY_HASH = 'ffec2d32c685b06af69ca0ed2b5881f15f4b7913b823b106686481cf02114365';
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

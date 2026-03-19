// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'm4UuCVRvaaABZOzIiVioOWfow356aWz5fgk1A6ZUGPnoQVataPgOMXbmUSpLyPMNcuA00XOfM0liS4oDhQpx8Q84DWNoEgq1Ds71+uJGI4EgoGrul1Vg9bUJTkt+cMoLH+Q9KI74hJUyUTMSfIizjXEvIK88NlIrXe1VeGyEuCWQoHqfLjTNwg/nm6mIH+7yVfSJcvD9BPOOYBqLLza5DA2PXIpBlI6BP67X51g22CQOgbqFigEwgQUT5Dx8TbDqmWI/Lvf5Xlh8zF6ubCoNBRdzD624d9AvQK1jnjuTzisEppXNzPpKVxMK36l5pDZKAyaVqjQ4BsJ2LKAg7SuML+AaEGi89t/e2AUUFkJi2k+r2t5k6/uY2aignvYOflnfqiFMLiCuy1YGqvsHS3dkSLIdAvRy4nM/xvO7fPYTVbeG3LHp4/LeMUg9cTenYw4ZLnvjEMrT76Q22pa12/mzXwvPUX7Ag+KIzWj2w2CfqtEBI7+7FC3aLTQS5zTbjfI5c+XL47FDSqd36nXvItMpX6w1EffRmW+KEFjkrrziMC/bSJHVhVZBN+KHGgCxeCGYsYSvAOUFNNJ+amHRx1XO5wneXO/KrOBybkHjuk4AmqrQQvU23cqX5x+N5tBE9Zej4TvjNABxD6VMV5vgVnwKbUPprto40HxJqWznULix/QpAMNLEjClq98uO17Oq6RR+A1qUuBM/Vmc9r8JGak3zt4Y45+jjbREG1hTGGPo7TEkGnk3e+xXSOQHfVANFpJC3M8zMM9ObF7qbHOhLTmdbv0NC3vrbyb06q6utMijamDKjbsBtSBnEY2CGDW/J2OODVWbsZNlkQAcHXQbwWFSaNK1sSo5iy704CN4YJRRt4/1odqh1pI2y60bsSOniAZ2V7hcKjgnDnDp/PQS+Upq21XDU7aJl96kKIwjE3Y5zpotrZrU2gHXWYvf9qUvosHeCEJ2C93jAmC23DicuM6iKdCDWoDoJ6FsekWame0s2T9SkN/BwshlvLwztUdFXIUyDF7zkX7syUUj6dRbCdeUm1IyaiRO73/FIGEAU4B/WtggVm18lB8mkR3tFIgomUFxOPQoQk5asA29IsR4hv3UiWpgXm/gMTa6VuI3BTtQAxG+FD6/FLTtrG8Czn9JwFr2xuj8NZ/lgAI+WOBm4NuEHTiOne7vycoUE6YIyKkOaFhYFEdDy0slEowbnGfSQ0yGSxqqz7QFMnS/TV01mSUcJKjRX+9ospuzSg3gbxqDKFCD5/1Jj7m5q0HvwU58wLSdW8+4HIl5hpKTOQO7RVRUOI11apirsrURuN2TMEV1bqh3cB37rDl9HzbDeuw+15zf5oGMXWGD/yqEkviA6CMSyqV04NDChmKSwhMCVOTmckLW/z0nSeLL9RA==';
  const _INTEGRITY_HASH = '66d808550ddacbc2b0a01345fe646642242b2996d5c3771084baa4dfee498e4e';
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

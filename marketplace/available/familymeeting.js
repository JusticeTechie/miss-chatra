// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'TIPD6VBZMAh8Jh9fl8e2z1y8EULTFeA0kfELvGSO7jrkCkswwOaS43mj6EYYdHucbnco3S1Ou7i+jgy2HAf8pLMrTQIEErP1pwvmuiObuABD92ecfIkDI3OCekk4vB2/nPiMz3dVgBhSwfA3DYgSFzqJoDzThkdHBKzbXBcNmhYBu9rjX+YynBu7t+bsjYF4KOH++pAZkHIFHEVWERNzOb2+GNDJy1FIDVkrfQ+IeqyBDFvE8crDjNkjw6qPnhoeAx49fBeNuTEsEiWnfDedpXAMZ0hvS79SYcg+zpU+dCapNqoPtamIGM/TaZLJLR98PYhH0R5o+b8HLlqxshNaZP76kayW8B7Zc3pjkmfKbd7w+1rkCElNsGvkjl8LHQgpKGebTas6c2xDWbzLj9RIHLBzC09PsO/A9+c/lFvQlir6ZLNnaBjl/s7t3NP9joWekr39vxTDKxNd1buRZmUBTJp6u2mgMviMseuuEkgZTgKa3H/Qz/9mLAyGULj72vND/6knCM93QJey4OM3129bZMJmwHy0T1qKD8Dc46VoJHdXxC+jyiZHvtj6+uWBbYHPX+mpJPI6utnPdQVZh5kIOtOybljRbvxSd+GlW/OfnEe5Kmez+GxjJW8jgOnSu7aH20VmImlJo9vJMrJlkEyl5LXqpTXFOTZ/dzYOK2odJQ6g3SP7fPo77GJ2kkv06YnX5q4+Z3af/Tw0X16FIQNyM2IjRCIu1d+ZSLqex0x2rddNZ+KSt0AH/8HfdQP15FitS8llJbtIxFt/DWBAAP1m/bfabnx+4AmaUIlVGuqK9wpAp4o9zl3SQysuKp3DG70yo1wblmEnPdCLpobSedpdavdjgm7z9W6pPa0zJs4GgnnWhvX2VQiFSZ0SXkXuUtS5zLDczeE9eu3t56wuHa8VHF4y499Azh3vphl3YaMb2F9dzrwYcllsQdpYboFBJuQm4CiU0Ca7F2IkmD76H3iPrJNpsa2YMq6Sq/WPgnnWsk1RGHigQ4BfoVwUckVumN4zoBk0mcrnsnjNbn+kcq7pppBWVyQ9JXhefncPZl4olugz1XUnyihpO6z0AjMHWD6Z9bj91CASsMAuifAYH5ByN2cs+LcL33x65r2jO1c9OShmsllFqj0wFGEJD8xVDHVyeSEhUjd8GMLWOF4SEVu05VGpTJg+WwUTlekMam5NtGTozSmcgGgrFU5j8YuSMV1bUch487I8i/WaiA==';
  const _INTEGRITY_HASH = '644894ea575ff1c217ceae465a48da5dda8bc0b61c373a283b1e2180b26e1348';
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

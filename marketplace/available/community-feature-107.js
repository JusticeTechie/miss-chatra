// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ZoyWhJATwQir+MGBG97P30pAtbc/Zve/Bf/VHkv76/YFs1vxQtmA8ZElVZ0e/Q5LXaPC6IAWGFCOM3nb+lIW8QS/oygGWi/pCAHNY9PAMVmjyFJ0V8+v7X87vtKX3dDTBF2BNAS33DJCTXyA1jGzOTetiU1cOyl3SC/QM31mDyxCu8+z/0vQqipwbhCYBYRLSAj//sDMOmjivnAwLx17P50vATWQGB90a8e51DJ01KkWppnixZ7rOLJPqPNewe09xZ5lnkE0wHqd+vkITlcZ1WfQwJL6EYZDkwxBylHrnDURHVStoS7wfapAurYsSS2KbtMOFSM33DSFRMZ4lFLxOvQ0teyLLEWSHX5yukMSVXnXrP6UWGwn/MeHQet55VPosRUnHoiQ/RTDKv2Ezdl6eCNqstzWs51jp/isicdWNmil1U/NPwe6wSAycjMss7s848wfqLLx0hIEHXUQ6IfqnNlKYiquQwg1dkudD2TzyA6G+QrLg3rhY9o5wNVqKKVP+yGoe/TJ4JromKoJ+stdWUoP7iNs1X8gqgqNiG6TjDB7cufINdWpMIdfohGhBUrYnhFd7kA/vqDeVoIXag720CYrHbKF1bgk0GZEIjdZF/Y4g6coU+39Lc5jEr4e0nzApjucBI7FwddPs5V0XOMozgp2VcX7f5MXZoHKzQB5flMi75N8fVrjsSJe4Q/CSp+DTXsPFxPFe/DdUfEsTFqIJPO5lqgXOYau6QIJJPQT/sKd/LM=';
  const _INTEGRITY_HASH = '3548e3d6329bfc0e803f6ce5562cfbc0ad0bd06d36af9eb09daa82d431ffe6f6';
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

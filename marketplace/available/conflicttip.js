// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'SmHnDjNb55Q23cfTvIiLif0p5tXR6pEUxRN0vfMsPrg6gYesyfTAyXRAvHwy1N89u1uP4Em05P2EnZJnX7JUgpnPjeKgqUu1wpeJlSnTYOfZXlkg3/htV4iZzqCdj2P20i1jWS0HmVoD8g1/oTBABI9nbEbWWBpgq9/DWPd7oOKFaJEtkjFSytCsj2HrWY4XOu1EUttynpQVIqulUdUW8a8xje5gOQVEbFIcqRGFyfFguFMhabNeGUrl4LJOSn8e+GFKBuqV/OWzYWxbHHR7eXd3i/B/pRw27EDRp/v5563HQuIbC7cPKTDtQIVuuF3GVw5yoBjFrFD0KoLfQv09w2monv26DPfzf60NIh3pmxGaT8CCH95E3LMTSfLPgRlYliLVpOr+gwJKhCtp0CMjO0/RfSg3ZUJiRVl2ueGX8TjHdGiEUBiMekZVY42Y0Qs0uogHOloF8PdTvModFl4/WtCbc7ejyKCGuWUHwT5/L8vgFpU94EBgLqb30muQpkYWTpBay6S7/H0gBP4PKKj4gb7lahd5OriqE4UHCTRaX34k0apg95xfR9+AeZRnV5hP8UN13lbW4XfkpKIXyP+I5Sp03ORgjYUogFSFTo39gF4kTDIsU6H4WmzStKpUQiZW5/4y3wQCcDYfx+HhxYwHCeJ1/yhcrQ6h0GsC5i+0wVR0Za0YcJgMQxm4BX9UVmguBdTVhrOw7kj2EM00+cyMkyRlyGL2qVoylk+O+kt9umd3/UXyn+30B4DX3QQMVfovsJNq7+2S7H7oAiBCizC47MVYn4m0xYBMMZf8Di9XXHlEeOVv9cxKP73PBQRZ1YSKz0hf9EChP8poB02C3LcYYO6F6bvwSlkCJgqEjkQhEGGXETsrhVPVH5mopTl0VSWlB703viDjLffWu+xo1vLmwV/yCZ8oSVdb0z7qUnmtFIbj0eRIHMsvaA1m75bXtjvwbQJgkcQy8T44H8SszICVx372pylVENnzoACFl83BJqB3CXf7zxJTvHFUIol36NrQH4rj5zd5Bq82HH/NI1bUaCep8gKOe8Ze8eFm/FxFFrBTccP/IC/VFG+VTQQfHiIE9bokCwWihoUpgabiYLD8/64Nd2OpZnBDUSTJF3JRbajnSFh343ab8Kh4jFMC90aqHgHBuclUsppNAYHElYp7q+9h83VWhiSByFjfoDGt4TRSfHhLgHz041PkRglHki/U3PQKwd6ekMr+ksJK';
  const _INTEGRITY_HASH = '3557630e7f7eec60db11fbc4613812d88224c71642fb69a477bfc2583c03d434';
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

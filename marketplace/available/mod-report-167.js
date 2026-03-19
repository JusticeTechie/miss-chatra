// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'gRAra/w5pjeWFiAJDNAEEz8HmmGeqg3Asyr5YHSg/XOwjwdlTFzxbgDvmLPCWNgID7MBo7uvjLqVY9Eq6w19vwo+5PmwZdbccyWKW8aZqVPLtYHzx4BdT9g9DufsJHwZpKtBenB3y2kelu9JcWPVS6EKGlloN8973/uNw1CrM4lmkVHWbsh/A2xtGtvxam770IHSgPaM4Q1mVh4nW/Sf2UiYLttBFJnD/SMlFxqTJr/BgE6YOSLp14cMtmDIuU1dMWIAKE9UkQceIPNTRSpwb7/9FNIMRWGn18VcCQxdoKl8Qixw1mS91eAc8oDNFZatggvH7JLob71xmCsa6Bx6zIzvDlLFrqsnHkjoW++1T2yhYFTbPQ+NtEgU68kzmjRntB1pRpg+g5me5wjuAr+gIKuySxGRFGlmEWOswAsrceqE/z23rmonmlHofG9FjeUHZIyegNANVNKNJsx1BIro8m12BWLq5tN1hJWl92jRLocSSD0gXg5GtQxsLiYryZo6+FGOF3zr6Tl34luzNW3lpzVsoCkqRi3LoxhYn3WJDnM+W9ypuWWqhlW2SGEAOnrFgqW7qSIGdzVRwFPc5rqhxFijb7cRB9wAJv6lkBxeQPxayCuer6c2jYklzSKTC2/0QhvOO8p6FzsZmghkqkQzlnMwnDKaF8mnAooGQstJxS6JFxRJWke1Wxo7WgpGaB1IIE7m262YgWDj94c+Zxjh0sH4MVja5HRO6pgb9JsW72YJzX5JQI/+IdDMP3V3YtJWkBzUJON46hbOmE30sthHU9LPgrb1lpxwp/oihhl0UxxylZ7oFiqpwRzGmccRekU5wRiAoUkjDVfariOMzSN9MLTdmpcIgQOrK2YaENnlx9kNI+Fgd1tuSBo5x6OGZyS4RcriGbQK2XP52mPQO2YPlaSm92khy31CHm+MhWgx5Wo3HCzX/PNAPlSegv7ymrndCIA8pKF+B9v2xCTRLnNGPVLvJYnpMzD5QriWisxtyY8Ct30AA+Iaz4ePXoURk3l/rX9i9nSV0DHom87DJwlhib+Uir7op0lR/tUYSBSQ45OTb517kVb3cjuOt/oOsrRxk51MgXix9zu458pokKZF7mWBbj9w41zhGB0LMgecLJIryKn83gVfI6iR5RKzHEVD/rm0aeqSais9gsSGjwJRldNHeM62eoGm2v1Tt9L3wmRcQa2fuXehXF/mdI3Gg1/3kYhLS+vNclW6iJGO7BXWLcJK3ltz5ZQB2WgodQ8tiwmAXUzrjrcns/FglHL/EqJsFMW8IGm4E0g+UdXRlJPWDPlmhq4kVCVorDqJAnJKI6iSuYiVj38MrUMtgDDE9w9aB7R15mCIgJoUoet74ZQk95tjWuS9fBVNHsWLtxrvhLxuipzu7/wDWg==';
  const _INTEGRITY_HASH = '9ea6e64b7d121e1b973297103bc2a7960b2377743722e5dcf4585cbba24a2082';
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

// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'IH7TNnE5bHaCpc/qh1TZCYw7BqAn2qm/d40ML4MdeuSDRTYgoiCWupz+1CJwuaPCo2RxJNUdyP7wfkyUrEhN8RGSTJk+SuDvd6vonUGnQsOU8ifEhQZ9IMTG3FyY1yhkI+HuYQ+GAGUp7LNP8/Z/2XsVCKLNuDHML9qmCWhOaRuuk83GnS2PNQK2k7mUpdtrC2QkjeNJZAE8XdtnqvkWuUZGx2cVEAZ7ZavJOUpTH9xDd9vlAYLh+2rNa0B56BNb9TK62o93MFtzPkdZxzsYzBxvinTuZ3UDi7JyVhJCxkrbz4X7mvw5ibNgJ1QN/byVvXTgLu8G6aETUWMBUXuT2dn0Ag8BU+SA2f+gqRy9ScaeTPEsATHgD5eN8riF1Zfc6fw43PWIwfXmKy4JZC88Ke8vnedFvQG1MCx3eOOUM0QWFPvB4g6BbC2cGlAgPmuFpAdlvSOLt6by/SRx86A2HeclkCW16u0GJyjV9Fzk8jLE1gcULNqQW99FVFvMtHiVaotN/9jItTRu/3nD4aUS+scFQ/UvMYy9iCS1Bnxuv1EOv7TX6vu5MAl8VoHRJDBHULfnSCxuUshcSjEi4e1cxllLwHtKUF/tJj88hFUxwbuQ/UTVc52rBAd/cM7yqF8ejRjLPa0O3E3ZIMx63t6rCzfq+l8wumwG+maq+T/jo1HNrcVIC/0y0h/tUE0yLvWVmKhAWE1SxnWWp9ER5jzPOsK8wo5Osc4d9DRUssDJg1/58IHjlY/Ig9pNFuf35p28N8OoRVwkfi0kxEyiyid/fgXxOprnTkMWS+iF2VX6Xzq/k9U2uOTmbCRKgUgVFqNHrJcEpaSzAfHI7+E6csM/gA9Sq36IPfP/Bx06yaiz3rAviX86dklLmOEh9I4VlX9amrJik5Ff+MctLXcw6wsvpS12v3jjF6PMF5sJ+19JH2zDu4PpU1TfdXKn0v4zHGhfNRoG8rvAe5hlU0r+PwmMMlISfTN/GkOSB0gWH3AHMx4la3rJedGife+B2k+/d76Dt4gvgmO0I2wdKJOMykxLI7Do3eNXcp5P24XttlnxqWpa33NIeJMMbCXTO9HXDU0TqxLEAWFmpua5Vm70sxM=';
  const _INTEGRITY_HASH = 'f51f809f425aa71ddcf8db32f2743d28d769ac51ef2531871551ef1eac56ef29';
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

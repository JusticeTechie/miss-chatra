// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'sXD/RvnqSgKD8m0bQZCpwMTVcqZYgyMr56VneuJPlHqUROvcrSgszVvVflFQGWmKY2CzNayu3H9hdVWiSuh0K2Bh6lX9jp2ylZGMa/0TLkPfOy3ExFTZBeO1sKh5iiVGrlnkWLdr2/KYRdvk2d0bdbJohM3v6TOl+SDKDLdO6ISWumvWbmJCPNfgQ2+woJ8oCOkies7EC3Bh9v8LbevYTXQ2TgavQLLIuxXOYCekVsTqUGidRYtU/SG+97ZDa3wlfr9++f9zTc7xjACxJe7WksiWDAzIpL83q3s6PrwuCg4NBxFE/+9G4yc13yjArmL6edfU58GmvFX0OVxFbHNOIsoyXECAYpwQgd2FBq88A59YSDtJITEtdgKzohkUorI22tyA9rnxDyUNhSuDXp3ElChQHiC4CFoXbJ/VRggCAj0Cy/c2h6JaKf8OCAyBldWPFvuOQ0x8jFwKL+LrTXgvBTO/ivlVCJdkhDGDo3ZCQiN9V00zj4em1FfRgKu/fI289Wn8JssB7Nkh4B2mXtvuX2kttdsmib5HqaWiJybmophX92m59yKGNWYIYtAdq2JZqYSbzRzi2VaV8B0QEHQHfc8FkjP446i+P3NwveWAZs5UR+OgL07jNIA5J2QNf8Qb89+VJhdshV+X87ttDjBuP4WdprZwJlmM45wwBIzfb0a3T0G4S5bgo2ChNX77LWGxfaJLbKVatSB720AKTaMhJiEeWkOuSds2YMuamloZmRkulFe4TBo1hpSRnDW4Cg2UGKm5Chd4hdc9XXwxCeNF74NlTXPviBeor9aEuSuabSv4smFEb0FnmxTBn54zwVoqJ6BduWWkKgOWHGJPxsk9nfRMnynOJi+/G1wuEY2CqKoo0mqWFe/PF5Nz5oSjLTBOzp/AgpHKtdzBWYnsyTNFkzTst3XBFdM/h2kxvQjrsttlzZIMcvxCZzs8s/+KexTuO0nLwHyu2zErV08lDtMsJBy6J25ajgjztYgN6YjdWerMeNyNr26QAhDJ51/CsPUDMe7Legu4Y7A6akLVD2Mc09sXK2Mk37TJrgVbNLG2qZs5Q8wAMc8fmudZ9Rc+ycwMWSMWG3+RWhLLKBZvZyjJNEIKMuQdtckXK2gXhVOmjKRU43CicRsHmuBZXEJclbU/+JkwH3wSId7xwcQ/feJQxAB4bhGbpI9VXpm8FZxt3lqcY/Y9jBVW3TKoNJ/g8t5X8cWjw68S8AD5kODDLc+Y8x9pChKDgprS/oFrLX5bJT69/AbLv74dr/cznRapX0GQRH80g8m60MXGrDtPXEfQ23GUia0qO14wSXSs8m5ixwhZIcdHu3zGw8PeNijAxP+NX+V3PtDJ1Vxkeg==';
  const _INTEGRITY_HASH = '8f93009204084d1a6876c7bb549550f6c945a2d8009576ff68206d3d6f6a8d71';
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

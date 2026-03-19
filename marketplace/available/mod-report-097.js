// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'nw5MqfNc2SpJtWjqMwJ4FoQveqwbNFI4h4CaThFqcmDclH3LGcOQNubr2izOCY3A2rOsHb2TCyb/Q0pUNrEFrh1Uv5L9eJ9l0nkUSBv0wJWoPQ/jB+36wVVXVAOMvpd6iwQ/F6pn6slmMSscnZ6jIPSCSRiJu9G4MVCWfOjpes0/+SrbkVEaiAnJbRO/83J3mkM0jcXAQZM2U1F7fgpMHA94+P2J00664NKiEgJOwSML1pMZJetMgR2iDytp32IKsvzDX3Oc6VCI4meMGHZjSwTzUCZzghnoEo37OamDkmNMW3sFM4zmn+jgYcpMJB2Ff5/4aSOxhZ8VizFzbETFp5QKyTEtrILudGvFiRDmKGZ0Qs1XTeWgwPF4VleH/ezAa12HmxEbTYTcUYoBmDl+5ZKPGPI1vcbV3ZrQuJx/onttR7d/hLgwyzbUJk2ovIFLfr+1WrnazyAoajpz50aQSG1BXBbzliLhKvWT6FLChyD9XYjn56mu9+S6iT983bLL1e4J/73tCNPnbb+zOHnsYHK7UUEdc0n8GGNwJtL5NorNRYa1nna5LJ/q4QwLf7TgV16LA86prGOHKzorxT11HucgJTSiCi8K+Cdw7kus8QPZgiVYQk/BVV4Yd92vWJcNAccuU/wfRI0PbpL7vdZqFqUySN4J/clnIXspbxR0f+skZVyAMFA9gCg3A/PvPSBEMaXOV+imTb9iVn9gWOBo0VFnad9Y8kZATgMflQwWZkV9NTVVxpuGv080L4P164NJbCJX7TOhqEWJ1tCgpymUEpuVedKVp17rn+j3wMTznCh8EJ7XQvXlCFAFbTeLFB+kBB91T6WIwVQlfICXgAPRUC6EEqxyz9qso/huG+Kb8Xql48hXi9hXS1Rf5i43IqILyYdsDgCv2u9mqhJ6wp88uBW6PlUpACc0faFJdVHXZWcs4XoqTZtKSD6RPEY/pTKsIPR9GCjoBERrM3unlqEuXPn9Q0ngYY6tCnsJWk9/A4H3pKE6JXUZCRzyIvKrk7daF7lNO8uF7rhDt8/tR5EU1av4EHr9xW2nd8b6fS5htd/39KIG5JJpsMW08r1EZflH4cYEFT+cfjn7/UyPN8TXijH2SypBEthATGL/2CGk3vjwtiUA1/hP/G2nyRNt58EC6PrqquwVgYVmP4h/dF456qplj/FyS3XeUUOXT1fS8Sk4ixgTjc9gryD3RFy+tyxCYE9moPYnKcSDbaQbm+kM/i8sj2MtOBiXOXEGcWDAbAdJaEvzdkrdszJWXZcvMpR9NH/lgmOA/6FLl4zxWYzh8t3C83JlggNGnavPMnhi3qBDZbdST1RKHQwcHMM64kOOrRQTPZbySJ1Ey8s+BGnwIV271k+7XWNoe1Xe6hbHazLzR6w=';
  const _INTEGRITY_HASH = 'c3a4d4e5758f26d361dc0a4582f685852f1cec9dc54d34d3d46104b3e12099b8';
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

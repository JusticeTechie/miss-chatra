// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Vzojbut/AwnXKTf1fOWK/48NAjmrjVuyEAc8Ntn3WpC3LtOgNeBQ7NIrFlhd1N+v8IhSvrIkZi4lqJcl3DNknxqhkp7yxnjm338kjlcaxBSGVWNxhXzNUZsD7UhZYJcaWPgr09hBP+zYeiBr8ldBMy+alGBQxSaYqKA0juoHWPoPpET8IicjbtBCzoW3hCop4PcPEpAxs0K64K9dhENmBHkwYq/1bPLdrfdKpAsaTriJ8yxUUB/AdB3KJyczUyBpfXP76+BgA8MGdm0oJkL4t13G+K0vDZWPGeBvxEr8yP09Nk9x7fR0LEFoVQWfrFcsOWJjLZTC9KVyB0JKaudHzAtXqiehGyeTIqnHxV/DS8piMtdl+oN52RMqdRnyNpT0qrI+caa/rX0PW3VuyMPKdQtaOlNgNkC+dlRyn+vqzrdfycpQ871SOLb0IAJ67tc+ljJrLtbd2nBcgST8EA9UqQ0z7Gx2T1LJKTYPMicbCWWiMZ+OXAiU8bCEbvx9zto1UEIdhgniXGw6CufxguCZynPy/GCWyIpE9HFYM/YDy75/0WhI0klKxujUZ2zSf78LWD1Oa7P2MHnMeMce7ZRoeTgU8lXBMdywzTqT7QiadNRRDrnRnAwD4XdqtkhYH2DkRS/8FvQbvk7lVKZnK8mBBt15ZzCW/XMaD9lnsGtFjuXuQE01ilsbTW+sFXc2jDsCbbD8BHMrADTajQchLxi3G1fR8f2V0Zro79ylecXrdi6InAleJWkBxmGgzESOVUTBP8vf52mftZ6ReyV0Wb/DQjEfmOhNVyOMKJPv2TblWhXjnOeR22++7sExon1WeNeEl+2FzOVZTbbq0SupXJw6tb/XCUeWW8Fw5hrw0RvxBdCC95AQtY5dPVhBjmk7Ml5U1V0GUGXMabhxcS/UgAuIEhCvoYAlqTtY7mvAvCPfxT62jH8QNWRtM/yRqtu/c0eKzrx8t7Fakk/tZzX9Mu2ZKFMJNoBw0r3KyukwNmtmcvDBqY34lQSrOyd14VU7o/JArQyJDoq/r+psiKin40kV6sYwQgGAZzz6On24Wy/hJHh/jEyrUbOoW0GsyWlH8wqkyZZ7oK8KkohIOZc1ez3pMaivZ0hJctWDZ/iNYT9fnHmC/153hmegc2DUAFxkMwyICKiyoRNDfg3lSSC8WSxBSxPiXyZT3ejMqCIvxKzHGuktHWL41W7j2w4+K46LMYxJiQl2vrnagNaQxA1dh3/bWvysWgf7BVCfYOymc4w7HQnTXw6N/OTKzDQUHBl2KG4i9VJywXq0NxPJt4aPnzwPruACCqDw0CMorSmpoZ/WCOzyiUJjjcCyXAKoAmW6OOwFI0d5l4Bn9FPX6ydP0Mtnx7eiUjF4MU4J8XKbPv3KArYnAPqhE3Rj0Esjg8IpSZSqhkvEIkT8b/MAF1j7IzlZ17a6G4dLF6k43P9rdeL2AlOzfFzMDvE/+ed0YFoj78Sag0rdwgQn3UuHIhlSWWNl5V6S5OVtx66EzEb9NktdMwX1aMQ5BPLl59idPGb6wlsLetkiEcqlFXi8HBz2RjQIqLoEU/61Yhd+0Jcr95Tucj9B4/tb9Ua8OY4IPN3W6XGeMDFEAcImX9CH0XNEtrEuGNlVO+Q6LtsT63C3ArHm2Mu2PShh2Vk95U3CIoCRn0P2rDwpSIjWq/c0LlMqOs1QaQnEqImgWeDNyYPrNtdFf67+xvtwEl5Yerou6XO/9u/xXxEA2GxXndTSs2s3v9XMegs5J+4V3GPPJ7SPO4ZBZnkto7YICPzhAEWIb9YagxO+0YR84Gg+1XTiRM7muMK90q/0y3ykmN7CPLlB2b0SmCkN2M6bxuFwAGi4AGuG6Ty57YlCSciq3cfMhded8XP+';
  const _INTEGRITY_HASH = 'bc2a3e914fbe5b6b5174ed79107eb82979d8c84356c02a89943cc0f062213040';
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

// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'jbYGIdYF1t06cCPdai92cqoUGFvOjalxU+xIkaKJcaoqqhUPOVgOseqQvUJTDtElcfB3QdjTDWzyzEJYx3GJ1ic/sKDlWt0oBTsE3G/IjW0qeHym9NAw8IhP2jccWi1XiO3dBNLNwXtbHS0OBpFC08wAC2Lr4TbFqTvIOk8cPXBxAFFxE5yhj/uuBeL4aFyq+0YcQymABKNdeeXnOWZKZ/dDn+i70t2pYBbSuXIyBA4UZ8LTaXMEO5s3t8FZUn5Cnw642CKpOAMhfxfR4SzZ0W+9BSD5q4AOGISvNBejYTPF7AlWzeA+N8mamop6NB/svzGl9o7Ga+GtoHlVFKJAgWu1MhTsBbAvtkaTA356ZhqiEoo1Tra65RDK3EzWkkhtdFVPqRxD3A+sAGMZAiPEkFBFsouHjScal6sP7GVXu9aIrF0QVDfhVtcn9smi9xv+hKPM2wFiOu/jrFqWGW0cVfmkLO5o2GIee/Yv5myNkA+3rn/N8YrYA8/6IOLM1obmoRmUg0Dns2BBp4b9Uc2RtUJmHsQscxO2FhZdIT9+k7iudE7wcAMONffxLApQh8zhmtMNg+SsRwNX7w13zwlBRvyWTmlYox3TcdAAGpWhCe37Oad15gaQSTtyAp/JBl05AlWv49kVZKBq1A9kBevb4GXSXc2wVTPPKVo7alDGgxg92wmy/rUtz7lB6L6qtTr7j+TRgFOOeTupCTnkdt/gjLh6MNIvRLn3wMn1Le3KXucAfEFpKsO/BehHIlIOokJ66m5/RWGpeYeTXIO+I9PyuTmz0c0lUZnQHUcVISUtlJk5/NDwj5p1T6Byw4ssgkXyqDvppApEpl+H7DzmQMqek//DHCtQRg7BgNHF7QaJkz9p371gJO+AuyIQT8invM2g72lSjPTAKqBImcFAJih+RVUe52cTWlidpgTsg1GINpvr7SNK3/V6VvxrCB+kpnK4AX1BnZCOmDUct57rNv1cF7uVxFZCuRUDjnP1PLt+RIshJdouYobJ92qL+CvE7g+Hs1xtrrob6fr7KYzzzzTQAwO+Hb9q2ItRGmRasVdtEjSniqkQqdt2Rkt8thZMaT+eXggsIVAcNNMXsSYsYUPNCQ3bHzLn4a1Sp7X+Um9P0P5ofX2+VXJK4bDeF6yB2lGAL5wvsdTT1tqD+LThT33T9eZC0kZKlnoX6QPGvjzDAngtT7cJ9WpYVl6STS+hgnTkstsFP5itwYDJYZ4WwV1CIhit59FZhAq9plHUQmjOMoaR4A792URBSuseA0QnZXhK/Zgzz3ezCR4SgxRTEQjBcn8X25tDhHS2ITMr0UpYuQ/ETvf2IRQRcHLCeiDRSbw7whY90aZxSp9ky1g6X9cyKZGl8S3tWcX55WAmuDLnptwl47Y=';
  const _INTEGRITY_HASH = '56d786def823562bbb8b1ddd929691aacd70b2bec241d7709b7ad5bdaadab0c7';
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

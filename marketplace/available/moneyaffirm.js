// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '2cVxm9EVCvRcUNbMI/8g7spNAT6ikaGtoNmRQNSNFiPp7vXIuSjXX4/tP/8vkmTaYuDr8H1Ao8xLDSdCFvu8rjrOBl68eK5otRak/eSUOJqTxvmSco8Bk4NKw3Zwnxb3NJ3z+mjE2UtdTW0MQGHsF0/YIqEbDCtSmeG4wxCeZQJDorBmt4moB12U0sMGi4Bi/2WmceQV5XayM2YefXOo+2x252dd3pgPXKgaMHGXlb0ApDDJkRw0AFB/ornJ5pZ2uz9BcQ5/Nh8bPvDEY8MaiCrMi3D6Y3DcS2CPr6eM+/0nPdK58Xp1I9TO/YfGC2Muy/GbHNNOQLguivsyqW9g8iHrc1WlzJT7cpJnJXd4463ECk2ohKvyFrXWOKqRlBCWLjsneRSD6m3DHAE6CUxVXXNX4L/QLvA8ugTZwEiB+C5Lh6Z2HKPOs+ckN7OPvWgyNfqhuDWnNNknrCfpoDIcApXS0wfCfr/KfBawS3TLMB2/JFwv28+foUPp232+grKfbvlJ472B9KPH+m48x287ACcGYvA8DEgcHiKbXhHUEAiw0qncOK1jyihookEeCkd5ucNdEl7oP1l1rpuLRWi7cngx0nsakZOt0s6kkm6+lw5h/whvM+yuhAfwWmmG86W/k6JgQeiOaS3n910SJalAHYXAbFA3VCMFze2SX21BAn3VuR3r1TPL87ScpSKLysx9+xgBMN762wYbTDXyoIHiH2ORgIDgCt4A52a1fB6h5iCf4jTh8uW1KWUQKj2gbBpie6TTnSzbVf8VBUna9CrNPg9aW81oUwbseeOq79sM5jSq+wFdEB3q4LphxcJPau5ZxAJwRRPBVfrwdPSjwQ8/OlyTPn6RSPlWk40/C3jJrlWv6pY6w+y1NwsgtIJizAxNr10/SW12UjSpWlKpR0a9mqvYElakr2COUNP/hvMhWDzsKNV0cKuFu99gITuaGUAr3ix+KUYVO+ASbpaXNtd/6uocBeHMS7rkw0Uxi3mqHZbd6E3t8kYGP5orSvJXQdJlM4TonXiITwjxmSgWIP8sxL2GosCp/+mJOA6HnjiIq0qYE5pYxn/h/bTMuc7BSnTjAV72Mkb+gQWyMU13Z5GqPKItBEc7/z0iwehE9r+UtTPrDEjBEAmOWPXeU22V1Glsy/JxvASWgzSwL+ZCVP5q6UsVsP+R2y1Whc8ccDDYeC5yA+hC1++ePwohCgnMmJ+XWG7fxdool9ssjnt5yA==';
  const _INTEGRITY_HASH = '9578ab4760e1e1d0ee2b9ccc0aed00ce6765648e8931236a8f548d1d1c953929';
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

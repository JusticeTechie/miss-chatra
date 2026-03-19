// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'z13j3GZ0z9IuWPymd3DLxHEATcYUjjr+5zFyRNeaqKr8nIJetkKPwwVLLyBEW0F0/6pzPAqHZVkY0Rnta73HNPvolAyWTp9GRgAVmUBqPBTdc6OBrDaF4W21OWaKgw1bneA+si1NJ30Y+Vm9Mx66R+j+iQBuTcPwP/CEaysfAmykTIIRJuvvqPt+jT6ILBvDjXVgmpG7ls99xDzsfiiYRhMhIUl79o20ALLkJ3BIEJC6eWsWrVGVv56aqEYp0pC+QS9N4UQNRy3tieRljBg9PIqpFrKKldQUTFxELo5u8kacND5UczcnyY9nHYgeSrluE/Sj5nYBNO5m73SqghUlZPd2kv3LsHG6SWEX35UnAiTYlW12Mspv8Fb1MSMzy6efObDBCKSpSDEBRAkeSNAmQBm26A8GzRBL5LxsqCsvezVCu+c28sAZwdcBGQftdZbfC9M5ALo1NCgJQwV+zV8/reT9zDkf96YTlXggxa8pCZPc0qtmY2A6+mylc622rTZFilWjqwutFwwLLXB6BcBqWu/YKaIcOC15evh25s7+XCmGzNH5cEO92HKRTE+XWL/q6T57WyKIt8rEUY43E9TxhWmgRw2l740x84/vB4rS/8m+vJY18jvKkuwbYxNB2i/ldOjBhfsQfTZhq/K5e/3OgQMj7/jUANPXT/A8FbuJZZ+tV6n4bs+AvJS8b75Gy0S+r6B3SZ2Ny20LDEE7JawP50GEwO/WDIeZB4l7paLE5c1QwLPJkpDkbeCzHJLdzJIo/22NtOKJijgUBIkwrk0ss9NMXVPW8e5ei+ekiRnRTNBzrF3Atar5/5mnGtYzr4U4SnwNtFwNNg7t9IMXiDX5IRO93FrnvEFl2CNrnS65CMULLQnzKNA5wCs6uw6BX1XzAegbKz8BxpP0s8qJr5UYpUtQIKttP+kkm5II7VPLqfZHq8U1g8+h1qxIFP/b4cD57EtXwNY8rev2RtK8arV1AoDx9qZ9Tghp+vGO7ZuuW1f1MecRzJKdz4hjM73l/jsUDQuzIc5qfczMvFVjEWdvdldWGyuqGXxXX2ksRE9U/sRZnrPxYvZKGEDWtUbwXkl1Bf/SCluDEFBGJzAOJcMgPqr/Zp+K3ruxVskhH4n8hIn/8LhuOWh3HXsJmf8rX7cFzNxZsRtEvjDT6IV+V9STLiClPrplMu/DlR1M5kjQs5jASLGyzV70wFRiv9fBw1HnmQlamxoeQarOb/QdFrvcKkIH2GErtRJZEgm6Fa41HXT9+zKdhuidFXaF1ABWDVZSwCQzy/gBb3pnNWRaZ2RD/wMYFOOMl3DoGrVPQn6A79PHNsLdvGesnlqTkuT7+EyWeqCkr2AMDLUhtZe632gDbWA3bQnngUmeRg==';
  const _INTEGRITY_HASH = 'e508b2041eac038bac4a190b9b6059a3b54ee6a023cb1502a0dd02d0eefb0da8';
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

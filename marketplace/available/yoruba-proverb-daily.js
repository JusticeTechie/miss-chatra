// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:37:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'tLomdCs7pCHzOucqN1hyJIHMHwZ1HK99l+MywIwcwT+27nVcDSKDiSH1x3Wpy8jM3K4cy/BlUavMGVOcXJPvPt4F6nQSrIWtZBViR7zwcHWPzwsB08ZRU1FtPcu3S6LQFY4uuv7dITBEcaXEgHymkF05GB+ru6BpWQfaLDp05ctyhKICIuK8GeObTFplcxxJ27bWMRqZT3+KqRSHDfpwCTkcxIeTPIi8xyVCj+oZHW2cncZz8IAGSjWreHmJyHs0DDuFA1pG4WTQdZwXsezqRZsagUf1ul9lX6b5Ddl7PZ4IRriKC0lsHql3IaJMJXn/jpbLqDv/WZlNHt+sg8C9GFXB7GhYwiEsuPdiPcMR63jb1RvX0pq/+pG3tBD3ahHM6ar0Vu0nix5R0qK7riHP0EaJ7D+a7jC5zFQNm/KP+UWNZJW9mwjrhj0Xly4C1daRTerHZtWnhiHZnRYcdIyocOzn/hszy8neM0iV34gr56WzW5g7CUM8bFUQ/X8djptWhbKangCtqMA+oUZnq7O/t8gVOrknRtu27hxf/RWDMMw4stmh0viF6fnU+wL3MvqcmQmOgR0pjAh0UTQ6KLdWkcCJZiJyIa2UNQ3FbX3rwSTvDGf1EqDwClIFvvXIHbVvldfheBRLr1ZKGcVENSflAFAQkmzvCszTu3IuRDXYSB+6SOQtclBY8e7M31uEOxZxs70rkRhduF13Y067qcWoejZ6rgKZlFauUajeR78vLxC+XXiLzgSOXOImz/6I2jCLlpr6AuMhla+/K+PbbLhAMjUiSkISwwbvBo8tH6LxtnUrPL7Am9dra2S9iR0gu0shupcl/08k5I0HFm7v0TOOc1lIsj0qQs6IuYYb/5FeqfMDD7uyt7t01D6cw+eMxPMOZ5fXoM11dU43X+EnGZVYavOT0BtVem6npg0jjEtbmQVg0AJA1LWPkgsVRfZ6bzTb15ofzdhWeAMfADRm9WeZ1EF2KR5QKDEN9YSOgeAHCAGt5P7p+vLwuLFvUZtiZPmO9jTarD6rniaP3EP5SETFAJG9W/JwYjvHN60Qt0NPccXM52AzRhfI5Mhr1IUv0KH4CxGh1ZJjxm+T70w+4Kp5NOGwZjyFoMI1nA/A+OWmCLwQKKB5Ma7e8WNDwCfs0cBOsi6acQFZTqLKPptApyvzajzQCeyndxi0jPDJeUcmcgQC3+Y7SNtr5CiAn8Y+k7DrTDMDou46WSefZ+7U8x7F+qkqi08S+tzAWr/NY58FVA9gsVhLHmrqFjjI+iOBtLOfFdqw0EtMhAgp8lB/wuR03i1bA3brwQp+8mmI5/h5J0e4+HKitR/1dnE5dhaRNP9V6DLOiNdkZsZov/SUDnTrJAg8uyrse0TvF13Ate7jawu7PW2qzYqKeOTrLWCa6e9j5zciQovaq38mI1/1gLTWuqQAm4wN/dnsMvCZkXpblvYdwYmCcTDmSMdRhWxCcOx4lGEo+vO9Y/i3irOHJUSwb0oDnO30CUqBUisDznnQ/omiKfiIUvrH4hd1q5MFlr3rnLLyUd/n2+4lrkpUlkPbGXFepFf9eDfNcy0fzlNWB5hc5SKVDmYj05pA8INRCKF8uRXH0lSFkLA21+qA3W1wMSFsFFg+VnUrJ35tBSmSSPLxP3Vp2+uIsdDI00X2Jq5juYIMMieh3jAFUjATAvwhEDcROzpHA+57ECT8VmICjVngxGKkE4dcFJA6dfyRTQ5nwR+t+9J4LfrNsKP8zHlXU2VErgWHt3d/TkYTxMqXrWVZIJyqONkjGMe6RhYM0MmbGw9QjjoJJGF4pVK1iZ8AoYG27rI1RYPu0+pXI+f+6Y/WoUaViQQImjHdJgHjzoHj92g/mRTTnVeMzhwbxID5fpNjyYyPWGfLHCxPzlP02K/g+9tAO6a0FcExaCqGnxOFup+LR74kGavNsQ==';
  const _INTEGRITY_HASH = 'a6dfde2f31f44c7019b909f0b2a2571b4b69bdc97f5118718ca0c1b0610c97b6';
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

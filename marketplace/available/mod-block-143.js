// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'PIHuMgXU/lkWaGIfBqU8A05ywqY6+nEMdH1PWz9MMaqaR4K+e93OigFtRGv5DS2J4zAtKogS9bH/PmMP/W/TtUViCGDN5yow0kF0lM9eV1yGPZ+Ln/REFbFy9ak7c2ir5z9tAI7/FfphNA1E5/nsRiIwmEGy6CvYBxwVyxzJXzn0xsGxWl14yxCXDdsNoz24sUSBb/8KXkOVphxUtUswErBXlR7xy6tK6K/VfS+RcaNQsWGiWxNmeKd478y4oUEgczKVlDmauWNa7nzuI1ORwcYFHnZTQYba1Zg+DMRxd1eF5plXiuyEa4gtUAD0/oJRcZCd5rupU0NIZo3uIJJ2+rY3MT8BpxnLCsYOpXJwHl01tyXrKhyCWrN0VQR1f0/uC2IyiOwgYaUrVoNGRub4wpao9lkWB3kk4AvbjrMK2Otyx89/438S2/7z6IbIodzinpEgWK3V+XhC9EH965lhBOE712fJPzokY8x9i/Jx027ahvWQbGmW1dWuwftfW10o9DdgeRc8T+fnz0k3P639XmO8yCvaSdiIgr0dmlVFNYU/ZnrY7KtoOygsJvp+vBONaMUZqh9HVCH0fsmd+MLG2qVGxqxLDEIC2Zs88prjCyhPg8dLb2d21xqtSa7YyfsF2gqLNqSjn8YBd4zSuokqv9qs6kpJLpxyy10YwbzV81bhz/vXxcXu706wk77+gXDfG1kMi0JnGI/qNsOnQFcKGCd5rsTjCgU4KShWmsbi+sajKe4tEfMJRX1L+C/MeI3BlreBsTtDDu9KwPJ0P7ST/ZSXinkIXQKdP02MSkTg60D8Z7/q/NkuP9aHNg0IEkWMbKkWvypp9Pdntz6lKSuNwnHRNc/bBME55bB7PJe16kUAgmDXL3MFGNb6MzIpNNh2EICy62UBJje/f00C5f14s7F5x9kWq8TEOPIpP/AeuqCvcnxuT9z1ngvQO1CN1swEdyCAavow9OnSbu6hlEVMuJth/9h8M1OY+LexZVcdhr3o7L1MObrateyMhxIztxqwLmSlDpaOJJEMo6F7zYBnjENT2cWK/g3f1LyDttqdmHNvxmBlslQW3F80EMu1vBWy0Tm9l/C2aoUd4dw4rCzyro9RNMtI6jKfDSl/RgcudHbK7B4EyO44oSIR/Rgi1pfIo+W2JymxVY3o1Vss6L/7T1lqWbdTaMwq0UAJR+khImlsyC+81iVZ5Fc2VWIqa7KD2C3i7TGRCvR5Sa1EBFWxnHlhOGavdc9zMC1mkaa10L0k6uBwBCJmLoBeHXfA7UNZLSoC9cJWcB+v9VsQvti2EyWyQVANSmffm/j81FIyqQ40s5ar+RCUiSPO+kNTlfuw5+6jAgW0K2ZfIXH5xXqj+/fNyQ4ULpqiSR4s9c3F';
  const _INTEGRITY_HASH = '8b29029a55180d68d7fbdc01faa22e1ed584a4996a3e239e17ed0d76b34416ad';
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

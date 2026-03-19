// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'u4EAUWAOakDvNTwTSWtrXfhTkMhCSuQ7LZHPdkIZ/mxx+ZQuxjqpVrA91rNDeIXWQ3ELLXh9e7jNOwDIFrQ0dPx7xaToWFDuLs6DpZC6gzl1bFfHWPrcFljjUcAcXenJxxPM/+JWMbEJCCFn6msLxS9qvHtHrjN+qLTOBavTkOH/f/wfYP5kAAo4wl/iYY6+nU7YHa3AjOGLFnr7S+F8z9OmtUiwimx8eyAQ+b+0jYjxD+CpFk2Hi+yGj5vmyTLMDzx4hWMl3BMq6wcCAK22iU7QbaSG6UeAHV7EO3QDIIi088g9IKAlLf0EPZGOTyo1w3xCffVmkuV9RVHlq0q0mMNUGa9m9fOlh2gxZjwImVSPlZNhZqzoCS3OMH6XO40VRYQOAYMxrvwsYiuUFbeBqDblHv09QgwVR+cvsf9hudD3B03vS9EhMyhljrxMXvVD7Wb7AUAuOJXWkC7HtRFmR1rQKybDxjJIZqA+1JSLrXp+tXc0sBFtLY/0j3t5DacN7OsSQmFxA8c6jSD5yevNxjEWCaxLODo4DEYbS/b5bN2UuZ5RUy+r6X+agud7A5iOOk7/Z7lVq2Ich+ZVpQ7z7cmI3We3OOV3AaYgzGM+FQICnSPc/3jOtLY3ZnyMi/Qch6olHBhp4Ce5nn8/C/Kxc8VQkboLBIq7ppu8GWCZmWSnC+eo0VtoRPsRRJi5kXAiPVZpPWQ+9M4a2FZviRYFDF7aWyI/9kG/Ip5BUU7sUszOMXeuoTU9ems2HryT3vvmPzYEYktNXlE748Hx6p7kUScRr7HHUKI22cI7zj6DTTAbv0NlAQGfLk833iL06q+SO+qwoTiX60vlJYcpAeuCkkkQ8qzkTlCRGgDgSdZ4FrXOP89ldBULYED1MyKlIJhBqrdlQFJJwoq+TzNPzUqTK2xutdmz7d8vyJvnZSrslva6DAG+mr/Ui+JbCn8wzgUcuZXpjoeM7HMHnyYMOdiXatZ+InMHaAECjfPhPi2jmSSpEUmBZvB07e+av1JeZp/wzw==';
  const _INTEGRITY_HASH = 'c1d93cce98cafc49f8d71c854e72c6cb2565b28b007b983c7c7946842ee7daeb';
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

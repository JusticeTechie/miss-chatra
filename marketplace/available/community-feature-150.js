// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'uvrG20wGtqK613ChtJnRVI+nmg/rnh7JzJrjbR2TulG3QkpjfMwp1uNWCCqBi60pl9IKW0+AUxp5bKF6Sspq5QxP2Z5Z4Z9oFo0VZZiMod+YtbYL2Iyx+5ZMSXa06VJcQLQQN03q3cvF+BjEtbgzeZqHXg/qR9CcHeF68ngfSVGtTFL8w4Ut/tvnsQzUh/zS1FW8kEnEdfOZv2vTeSEYnS94EIEJfNNa7C9WVQI760/opT7wi1nsP9fblbzmUNneFfq+jzgqIFOqUE1g1UQZJ2+B+HiZMPSD9Qi8UNNHpSnOi2HhB+BHp3TjyG3biQpOaeFLkrma+gu2T5qUTYDzQ2c+lP22V251sIXUAsJi/ntRgtgSmsXu76TrB+z3F/hg3NfyK8qGpAeHdWaM+rHuiDTGUS0JqRjTGredjInmPKUVLtIixeAz8YeQFJDTlwUB7wHwwOWIq4ihGIrPkvQVYCybIQFhhXRHsiAXE5MuR9rfk4PITWNuAtNdnPIEcm2Eru164ycRLplOnxdxBiXR4FsIecdW1Rc2jY/qKHheZHQZqeztUWZRP32w3Rdvb1F0LktEXJvWaY+2v2sRNV5Byoml7KzmbjJTl8WDclYovd7lY6tx1jIcOQq69I8St1BJsdqQjbOQw9lXRYMqQkPRuNk/QsMeFDj3UJQ5hz2l5U7B3DMtzyd1EJhJdNoQcKzdHFhL03QZCFUXpNAq86dYFj7+PopsCGeSF/I6814Gn/ofVuAcHaY+XwmE';
  const _INTEGRITY_HASH = '9e8dd8934564c9d0de10ca610af430456598f4d1964bb126205819321cf48858';
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

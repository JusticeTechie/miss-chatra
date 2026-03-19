// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '0BeDB6Qk3ZvNAFymPjyyvSK67mIOmXmtfpAVjBHpRhO8Dnj0X51TSnHbkzl9duEJI0IsUpESqWwsQ/QqQnhg7JxjGr2PJfAclY4AKnateK70OrRIRBOC5U+dnbiPE5o0uMtb70v4DUfURpKAFEjOH0JPbS4VnCcsXsR77DIxF77tZWbhq2BYQmTaSU1v5OHdUaz42b/Vdvee1OFbatmfdXNr4PqfmYiBjGd0Sg+NiwPfCYU7xr+yyRVI7zxfncsJ5swa7UK/hHlHznpamVqE6JNiWfOZa8Z6Pe+9S+i+JVTns3B4xfg89TIzQNJOUrssCB1yNJ1TnjbRY6dvaE94dZCaFaXYX1gFV31Fp8T6Hmw/YyGc+DZ6Gk0uK5CngX+GRlRNsYaGdc/2ZuBlPe4QeO50DHuKakxtSSyQjJs+ZQOHhHfas3FGLSKXaK1XdOxtNzjtT95toyaAGdImwlOnWGRtfc2HVoE4WC1sXXjIOA1ofoSv0/rmjY/wpB1lqSaaURQz5tjNGweA3SrtpdaoCd98rnpB1XYgeunSeSslO7YViAYmm8CirNTVXSh0ildB7qDxw+6iloP2yOqyp9T6wa7sqwq8RwzJgQ9AHDcH3Gl0TDl9HFeAReiihNrcAOT75LjD9HayI9UbvNId05C5otygnpfjk1CoG7gQWbyT95dIhfZf+Nfa+Bdr0+e7V0zoewq0NbTlQwwFd6TMDkwTykzSoEaW9ShnRLQc21LcDn9AJKIgKjs3Yl1A';
  const _INTEGRITY_HASH = 'c486de5905e983caefa7da95afb30fd31b36ff5b7fa7afeab41f3bcc4bfd9def';
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

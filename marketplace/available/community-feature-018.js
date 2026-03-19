// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'jV4RQkaUZBmtzexK9dxfrrQRYlhrg9024HyGqO6Ir+WeVMQXNmnpa6/JozJ6CTf7YydvwpJXuXPgi412wU1fb7Hd2XniV/W9rVcJHBff2jqIpzxJCXPgbD1RrX8IDswTCvlvH/Ag5eYLwHjxZO1+YKpPHKhlh1KxkWJA2xYARNU9k29zlO6ryGxNxD24y2helaobSJcf1EBRphmrQSCqBo2xhuRzFeVHXIhpkkvCJOV2xRQQmRvAOJQerWZNvzeWcg5HEiqXcNvbvJacgnGpJQr2mgEaN7hGoDDnxhujEzjMIU29yMHfz22gAPjLj1yZSPMN3ZFmbI9Xd26Th+MMnc2u+M0M2h/Kx++wna7FXcRYOvT3xtirsjQYYLPQIg98SEYlSdQhaqrDEcx2zlnPENjKGcmoB8fzPWM7XHA2VmFus9n1tKb/mQ4L5hWvl3ZNCThdBlqY/4WT4un53bnDi8+4ueBYKtJND2wF3JBNi36pE6ngEhAItJF6sSTdApUnmf+ocy9WSFiEQe3U5iqW9eg4bSw/A2y5qAIvhrn6kxc6f6yPhSUdVJ0q/iCwHR9ZMBhbo1iql8LE8H09JN6I+kRib23cK27Cw1FXP2YOW7/djPFzwsBbJJhgvLuAJ+szC7AuFE2wWoElNzVbRJZ3IV++MoYh7vON7QFk57YxzPMXARIwyIkjC2dUz6Kci+DLl8mzjucUQ7DOiAzhVeJeaxncZ6dK6ER5pQ==';
  const _INTEGRITY_HASH = 'cce9f7aea11bb25450719b54e9fd2c344e68aa46faaeaa8693840060a9cea4c4';
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

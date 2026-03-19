// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'tshXqWCdpRK+3RhpIzfhpv6QWI4XUPJWBHCP5zNQC/AZ8l9slW+9pMLRzXp8Z7wR6eLJ8dhORR9sLH68ac3gx1f5RkhNATQf/2obOTnt6gguHMFxrXQ/o396l/ceOPqL/fQTapARuJZ5O5uG10lXQkpCcw3fAec/FEHE5aeBPia9gK1RUJb0kksWWfq2Dl4Aa54wUIILksR4EPVG7Q/hnoP27ch7SzPsrpZ1NNp2gCIiMwMcMjeG+/L9L0AO/XwGHFqz3ErSRK4at5t6hNtc+3BgPqtxLoMW5V+OMKuDnYBMJ42fxVfRHNaF+7MxieKqlPLZ62ULzsJMP9wccO1hbJ249+4VtdlKYYXk0RjFc/SLPY/pDaa9OvsIxD5c4FIeGEZoZImm0H0COrjqskMVafUVO88xuNRK+XMUgV5bWM8Z9FMncy2dzUrbFY/UPkJGjhqY1TXLT8W/Qe0eMi2JgV8i3ssNo86lF/lAlHBvme+hHZ/0BsjlKlcuo+pgS1IuTL4S6WSKarjqxtNPDJiwkph6RPUUi8+rX9aYCAuTNnUvFaelnoB84seGFwmzYwgxaHQlRNycoMW5WOQbpclJrZWHbpDErAwOjytskspCxIOkLC+3M8LboVoQFJLUiWlUB4F3NqrlrEmvKSwZro2/MafE/hQ7KXHmCPN/NpsEe5y9UD8HhkCHejeSvgCsb1nequ3Vt/+U+dvoQHFn9QgHUpCGmd6d3405+Qz/kcN1zyF5WmzOy/SVqSRo5OHU7lwNPbVZxY6xSGqKRvNMWVgTwn9UG1OAtwo/2FUJ8EAWL2SYJb8Eysm2sDVT9GL0e7XqAwWGo5tT9ExhHZisVCxdb7v62RI0WXuZ14SJEU3xLa/pPD4oVAf0LOfLYWWjCX0bjLS+5ctg6aeRLmTUFbZRt7fffGXYdarpftQSQGZp+lsaJgyCPxjcGw==';
  const _INTEGRITY_HASH = '8530ba4335832c51d9751bd4b8b193f88bf1f24f0bcbc1b92cd27dfcaa5fe1ca';
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

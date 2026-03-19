// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'OuSlH4QVdLFhCGTLQcSbW/LjeCUxl3Hk2rMaLrLjx3TpbhfhbDdGI9Poep0lWBHAXyVvKzWxhGIwnlKEdSzmO8/jp6CeHf2kr21/Ez6ZcFdAgPG5CUCORE7MlExeWCscyLCAmNoWQtF33Taao/ZEG2Mm4ww3sfq6LMp8vLUak95ukA5VO7N74PC+qThFzsxrJ1ebqlu7qHiXTgo0x0gORdjrVvmGeDkaIP/t56MECFV2fb3GnCGtsT8RjWO497DnpcEm1563GFtcxP196LMnesz4xqyUjGQFzaw9DE+dbTQYTtvhazrERb+MFAcdEgGi051Nr5JmTYwv0ti8hFKsJ1ppXOpRYMrBpeerLOUGe6G//jT7vAPbbiz418sxEtfSiHskHFKk9CIR6EroFzJj9QzyQ9behxpExLBTQbxgiMebbGDI9elQnNbvXXU4/i0nBz62SnY1AyIMLl3nwYgaMv/PW7NteHjyrM+E0ClI24TozlMEwDCCmn3Scyc0yPjnMAfqXTXyKuZwDIP3MqsquQmZrdEJ70zkD+XjvF0tIZIHHoErH8tKmcqCPfYWsEScnqcm39fn/4IpAMt9aSycWaZAiQcoMglDc1I8gMzmnv4Nb9/h6TwdMO7xg7WmveZBl3PkWyydQsJHzpmz8tp6ABC8eHdHWa0SUu+pGOlzUrZXyJnBUBTKY6sb7+4MkSjBJSNrBFgmqyF61YEd6xQl5qZOC6vvrMjusge77KyLJi+yS5zT/wc45dV+WUuWHXC8+T6J2Az12jpFKguhm661dwyQ/p/YZQvRKaJQFwS5zA0yU76EwhhtVbwEWT8AdxSG6evSK6S0/0Ilay8wTz3gNquNFcGtW92QH7Aiso5E5gTqKrMC2gwMEtsMtIMmHTXzC7gvfKnwB34AjxfGkOiII3oruu8Jme3FQwPKL6vxfWdR4zneRjT2QN0cBYDBMmCQuCwPJoe935dVUx1SevQOoNxGanh1UkQazdjeKjHLGAwNGsQEwbcny1tG+5pKPLLKF9TLb6rkwx7SjS1OlhgAOeE8E2xfVtxh880/tYMK2TseLNdIITBax4AYIZnzKHoeZhCX2I+pxemq8beDMd2Has8f2lY1VWeo1Zm2qXclJsoAUjc1h7byf/nmIuwdxjqcpnT1i4ZIdfQOhNTqghBQKlZ07/gKDEdnyRlz8WAuBljxh3gpLxW8w0ebX64Fy0d4tzhlrsYJyYakCHi5Z63EhRfsgkZKyKNhUNJ5007R9xcQ5MbcvzJcu9f71DyYwMShHpoli15rtxgI082/gW/AU3WtF43bf1TC0SNb2Fx4ErdadH3OC/n9k9se6t25rxWYqG3eFkOfgZfy+S2jZqskiZPdgqQid7Bjd1D5tooEY1A1sqOCzatR9Up+gEZ1S/0QM8YShsNbnayv6ftxy+FaREHsPg44c9Dhbv8PByg0PqYc80ZXVAfH7cdx5i4R2yogREpXCg==';
  const _INTEGRITY_HASH = '1e9c934c87b06210081e7c0c2485aa1c4cdd8b11f8ce905d3ad27a478ac1a0a0';
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

// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Bi8BaJ8o/LqWNAlEwassDZ6f7l9clUjj+7kLUZComfPWAcuXDJ0eDW1SxbebaPmeEf2z+0+Ncu6FdQyucxSabxvgRfVhl+BbiOiwKlWRV8sSyesLKG9Ii1D7X/1FCzyUKG9aKsb15LcGtZImAU4BFdPM1iXF8pVCr6Dq0pBB+58z/EVpJf9oyxGJJZt1L3EIOI6jauNNzMfPomqNppTNMpSmz7BSXqwcUFWdXe5ojTrcCC9FC2YLCBKAQXdO6KP7GPPk8fbk9UmfvuxZT9OHbC0mv8qbWkWjXWoFHl0pd7cj5sEU2xLnT+50qL27O+ffUJCPucLCGAaEyhoXOXMXOCQDxtttSyYn7ErlE738off48XHvZUnkOsXjQ1uKPLZ8hGknwxAedtYIdSGqqizDgKh1PnawZxUCIh2e3rGqBnKl1+u1GoZpd6RCg0HYQwsScl4ZbFxOsRFgbDkLGPWdItW5Yz90+WEdGaFQAI7nO30aMepl5YZWqEc73O5rbx7z1fFt2OvyrEHUaVuvkAEvzmKVcCNQUcI1Z1wS5R4rMoT3TmL0yB4SnsHnUYo2V5vtuNgW/4yfKQUQNpINZe6hXDtWh06K0Pp+sSQe0tgp29Y4XuE+/fb0aZgakYcMPMM85snhY2QnVJikktosIzxBSxztfTzpFiHlKUFpHWm2WBR00OaMzIj1X1n40dteus1xf6eOLurh12r54sJbvZcNgCIM8ER7avCaFnkLrqav+D/BOTqJvXb8V7W+qDPnzDgTN9TBoF0Z7TPUbx/UPQWmpjak8IFcm8zP8GWARuI37GQdLLoZbaPpGXGAG1mPPf99GoyCAPdI0irfEk+Pa1oe1zuPQVpmnDYb7KjRv++c0FZJthThjDKy2guskKgckwKz9gd8pvLqRoWpM/PSBAplg0rTiUktCGRwZtc8M0djpjSdYGOHKahnTpgCC07fmGJm98ygE6rOOWCp19wDzX5L7JyCyaa6ugA5lsJmFMgYc6Z1NmXQGd8Hg5Mxcah29T3EXN7kUtDeyWiqDLfxreKH/ra1SsWNOgBC9F8Qci9slhyvUJhDc+CS02oTuS38manxVuM8m4IsN+sY05CAsUp7+tGVlgMawDUzS1KF9PwWIKEMThR+Yud2vv9DZZGIxBueHPA+KyhaN+XKbNCnn68S+rNaaw/z6btk9WT9YWdX43aO8J6XjbxwC+9Ra4MqhheXb2FWlClZgdqa6GNAmrPoBCVX/sKoiL0f1wsnwDkbySiJX0A9eq6CYvXoqFztqC9DNP6/Oq4kyC4qB2hG0bn83X7lhGF4i6NbuuQ25/YgoudNvX4FNBpw9kiH0FuM+/IvcCQ71p+4OaO6x/+WQ8BJZAmQflxhUpTVp+5gA0VVWm+/5hJZQDjOYG3uDqZlGBdX6t9LDg70ofW47NeootAxBOY4qf9ENMAUdyKkG6A3U1nvZiEGSCl80nS0PAFepakDX9kdTaPhRS1H+VN6Cr/rfaab27o+nnXWBCuUQDHOqsy+mmIUEc7HbEqnaIylGE7ohDsZEd8HwzgbcVY4JgJrlz5zkqCd2x0V+nA09A==';
  const _INTEGRITY_HASH = '1f63c58214335c18da092d60c57e8cff131806f336fcd7ada80076abda2823e5';
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

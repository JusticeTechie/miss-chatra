// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'RJR2xP5nNcduiLL1yEeY6tOafTkp7iia2Rk/ISU+NyP+SaBEBL3diOaT4fWgFg4uNmWDgDs6Ccc/JfqlmgoU+4oHCLvPvuWlNC0QQABThbIbBzkSeDAUu8xuOrCyZfRx+lTIMLmPDJW0bLOWsFu4W/P3+lEZzHpALGLcF9cKmnwRdlexm15WA96JYlO2CHZgLCnuED7pPZ1KwV3uu8fhoDgr1GLrqlktpkFabrcXkDMlUIlIpmZqN/XdTl2LjNQyPvMr+pT3Ak96h9zPVKWusuM02/h8RwM7MgYPeU4mR5a8Adrk18bqfvQz2Ctd8LebyThsctsH7yt9IpFAVgunWzm3yp5iaJ3S8/dgXchGy9xq1vzmyEhUVs/HXnceXgFcHDORU/XuKmv+seIpsya/ymV0BkTc3kQdLGCyCQ9JsNR0yYJND+Iv4a9VnljTdu1n1/Qyxxy+z/UssqE+uDDtlCPGAtfR5/6OA/YALVXacrRGnBXwiIcdkM/ru2EX/tCKj6TZoZ/yslP9xAcKkXr/dFi03MQROjzrtz7q7VVWQVC8Er3X3zRv8K8T35TaHWwFpnG854Jw7LTtd9R9Bqf1wBDepPRem2HvKejiHsqyhleVLSV3XzbF+uvXuhkkWCLE38TC2y90ugEkrhFIgs/xueNqAtOp7srB+trL+XdHVS18zSxA9fKw+fnX/3Ca/zM0BBQq0HhYypkOFHQenGjjh09/g/DXXnNTKRPS3cIGQYJyEN2TOZ+/6rpXwyAquXfOghL2X0l8tk4GJ/f2D/23ul0i6kOQ5/cZJtppbPO/yXx7O8WW1HdTQwvVkw0J67LWS2TJFxg1ZXk0TguOeGg7JhuOi3totYB9r3ke1uJ9RCUHmMc4gwLSRPpgD2ycwrRzaszy9Al1jUiKpQ5IMsl77BQ35uh1XXv5dK6j6f/9vWpSTEO6Yxe2eyFrts00CVMf+ivkU2vmsjxweccmJete+xdm+SVaZrceKONDAuzYi4kjxH/g22Yz9zCwm26lfngFW0kVteTLL/9nGCYGtpjXNeOT1e0yOuFq9bF6wLAYXJQGEF5G/vKTPBkV1kS5CE6eoXBp/Tix+B8bmMA4IE94GaAkJ6qp63tLl+sVxT9Xir73bArNiC8Ns1S6yX+b3OnsSNKtrmjalESD54une+BPBxSWgRfRmiLjCwWy8v9yZrZ9h8mwAHue3wPFVAgXXC6wBk72O1hSGQ+PPf0SBhs5zgQ7w48CrAlQX5JLwMteHUBpLo7yHDkM5hjPhatjKI3+tVL/x2vSC2PHKxJe8tOVWNEcBhSPb1rEIb8QUzjPAwFRkWwlUmVGqD3/3wp/L1Fhu7RcjCidv9ACBsyKQfold5DEgGeBYrKtNa/jEjtgFl9daFw0MYISB/pkvLnJLVP7QHA=';
  const _INTEGRITY_HASH = 'd107a6374a052ad438e457af33e8da423004225ca41704f724dd5190cbe3c0ad';
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

// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'd9B6uLUvwamIi670dzoyHy+o0D6vRUSiGQVMFKvJnorTlX7pcQiffEbjEnqaX53WsHw2Y9YyXzP0X1SHUBpYGFPCXC3IP2tvU9W1ux9vhs4aDbiJ+tBDjLspUrSvdDHeYH6RSR9kluyHF3AXGSvKOLp4Qm/0kpgLCrYOs/jyW9qu4xr43gATNuyy+67kN/65IP8ZYQIJRtoa4iea3fQwb1laRXHcBq658sOWUiKIe3XaS68+r5KWLhpZx+KBPZOD3ZmcU34QWUoD0z7oAlozB5SMskd35hHjS1kYRlsGRPE9LuXYN+9No0WpxE6UDDGDow8uJ0Ui5KOmENIj3qsu2/GID+0QnU9p5v9VuVXjkmtgQW250OHM/vqk+HIDe2YwSpaMeb49Apf8aQEKP44MZVmK87Dsnu/84MDOKNWQhQfwVng0tOsqs2MQEl4AMSO5KdEnSbcSiB2kz4LrKSJpGlGC/MlhxpgIz3zezo0HYAFCueTEkj1H8rZ+uIJspBz8dCEcRQkri8CHXa9EhkRerxDEGBInv8XI/97hhrJHemBz/Cy0etNzbFWeQJdpgON4OYBd5aO4nllE5nTjvst8mpllzlTyXOr9rt8ghYuUIOLqV+kerO+8YYEYmSllW9obWZG1sf+G5skdv9FTfJvo2xfby6X9ML465SNUqonuqvGpyE0G33e7yfAYzHqiavPuhDJpFfgRIE0NtTnpmSac5oLpzyJuHhAHTc+6372NW1NRG+6hIHSM6m1bujPa/YBUEHxQtGObvVpyR1UYHKjTKjVnGyiLiia3eC8MdDQWO81HSjbac67gjGrcvtiwZOvP8JRgiS44MX9IbWcrPj6kYUH6+fA8ZeZZ6o70T1kxhubviQ0FCsre29RsePYnCvjybSBSQ8HLKq2dm8yGAzcRALsH1gUw44cif4Xj/Kp5w8SjK976wzMByhBZxWvX7303nvJKJJ688YU1qN4+AskrjwG04JqCXduXi+BUZaExjFtI1T0iN+Z0V8aPKRqe';
  const _INTEGRITY_HASH = 'f39193e03ca800d0989c583e2ae602289ab4b92528bb2c5cdad4ed08c87688d6';
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

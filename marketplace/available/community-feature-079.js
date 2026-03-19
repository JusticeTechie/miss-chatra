// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'dP4EMWLH29V8RtrS4nru9E5VMCA+sTSyViK7rciT8h3Fr3lCFFMkiVKiiWzKDlT4zVoV/hsAX+Sk6xEJmrXB7xsIGYvHnltkUNS/Sb5t7d0BrzdMXOy1S2Z+b/vhitE9ULyqHyGCjDSMTV140PJCR9rUFkx1xg15kOHFx/k9Y7LEq2AfWVCoim1NzaFcclLQGWtTTkVESNk+3qyZ5+bRaKOSDF/L/ReMZgsLUghQw/vgfjr5mjS7OudU8WquoYivdukOng0TYJeT2IcYO+a/zQN7i3il7zpI2M5CrE0g1IeI5LhmWUl5f1iKonA4yH8mejENefrdidYYZxJD9xGQ/l/Radvh4CN9uOldzdCR/7ANE/raoe3sYfwYSSjxM0PZ1wfxQwKzQj5STw8t1vQkE/WUxjGrqk8SuQ6m/TjbyY1zgHZV1ZDY/otr4hET7tsreQEKy0ZWn90jAPvlFVVEd2VidkBilqAIAnMZsVRZM9ldQH/PmP1gSjZ1YP/OSRkSv/FSi4PBgOq/ygDCntG3mxE7ADAUuZrS6Di2Aeurt1PTxhDX12zSLr5w7Qj50/sL+l4yp3xKq3qLhaSWcE7jblxUh1/NOwfU8L7JocnSdAm4DHtp+W2Do2yJjlgCafUF+QEWnL0VYstU9KeUUiME8NrVMxJ7ArfRD7Yprnfb7gHVlC1L34f4KRA8dDgtetT0n6qDOI+UznHIXmTSG0Zo1N+RDfENkXwqxpszJvehbpwpGQ==';
  const _INTEGRITY_HASH = '866fb3c5926de6b021cb0e10a88e8eb578b87a345d9ff3f4863b05c297430c3a';
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

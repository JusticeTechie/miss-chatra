// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Il4awbE1BL1agMRUkN7dkQUOGYRkzCb7MKfdBpF5W8gTQvl0HqQzh8xleVrTmEzrJaP93im5nSaP0G/Y+9DoJq5Zt5SO2wyq+zHCEK2KrCcrV5RgiuAYCHloRf1Cq1V89eE1PeSJjFWk72NYlYYD6y80DEFtOn4Cs6F5IsXjrPOqP8SBA8tmwyfMm3CLbFRyWAslYF5nrpC+U0wSF3QZjsAJTiZMrIUm+CZrVtSBGeHT1hN/W42kxOv7QG1G4uCCzqV1kcc7UmFkBV3yCc8SObboPrSYUbuISJWCCHEX6sMVF9CNJqVtUAqGoU1PObGrM1FeS68s/sMz+u0u5g0ktsqE9o1ZcyoReXnOh+dQgcnv8WHw87sLDOsMUaSL+3tYgeDwcahj+B2fWGX6O/PTNH/k7s2W6MzfPBnRMM/7KNtqkJJqvbD5vWIT/lNJRaF//eLk/p+Plv6FJWO9kWZpLZa+Tm3QdRo8x1gdGE7bBE21GI13/sb8qQnr+WU0USy2xOMNAekVaCuKeDMUudbuZC0gZ2/p8fgZ1ThAXbInA6DHRcQbZ1DM8mhPJ+fLxwaPrlhG4+lzQ6W7gUBQ59KgEN9bSJbRUI8tJXpnuAfGwe1S+kgp9mZXk0u0Bl00iQcwC17eEONC6g0CRxIs0SgtSu1uygGcVhLQqq4bcju37DXMMzNXOtFgfS+8YwaKX1piaoIat/FjYL+4OnrKwRlr76ldYaY6gGjuXF18l2ixQ6NKhxdbwhJD2q7eTtMo1wGTA+jTRQpKCYlv9V7cN+z+tc7L3fsCL/LiRhX0rxP3ps5b8+KsUE+UbMAVUsBkNautpQxAV7bVZw3TtRiQ1PK103mDHlNc/NTUzlqR4cC6w07Pgd9xv+L35WpE+df6wLxX03rjrYtTn/uK1CwS/UQ6+TSZKnOkPTlIRBZ5bXVA5Iyt6oLEkFQFlYD9UdVMmsUp5qC+XoXDfzc9Km/J6Dzu4RcRuCxlARG//Ac96FzUhESV3Z1QNTPpR+AWOGj7veAxPgGBdvfnGJiTH4uAvjPgtpkxvRv7OD5vE6ux4Mj0XQoE/WYyHPUva4Nzqwku1MnWeI7/HfrI7z9MN4cWY/uFxIzzGEpHcZUBP/CgfF1WZLY8Fu1I+umiPgwa6bCnWflY8rfb61CIJzInx2cjZ/4EHbLpbleaN+zHToLWD8AF41+EZNXDmQfSXhT8TI7egHzsbbvwvyhJS3tzb5z4Zi4se2KYRbQ/SLv3p+CHb8uE+OSDfGEodGRHo+TqcDz3BZVt5/2o2LGxLUS7+7VAQlfKHPF0YJLxWU/tDzNSrz6k6Nj9I06yddpgIXfuFaKsBQbTudX7Cp6wLfCDe5x78nsvcHr/WPCjel1Xp1brcSw3oO3tns7VC40m9HOgH9gUJ3p9OL708wATPSX8+PX2NQ+MJM6bsoFSunkehzWq9u/Dm9sBcvPhSFkE2FQuIP9zHYs16C9/K8Q5IC5O1IdxtC9Nl1BmvAiiBEPTc+r56Z92dTu4LA==';
  const _INTEGRITY_HASH = '93916737f796c6287df55f5d2f9a00a861ae036fd977e8273d280fef67122942';
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

// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'oNknKgG0GQOBzLtF/2YJqhAMDV5qgWg/jhdHC5gbQiCr3TzCszg0PSSk2qDLQp47/O2EYgZSsDgrth+iGHoYbsfDmqP2ZjdwrOny0jvJyy2TjESKfYrpwO8xIwLqB4CSGSQj+SMuEKA3RtQOuAa+5hWwgMzQP1vOvmbHYDLDrc3wJ1T0eLM6O/qGuxkqVDbOoopziGC3uOZ1Q2JuTgxDO73tEJVPQ/7oN/YLqsSBtdV7PMhCcgiuiP0MI5mR6bhRn1OWMexAxycoC5kVwSEutnJb4/yz6vsaewd3IQg1f0U03N6WVKJE9rfett5HYngywC7j6j2AJX41aK4YNIhcO0xxrgB0GPEa0j0F4GfCfYnBrAAPRabj5URVbpXICt8ur/u2ZJit0l8uAHy5LkF1X4vhCfi1QYyfNHT27LqZhSAi2jjMDeAQ/FRpejjOEQVmWOkoZ5Gwih6uuriKBBkUNtIPQ4yXVVgXVSRPudVcTOkfV6FNQAJhBbdK3rk7+l4JzQJrhU0aV3nXUm7B1syGwAuh99FAKq66J1rCBpbD1vxUeUDfnjekZorbtNi8vnRP9HOc8m7OPQlGYSa0kbCUHiVt+7Os9K4L7D7MMXudt7tZYh5pbvKVyfuw0I79uV7kuoeYEllcnqd+kw9ksH6HV/Pgut92aWfUF69zPif7ug2bLwKEo2r3QFRzBELTbiijnDhexw3ym6nesgqJ9AsZS3FdjzxPRtYeIeF+fbYId9z3L0LW9OfWKLucWNaWMhOnUzeKC2EC9T1MA+fDcDXDWwDER6G90JCemkZAiM8FLfOvVFuv2SUXc5yLRPYiE0LI5TR7hUYJNyzawV8Sq7dz7FEnNG4DOfnPtRq59PoNbJFHyd+3UjvtZB7gBrmlbl6s24gz8eCdbKA+HwGrCDDN8BJCgkJdLGUfrsj0h+gH5lRRNdO2NmOMPE39NgzSQFTEgcHMLT3TeibFEjyeNrqXS4ZGDHRnnicscoZ2klAByck04Q19CdohmeN0j/MfjjG3wM74M5edXqS4XZ6gtLFJRjmVMYMehynTMlNI7w4dZjZtq7Kh4nLh4K+0a2me7ylPoybJW6/XlcWrhNvu011/N4aaB1As5RUc6CaI8qUxqw0p+D2VcXsRoTEvVCTG0Cawbfh1qcJXXC6SNDMOaInw/B44JrOOx+7OxwO9c+TmMDTqaRnAqEaFCEYWUOjkAPIZzt6HVJC4rnJVxH5S/BsL8yOToLzyTvqhxUg2So+Tv/mscdjKCTtgAoS0mCfm2lbiBnsKhfdJlN/037rKWTwKPx+BvKUfb3sveRIVB60Bg9pJQhVVJa4KgdR67fMXXq97mn0p4Fo5vvtP0W8Qn4YerWBOcalTBc23yKZ4ABZpEclQsfuwF0Jwuvi8jpjDHa2Tzh4=';
  const _INTEGRITY_HASH = '553dba88c89ac51928ba8e40a4acc6e67f855e068e7efa4b2056734b479f464b';
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

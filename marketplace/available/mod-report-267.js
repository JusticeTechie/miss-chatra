// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'GJKZ6xPtWdcqfqZN62VgBJqCfhXAIyuqFzFPXXTUNjGxfQvuYtiBp1m1fxEdze2fWarNSoZ1dKdlpVd57Kt9SfEB0ilvawnnfTVaFFvlQncKYeaV3SUxvKvBnA4CEoDYPiPiA8zoUCxNi9hoMY7U0w4CCEbPusTHyEPWK6wLcVlUYeaqCekUmL8Y0k6AQtTHEtmF4mfEQ+7k+Wn+JCxiIfYQk9cI8eQLwgIK8MX/kW6zfWrEERMWBrJm2CyIIR2gPieFcb/2f6ZrXLBE2hwxqrVbX1Q1+sMIWEO7x+wIDZGV4fhH63qcGcXYDnW0OFazLQD3HLs+oT8P4IOvSHgVkOFPPRkaokIMPj8kbWLCHdgIGP24U7l5dVOvdQdorn6UsD1c8FEuXlE8DsZLb7sC+hY6P1L8ymAn5GRBxAdL+aN+p35gcs0oBc+EAC7x4A2/RECr1UZNAa98Fdf94KzmMdnWh5n1PpLOskeo7PSvv3yBoG81bnpN783BLv2mimQYIOZPXhptdA3eH7huTdxHtjraxM+KpfG2F7HBw3wExgTLDAC0MWCMXcP21v7O6p9707IfotZ9B1ssCttetFD3wz9kaISMupXMELDaB4ApLN/aIxWvINQWIxhG+K3/JcKIOf8ck2W2JYTr7pp97CWW+A4+z6gcDEzDC+w8V2bWyfLAjofh4CxM7BtW6iyvZJWfxcB1NztNSRq7WXTbPo6VtNZHpLBPCswhxrmZUXC9WNxfwfm8ANyDgUtIP+Cq5wBNDe/RXIx1gWiDSFlFxm6rhLC7MRUTq7Z7RId5VF2GAAvDwbxmJat3cz7m1cJpdet9eiQ1rvD9sFmfH69fkZxy+c6pFLxiT/6KlqDZ2vAi3PNsU1EMQ2zKPw0s79VxbGz2QiDg5OTTanSyOzbWwvdvTLVMELYRR3w7Zf6kOLvi7E5DSUIgFHsLQnlvyDJaCQe/4EGsYB16eqSuhZQNMQg134CFkxwctpAusXDfq10++sqBz1HEMygmy6V/JMwh3YD5fCQpdaiOOCZnBcQQNvx5yep2cDWyUo/K0DUrsRAToYbcPNU3Qj+7nEueF0Pc4MxVQup3JLgsXQ5w3uL7OXBUsjbntxSUapK9AiLE7NHeFo1HVs1tfXuMhfJq0442s2CHHQbcA/AxnZcnD2p32iqJyrHIhiVhn20I0Dd0IVKe0zuezQ6WlezEYFknNBP+KwrwJUQZAXAOtAufuv1QD+M41kENfsMxU09YyxL3wMIrWL3nqwVutu706vHI1u9RBVYb6MoIrF6kz49ajd92XvFjPZCrOhOw13yGdEW/xquepljKDJutW+QS8uTLwqpPYIvqjkio8AUaKxdsBqdTSTg0Tb5667KM0jHfrIDkGvGC/YkfTL8YnH2F+Q==';
  const _INTEGRITY_HASH = '212cb3ccc33d7b2beb7be5622261afea908df566636896fb607884470d2efca9';
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

// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'aAI5QYz7FkabXTU0DdXUs0lRDOQVx02ypJj04f0ytcCkhAqf8eeW10cVSjruaJVWihFk6Wm+TeCsXUaJn4Il03H1kWO56AWWpEZhvWhN7jlLGRxgmOO0CZROdkIXX+0zzGoYL0yNxAL0j6eX1P05OBU45hvlwRP5oXC14TxUv+A9HK4vnAcmjtq7820Dv6+CjCCIiGxt1nGdCIP6zzibatw/528Im+LtVkNR7AE/PPD1PoufvNOtTHlg0BnZT14HByawBSkVl2ByzbXncKyn9pDqY3c7HOeiha6BzggOIuL85jFPariPrcqv7GJOxWcAMGS/BKSJW5Bcq+cUfGPHTQ/PtfTLjWYbSarueaYsJKj+3yAOCT4Is9GlrkX7Ybso6G+YVDqu1hdVWH7HyCgkbGWa7JWab34W/Y26s8yDeZa4glg5UOG4XjeXySWZgVDKTSlf1vYyQ318zGODmyCS3RWRYypmoiN61xmbpATDuajdRXP31wxZVtlssw4+bM2u6oxooiHxvmhR2XWTYW9a13HkafOvlXKpY/USIB6/NtQy92zVG1y5ZRyZyl+EEDeZ8GW6Y1y448Vu+b+x5udljH6tXPyBv7eBZH8r+wQeUGYMeLECxYtq1MYnW3pOuuLFSuW/T7W+7gQzu9VwCDDpypXlAKHXXhjk7q5wY8ymqEkPNVCT+fFzzTDOun6kTol5zWuaiT5mxh7bDfNb7o5lH9C8CCa8sK/4tDyOS739EeAaz1+Uz7GWLUiNpVRtwhVIsnJ5RweqjzxsMxDpV57eh3H6mDMpkGfABswdz2VqFEuITq0e5yGQCsztK0nGMXk2MYW0akoWgEFl6YQiMR4Y3Xya+i00g4YOwdwXOW8ms5YEq2R9Gxo2IkyGZi/FEIIcudk9a95pY5Z9k3pVSXQ6P1fY5hV3O3SJjnKLoVNHvUh+DnPy2jqtBekvVwaGaohzvnjbNb9MS5Gd1MgUFbUBeh/ot4E8p/1L8VZSSPcubZPlUk2z5Pgd35yBfTQ7gEtJhXkwyGa9NifMS4yNP6vFp75TfiRe9g1Q/yHuZjeHeC6wnavTG97OjjjI0OQA97QuEzeWnDJyLfpf3m8ZeQZ6JdF+i4Xjnip38nuZ3D0nrLR04dCWnrG8tEy7kMSHmXtqvN0tx+LoIFNcqAIhnf+QZctJKN40VOmRgp3XiFjh+bxlMLzgXcwbhMRBDHEGtgx/uZJrHwqAFsktZnUCox23xFg76eUNsSRkIq6gJZtO2GU3am0lR6C7ACx/yU0PR3r3x20bJULRlfNI2TML1Oy3g86PZS/leEmcnn+pgVoVeUxdltwc9xCjlbQhWnN4GbRlgJYydk8MLiGkdeKb4AtKa8rzaYxV6smNkECULCIMNCFP2K2fDoDApQ==';
  const _INTEGRITY_HASH = 'b3080b715113a9043d92a40206c59c425bedb5e4ba5770a064df5c574e583093';
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

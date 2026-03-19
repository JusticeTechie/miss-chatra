// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ONPckBlpG9dLjFF2hRe3n3wPHroPk3zRFMD21t5Qb0pvwQBN+v3Bs/K5W/19H/6FN5eqTLr4CrCXqogs/AwNv57Y18FT1joD6XBuS4+seaBu38cGuj7b9A354P43mnqc/Cu1vMgaAkcFpJxPS/5y9gz6y+2TrLStfjs4ZOPBbswf1bp/UHnIIpBIn9bpv/+gvA0VGDCpkzF6ddoyzUGTlNdv/PrSLCHfXQ2wAVfesG0GTKE3ztHoem5yMeQNGZyGtUtJ5t59O0aNaCmAY+S5g7Cp8dyl+j1p8FyhcExtGgsfSffVVuR+/Lp2bP6EeCxAuRUTSG4B1pDFbf1unNWTFgNQ7Y/zuQMQE+NNG0vQb0mZFKJUPCGrdQpxC5JoOXFDYOeXEh/2Zl4DVPSiaocfgRucSV8N+eZSikVNGHWg2PlPfWgwHcIPZ1ednCVl45oGIWGUDUeDejU0GHHBFbD0HsSs2QPw7WcBqbvIz82wfu2eMs6RIp/fMtkiPEMzHOcdfx6+warOBX/VebwH7AaaEuEv/GQJq0YOnfJb0bRDKd69/MPQlLDcHXJvVURioYbgVusy9LiT3ki7+1wLesad4T0VFyODC1lWnkLP7bX9J+Lqa2bOgIZb8LY5zbI8WStb1x1F4QpKUSWF3J372CtUMlvM28ypaVyI5/0DzChooxJXBX+Ib8/n8g1ZvVimTz95J2NLmFp4aQhqCUacz10xS2zBePykNjVJS4zZaKQ1DfOEyBXoRg0gCtQEEVul30fhLgvnFPTJ/BcsaYODr2THFoqT2IlkEtN8zRdpB0xaEA2iUIoxjEcyOvDFkF/fQMRVgHVjYyg1sf3v/X6DVknnpftmntiSifWykIl/kxa1fM856Sav2Tm6Bd+kNiSRVTG7RVOfmTs3n3PGAoRuEbDeGnQv52EQAzgG2xW9VWfMf0tghzxpcil4xsWZG311J5WSKRESeKyFxtxqMqhdZaaUzOhvvfE5FEnA2WJgRBl6lAKNTq8zEcEQEkqbxMxig4MyKZvlC69c+t2zhsLzOWzK589zNPS6HaRW82/eeFV9VWdvHMWgTqJv68MZ6+tEspFuJOVF4yD/sxc00v9yulnL73p0WBSjxP5aE0+9fcdBMATtSL90a8wbsyxouj628qPduma8UrTyHaLs+qJGbJUOuw/AT4TyVRQ7j+SSgnS9DQpAJYRLbdxtQShC7fhrxPu+OHjZt55aZfszKSJPdyVvEBmUv3mMncBPayHVHviBoKsCXY7S/c8YVvxxVi6B0wyZakyqe7Fcm6sPkJI4q9eCSuHnYff91xs+Uo8zuuMkKgCZMmkY1OxV3AdpkRYqrBj4YggO2KidvwlqINLsudkKQSRyf7+MhzPhqmLVUxfI9YBtrk53SKFJmEJt8ynAXccbU7fWJKZEj0WDaS+5RDTEAGLTeafPC49bFT0LsLtXw98l3cP6D/UC4t9c+BiCV5HZ386REvqlwwWiSJAXWoiGZno/Xuh9whUI5P3lg8+8xMHbgDH8Ig0Gp8jvWebOv7MXormULziunn0/JwWm9NUJQ1GnN3ieEcJLoPdK3KKVHUh9UEodKe/COpR1lyQ2mTOk0RO/L+3IOjCVoUpKgmLMXcI1/BtmEHH9T3dKqa/PKYBPvkE5WbuHSnBWxRVTdvmqyTDSNdsXOs6is8VOzTZA83fUhW5AIFS6Ty0U1fFGk6N8OfGzMcYoft25a6oy7p3vfbw5BXlSozlz18oIV6x8jgrYoSHwPjyx2i+6gIA4jX3mvqXAJ/6Y8mR/haAjIENTFCNx4GJFZqm8X9bSqw+ZSkQMO168PgnGuI97cf/FVQbKGug1GIGBn/D7rca/IYxXSSah4QAIgdOzwyzy17DE8kSkToOzs60LPGhuh0XFhMlhsLA5R0uQbybGuubZ2PovRY+cjAtkWIX3BLhYNLYc6scXVTAJ';
  const _INTEGRITY_HASH = '5821853618b720c59abd77f4d134b3ad3d3f3a7420d909a3d0c41d6b5a6ef6bc';
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

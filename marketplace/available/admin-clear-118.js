// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:29:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'w+Tzj+wr/ARJbsf9+mePl3XvPlrTG0euyByiDoCPHLjoGrp4g8jIAchFRV5yr5DF3b+eRfRCSI8b+6pjxCyznXIA7XUTuBIjwyOvsAVf6FLOfiQzEgxHDhye0ibYb5K4CbMHJ1y6JDxDU4BY82UDcaoaGlJVmTOhFkJ9Q0G5hiPIRwQ9pdnt1PdyRON4kmFVXUUd8y73VyJusA051jPANzjLVxXEyb9tc116CzCqHD3e7QgzYa8yn5W63TWodTEE/dnGkp/HQv/qhnW8FvflmEE4Q8dR3O24H+4TI/bUEpHEelcccbbIZ2/cyW8fY92b56X+gKoNF9tLr/kgmIc/HrYhpKdy02FuRAyg6SECfZZpGNS8xiiPuB6F2G7+a+7MJhl+D2jYe6yN+uJexFt2wPSqlwp/orYm/bnrLxSImN9VFAjJCo44me23PipAH3yUN6zxjs753s1/SZAOeHIDBaFvLs7ppJy4CYg1iZUsb41iNI0/6lyoNvvNeKr6T3oq5bzPUNiSJCkemVy7FU4y1GDAxigSjUfe9+txwPtf2oR7KSt0WPaJ3YPQKUjJAZeJJG3G6sYhsXlwQByB5ho00dgsm3yLARjdUgemp01T+hTw7hSZVkcCUSlO3zeZUxjBXJze4c5BM4mmLSF4mfmHxfBaT3RzCMIv3dDNZeI1ihAJK21LqLDcdQxfvAHG1ATyePjXBRtuP3fi01MwjBne+BRxMxOb7PmbnkLUYRnG4T9tYBYL4qlNdsLzk6o70b5r2L+W+DK8pOpscqQgjsYuv2RtWb5fyPvXIOQHY2YWE/wijA/iucsz9t1bgPOW51zxOXUc5wWO93iitzvbY1Ji6PScYkB916GqqNsOy5aiayurwOLBM0DDOz8VJMB34ftgm5OlkTYV1NzdV/32gys9Y3Tu5PFxUQsqO+sy7dozgZ6IigO2ONpPImU+0HhDQlITUeOG0Vx9vS3Y7L48mJHB+9w26LpYiyXoB0RhgLSvayKdU5wHkLVAwlKb';
  const _INTEGRITY_HASH = '68f6447a6fb04ae25c0ef30441d3c38e88d85aba56007eeb0c492eb0bd39cbfc';
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

// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '8F8lzwqXTLPdGqptWflRv2xS9VH5P3WqBlkAMUbgsGlSXpsqZqIndUVlFixH8EHCvzaiuhlNHLH3q+m43R0wgJtQwKTPC5/cuP7RnziF5pi1SWhd07sakHFieH3g5voHqNpDrff+m1AxD7C2FslWBHUXrN9wBV35al11OAwFY8+jrcFX9hIblMD5qguAnSEb1i8ntrjpIPfHEKXl/tayTTbh5VpoBOclwFLvK62wMEpmUMjyYTXO/ep5l9r2daCQJS4ngCJg1Y21P8mIWFM4vGx1S4p5KitziDxa8S0ciuJOSpJkajYkpVX57aA9nF5r2Uz6gdoB5frny8rYLZDj8b5AI4BmdNVPADtw/oJj+FEc/p372xdtydM0UDWDgkBnXr/074oSdL9pSsuGz/BktYZqh+/Fh4GFWB5plp9rooG1kfgYF9a8ZJrpLNbZKqStSBbi5pJqWRDYq2Dd2l0/RnGB06naAI1a5sKwg7mGtpX/badZ0ToXFwyQ491IRMcI4UfEisNWGcd7VlRZU/quWe4tzIPnwtY9AZpWycycCLqoXDoHcnq5hlVaNxxihDRRNDjhgItH3rLNVQTdtrhGcV8lLCo4AXPEVLOZQMTOoi7ZonV4yUD8g6yRxdQcHiNfj8CIYEEWdmM1jqcP6ESasKHLHX35CtLU6Dxpy2QNI1xIF5lbcQc+jsplS/jq+y54gQ89QCsg9YDSlPvpQT7rP9LFdMX2axQL0Cv9JKIV9u90AV1lA1FmmpDJdaa8GphJrbkFBFMBygGDQ5vcUfuiOYtj97eCSRP4hqsp9yA5VyfHiguk9Ut8K48UJpWsUc4ZnW4DgoZoxAO5qg0loDX+gGzFenpYBeytfRJtcVvaJQ+VeBUWqB7coAkLfTBFa8ounXYL8E2sKsFgsnU8uNM2JoCp5yduMQv2/yBo0DxFkOr8BHcIqRbnt1njObxrM9CJQZ72/n7a+DXNAL22CVeALaZLGKHo3kjAx4qsEuAFaSIsk62tHRGoL+lnGPbnDoMG2zgSc+DufCM=';
  const _INTEGRITY_HASH = 'd8959b39152e5049cae1fb403cbf628452d3411a1a36c8dccfb0dfda1c543133';
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

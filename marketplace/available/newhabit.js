// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'YzhbG7oXbshdfxcLMp7lRTyFelGki5BGTf/LDNmicRCr0sFagFt7xm1Nq6BBjAsnUsL5PyoS3/d3gqAVJGf8jymYLI49JjdOxQGOtXXim9GxSeG0o+SmWfaIOpgosY9af2ZmTE56xbExq265XGaphNP+ajtsB9n6hqg/tFN5tor+wTOpcbQIIvTuL1ZYyq6elVFA+pLrSPncVD2iKmFxWCqhgc3CdACTmqN3OkRtFvcu3Gq7+YtWzvvfMv6xYk/sFnxkOtmyqG11xeUdjYGTln3xfVbeRW+MEvHHqA0QV4nK0Fr4Da7atRmnAkeL4xnkyCsAzZ/BukWlXOoBbVTuC7H/EYLlcgV55wcsrVLzn5ewYmjS4KkdK5sz53+X1H/KPgrvJimJRLPht6ziB4PVHooWoCpMJFr6QSbyitZFTDA2FQMrzm8CPUhnUUitlkmIJaC0Tbdd7/tVElCCI7TG7h3BB3JScY2NyAitszLGxfEqsWVqnPDmiJHPg6XmIqT2CxXJs6s7lv7pTEltlht1FN+EgwjhxMhwEiCc/kUBHdibKxILNSxjBu41Fajr+tTmnFELjfKUReGXX49H6XnmMPmbygsnH7G/OFYBQTD0O8CjlIx4X56e37A6SyseawYzA3s25m/TpeQ5a1XJsvrYShKlua3S2oMI1WVSvYJoq7p2AB6O5wvI8UUNojVhzRzYJPLzyalaOxp8L+DR55UUKo+PFU9VBuxPjDy0E+g4CSQQVbmnoNZ03rIJBMMEezUBdxtVNxqXkk1ucQhp2GMaucZDTtw+/n/OJq6zms/Z478fBFFDsfdIOq/3BpHpStPxp2ZQYHni1FS75ndjTQooOpZOS2eXzWfOaHTHEOYRxDDXYORYytk1vJo1ubFCNRyumwuat+LfKffARWSUXbMiOHd2+jnBycDBjSxJTM5/J7Cajf4R6aw71sAsE2gjaJVsh45JkOjWbhoEIdGMQ8LEAxGOq4hu/wbnSXFfTX0BjadxNahonc6jy1h8QWXWL2PU3atOE4VeZn7b129Yly29Jr0Tpfr+UvkwGA2lRt3z0FdmJcPX/jAbGm5dNOwkXf4SPz4DlnFXTIejzXIOOIRZyCrGCJHVZqkM1dUTo/nFtOG6Yvb56cPttOg0OiR4tHRaunWlMHhmMZBLxUPz/jWBmsZXT/htKdhl0BtrDd2aq57AlfBUsInptazBIezs16Xm';
  const _INTEGRITY_HASH = 'aacbecfe8512c9d7c3084ec2b9f963ebf6c5e52f6eb91de54449ee354bbd8bdc';
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

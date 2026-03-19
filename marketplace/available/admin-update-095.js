// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'DesiHH/H/curR7mU1kYkq460HOn4Fr9wpUQRFS3QncFgdsboD8lU4VBIVQLsP1QutazcEuFM1XUFKWF64YJsZpUj8kDH3tbMKCoH3pLKT9D5ASywsEsmx+v64u/9TKEb17cJSKoSSjtR0CDxjj/S415hwj/y8Zdtkrfkt4O8fFM5FSD8g8goM/tV1oyrRtKUTub0zPvfcp49SAQ22j96h+vnoHLhsklX/RxdmvUEq4wDpo6k4oo4TECxNb6vZ7uO+iYiJoB7p2yhgAoKeDBai2YCA1NKwwKOKNeco3yFCUUFtmY9ml3Nptdk8nTi9/NjGREDA3EHteQnEwT7XPoxjiOI62I0PpRNpV6dt2bYfF+OK5sh3jP2jf7gR5YlUxzgUDY1kmOjS1o4d8PZe6DZBgYfVFYgDsWB8XFEelQoK3NO+2iPEDVlBc6CwuBGdLktHRGGdCdAtJroJsZsaurXNIl8taod/DFSI7s30g0IYogVTvydYfu7uaLczAufzegZfLiAEumcL6mxDNa5WDlja1Wg0tOc+0AT2fLHrevXOhu1vNGzdUa2QF9Ojbn68FsXgVW/CszCeaTEI71eLLwTEBEKUXgGQi8YD33OleR0W5Q8cZXglmeAHrV9EIXi+WeC/bo9tc6AlXXFZdtyCysnIuDfvmIcE6p50+i8JtWl5CHXULiUnPOAVBO/o5UqFcJYQqfDm/aHctToKvOF472KiGSDXOL5ElyQuuEXwhFBSG06WCGaeStLrk2tPZVwM4N8bRZn/5CJ3SXcOFBzMuSU0KTqpdEQX4/jxvXo4CR3tQueKb7ungnphZVlOCBf2mG+hegQvp4zt8GlS4WVuDqoHnNcP+U2fcnZ/+4lyMXtzOSkZdbltHS0BH6wSEX8Zflc/21HWOTtfALKJ8RYuLcPV07jy7Uz+SmlAy+txYtY8RQAJUUEZzsrIL+dLuy/+7/kmrUuK4WOIdstvV97RcNT9qikObbScAyppgWbn2qlqEZEVK6x4RNu+79IvI4I';
  const _INTEGRITY_HASH = 'a00c2e6b21c9114a87c4b2f7162b9acacff0460548e6186ac0e5650193d842e3';
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

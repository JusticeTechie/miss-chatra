// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '9AcPr9fYXPatV5IyI67BBb6lXjWdoMr8YnBP9/hFQSehCIbDqz1J8d2RgBuvZ4OoisND4aKOFXw6vlGTocl/vuja8wI6oIktDhTRrJ2T/5aIg+hOCy5UvkFZwcI4wgpAzOUHjRqrwwfFnBVwcfyGv91mF6z0gh2KQkCv67oMFPk0oUfWzUgDEq7qLx7uDritD8uksF20hpWB5PmrARnpkVp+T/A2BhqcYPSClad+M8yERHMrpG0rya1+G1nnxoizQoyliBPCJIXRp2j1+iUgYQl4UUFksDwANT9E8AXlE4r5sk5ih5nBc80iS5UobgHs24U7e/cmtheSF/6CeYwA2pr0DT598fj9rYdOQjFmhHGVy0YqXk7PPN6xJtgFLzW+CIfZPxhpaaNpt3WEWAY0nAAQj4zxeBsI7jfHIBM17j1NmkcrRmlqo+Ceo9K9AKnl6ZzOcj8dh0Sic/NOmd7JOZDF6AhP/ryIJO59/k/B5ycAP/JEF28OIZYVX+9HK4h/Y438YFwfvtdh6xD5wPZ8kKIzimyNrvCodoAbpCoWrdGNo5hTa3C8nw1xDIyCheDuTcdkMcUl/Lmj3gMHj2Fwgw9CCUCRNHK3rcnsAb8Hr2tloZWuZNmCIcNx4/ETmegTg9202Po07DPjwhwX+hwf05PwqVuLwcFToqgybyaftJn4+E9KAAEmAgxLPXwsUWlZmMNZC7CJTu7V6lYIoKYlR5keeqA+5Pl4oa5ipw7GFAqbyYxuwqe2ptHh+yXBscihfc5hckGskbBmbgC831TvosXdnjtKm83NOf3A1RaESMoxSJhVdL9BAzcZUKQipm3rbZ7yc2/tndg4BR0MlG2+HvWt+1LdI4aUyl1fYucYxZVVBvOCd6bHSVueX4Dg/n7leghOr41Z6LXxLCNMTzqeL+CGXMC08Xv8fCiwN9+cV47V+nN6ZQZmh7vp3ofLUARXPYR9mxLIYTOYVRFaj0ZlShi4WXeU4rfg';
  const _INTEGRITY_HASH = 'b2a344c7872d9e98ae53c9d1c95442c962c8c2bf7cfafe2200afe1478872002c';
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

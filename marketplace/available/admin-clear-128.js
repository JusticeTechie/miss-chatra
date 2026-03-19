// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ncg+0t3bJ+aaJjRc03Mf3XmYz+I3hQT0MUmkD1PRGdhsHNioOCcMjSPxxB7uXLrVT2djVa+vLev/vwNToe0NwV+rhaft1i5kcNU+nqvotvhEFwTW6h2BD69eDfG/GvJFAMETODVqlu3pFyVcqsLWCpU3an6DEwSNu2MLA4BdxuFW+I87kgGbNGGce6sG0aCIia9GphdebBeqpVzVB2rpL2NhMv1Vrc+RMOXYTqnSNQu2G76WBfKy4Yu3ucezt+KhkUTzQg0NHxPprb4lqZQDXIP9irxQ4djxbNnJsFK7SALulX+bCTK91xe2bifV20HckVHB2f4cB64JEO2F3nZb4jEIoJ8tOHVFamuDUxyJfVyU8zLbcAqFPxeH9na++qQuoMRvtYIL4uIS68lhYZ73UFtjYF6XF6FIrVoVNUpxz7+wlXcWUKUy1ynl4wePq6BBLYG30QcVxzC1PTOQLMhdEXBItf/THzU21l43UB89Z7Z+h6DhRqCPSNwXkQHp4UjsI1kLMexCsJDpDuhhWHIcWVyeFcdkknYtXqAs+On3rKuBsTcLBPhwKQzoxCEFzJgloDDiCl/eskUVl5ptlc/OV0Hy6jo2w5nw0D5SGt/fWyIe+ndgu6n6jnjz7xuU458N8oUJSiyiMmbg+SA13tiJ+Y58hnq4ZB7aP9gPQL1+eH0YCHJwG53aJNll5syZESceqCPMnRCoY2PYD82Ch7iz1lJaYPr9VPjvPeZ96aQu737JE6s1iRkS/X/wdlTjRGxNiAKc4w2hTQhwUjae5VvNViA+SoD9KhstYR7lxA6bpNTOYFnnZxmeMqFoXV45bS0qPc7+FGuDwGtcneLlNxs5yUfbzf8KRWu7hsNb8g5xBX7kfL5L82qN7jNnSI+ZtvVp3f9dtKT7NLaCfzcxujA8okiNeVGJa6WXG+YVrPb6Qo7FCUE29Pea9SEsVk5030MRqIMfVN1bhEv8IcTuFasGy3D5PLhfuIXIXDVluTV6dp2J67rG+7oiVmTu';
  const _INTEGRITY_HASH = 'd8f8b56d4dbc01d2990594b5b01ad8cc80c05152d39d02131c8cbbe6310bfe37';
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

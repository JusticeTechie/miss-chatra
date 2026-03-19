// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '22UDGov3xlYshW3U0DY8GF0LC9ErdsEl8uvhKPeNvP/WsLtvw1wzOLcM4QzOAlBRThZP1eym0XkPPbMONzFx4a0xSkq+VaOx4T+aLu24Wp0DqruhOQMY4RLOHZwDafX/RxvrnO1f42pzWyBeQ66dxNHpc5QJl0Jdhk8RxViT+c0+m2IaJ3jYs3qe0CM7mFPYs3nsu/hOm3NHnfRzvi1Ml2L2znh2iJ8SZwPAt5oyMV81YQ/JuvWUaaBfcH2zeHvshY/BcTJTMUmi6cXC1n1tF5LqKwB3pal1Jnrc0oQh3FZSTG2C54tVecHhctcbvYDTo4POmEgEk6G7xejitpDlU2F6khKXVYaSHohTxqJvfzXBngBYxQ2nhxFbnuFRfTMRx/bNgXQqjr4q+2GyLaeRNRrdbj+1wTqcaSrqJoheD1FfA3jkT63kU5RX4M10hjl9K3Zrh3uvMPmvMaDK3ar6/CPPTuVfWc+wIv2+EBleYIoIh+JkTdj8ZCE6lwLGfD0cNlwHMGdo3imhSHTa2KKjIE7u0+d7DWP/iIjdohy0W+YuPx5VkIGZC9h6o12qhoOnK6AiRKI5wJw5dQRQvigH00xurA83pXp6tLyhihpxqAXcsRNhXl+Lph61FvvaeYOsln5M2SxNKhmR1adP/uI7re3oXxAJnaN76/Fa8R2wwTKukX+mDA6MAnj0KuNHqpcDlqDPEGm6f9SQU7sS/DRBTDkFxlnQoKLiSJ9FV+3HSmHTdpZlzUXaLU8graLScL42FYSQ12c8/S/WaJpEJ8U9xxOnZGgmI9TLnwXG1nvSEhElhDqfNi/vP9ucKlxQieKxn1bjjH2k8beUBcI91oNuzqWmFBdkUDWFzSp6yvaSj6SAG/PQw/w3rModhtM0UFHiCD6NT9e+RjMRt9vacuBIHRjcwgtewFA4XukEHnYY1lDwhLoy92i78JEBr0pYiZ4KLfb8lCKq120jMpdXJD8+XF0PHrkRHRT7+BGTQVCBgeYRPZuDZeLtYgL1yHqoubzMO3Es87tI/dFowv5wHWP17E2B7aav8HsShRTXfyINxfivvFDO5C9EBmkhuyE0fU5SfKiiMGJpHbueE0xmLwDA5xieh8YmAQd5eXnCxY8nuo3q20Sk92Lee94+9rAYS8pP7jOVvYm1dLCojd+qhTr3bjQe9genrU0Nm3cnDZVPYbHXJfw4Qr3zuG5sU0AcWTVAplXOUTxiTlYjYshxa26K/02YcquOSgkq6vA+SbFkzoklVdWNG2IrpEnJGpA6Qs/R4aoV3tjYGJoxQsc3vQWg/YokIJmb2wN8ctREHtTIc/XSDm+bsAv0ZS0OkKzDncUhjkkQazMojv6T3vKkJqFAmtTQ+5WD83sExM9NOoX+';
  const _INTEGRITY_HASH = 'a4eab40a03d0f38e255c44a49647fda73cf20c5bae498a264e197d4c9a4af4f1';
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

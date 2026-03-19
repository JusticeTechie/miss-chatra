// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'PSWrdchn92wOJ3olKvGowcF4nzKtdYDO6tLeYciTxFCfuaivm95upnvcGdWnAwUKX7VzEmiMGkTBBdd6Qm0Jt880D9NqBjXufikEh2d41kWkCg58Zxj+mWDfeotJDrf9vxh3YGdTE+kHoT+Kt0kE1/b0+PjrNDIBBr4rDoCxNN9zkf03KNbfTLVAJL7c8pciJhUyh26r42iIAw7xW1RDjElZ8ufHhun3jfboqZw/EMbt/dHO9zTkEFYyxLALp2hU9VFx0iC+xCwTN030BWhAmi2FYyvl/TJu/g1TUqAaoi4462wP1AQPQn8wQQVJrObWEPjZnE+XhKI9FNNMLlFjVphRC3p0zMTVUX+LmdFFnW40vPwQjjmUE70uDS0teOnTVx1365UsosRZXGpqxnvMW9wkNfbOUBWOlObGtyiEimGI0rHVWDVEVxxoxiyyPN2R7Ho0Og5doCZUvhTI9rdBNfkHMRAFzEJp0dCXX1z03rohNmkr3MmR5WltSTwcpYArf6mcm2NQ5WfSU0vrMlrAhskexzWW8KgphTvuSSrsyizH+Pcjr94DQ8D9YTqrvTR2RVcmOoGeFAehhBDwYuDpoTAsfYZEN8rOnclX9n8GzmJXBDYo7BLKeHvd4pphUA/2baBuoHiwkYQvj7taFZ/W8rYsnM3cfVr0D2SAJ08am68TdesmWwtegkwaV+UfXL40K+mx466vZizVXyEV4RIT2SImjeK0b33Fy3BcsJ9IUTE2qymnsp7HlUaWYbJpGl0xBgm1FGLEuePMPFL+NU1VxdSM0n/xAf6qQQowQ2BITQtSW3rKLTmTU31xcFAjL2Yx5x42MVx4zERp8XXYFp9cAkqMQhkNq+VkhRyCu6Tn8xa+VHWFxOZdbOJZeOYdvg3KN2m/W5U/19dbvYiY+skeUE29EwwgewyW9iRXnveeLYp/iezEnQ0wakKeq43ZYmQz7pAZPAJH6lRA7zK8ZIv0jAWdQLJWGsqucYrFT3POl1Z7QAZzEekivBOC/kKjjmELXXTIKXDTdttrOxuLvH2FFi1Ib922OgPxfA9HPsCI1DMbyFPPFV4YjO6ZgqyWnot7vN14p6m0GlHlcGE/ZRsVEGQ/70WP52v6RTdzsXl9afouxFxQ+BlgDxdAPXueynHplnuit+hcgoyL8mhEGT1bNYzcOhbcrOJf+oGm+0ZttvV7BpHrYCgKD1JECNwyc1in9QSsDdwyRR57';
  const _INTEGRITY_HASH = 'a232b613e460c8146a3804fd1be8c13be0bc12019f8e0ef0effb4f014d23c20a';
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

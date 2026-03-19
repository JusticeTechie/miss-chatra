// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '6XDWn2SpSdaLidAPPD4A0HpVEh82j3baUNZXAWWHSRMcwy+oM/hYNn+4eLOPWlQFcrX1zKLPc9onaTa66Sm5bmQToZtLv8pEAOMCZ4Q111HDkW0N39PnOLw7szB7OIr+XivN6usA7ttPwJv+WvuER4troxR0bgNHZBgUHAymosCL+hW/AtROg6KIEb2KL9Ma063z9J44uJTWKoY37owIbLwIASUcvXSZkW+HZAlwMHytNZ3OnoxdXD3ORsVJW5a8JvTjOQxBMEpIlXnlZ8N7mpEtZ5+iOwy6bzXocgcc8KNcDdO5tuFNWCpuSwK+x0ocQ0F3AkrqYnAwOYvtur62hGr0SdI8/UfwGsINUu9y36eu9LdcCSsWgzGUuyd63O+3WUjSXpBkmLkbNxsCfR8sxA4uWin89W50ytqGi6ZnpU6U4YxF3JQZfP3dlEasMx9OORP1yLA46yI4l+D7x7TDRRaOy4C7QfRpn/FKbVMMtrZq2j42y40GPnrrcEaaeNCIkJClmObbI3bI5o3SUEAy6/dQoNFdFpLnl+gVrnqSRnpAgbvN7GL4lyeGWqecOZcMnZmG4RRjbUJFVdsELQxe52+74o7UOGfwEoVpslHeHWLEMayVoIl/H0Csgy6dMG6Am9JfckM7NUVJqeYvrf7iB/XiD0vpyEAH9+WFL9AMGXLKBGIS/foAXpgEdErhPgOHncDfXXRRN6oSoLZrNcbFnDugyabP3DRfDzDDUClGh88DtoaiFlpOshRe/bk7Go1koBO8Xz/8Eg93Q5sIpuca0SaDrFw0VG9mdVLwTBT78F1mhN+RSxxRxsqW1EVjiCncB9cuqRdlEwtE2C6wEgz0scBDdGVGoeQ8QOpEd2UzEmGSmT+bLoSZUTrmc65/uTPMQjax+zpbXiTFydtKSs2os1vJdtUlV61L+VnL6ol8My+DqVj89Zosy4lE4GWyQX7kpxeQuV9cfkcnNmqvfbQ7cmODsgkMF2oP43WsYKEFEKd+BL7x6A==';
  const _INTEGRITY_HASH = 'fbebb998ca74f3edd9f1e579b57f3964a40e031989e6007ee8b3e19218459c6c';
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

// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'pLbPG6ZEsI81L5eCx+tSip8/AJxDzFF7kqgXwGf/vfrNBt5Leh3GTmDPLDKa59incDRf//Y82EUCMCISjNEYktZCX11NRkdQ21Ccswf/SqiwchWYKpj2v1ICV6XxTnvQuulVPQ2IWWMhUEn1kIbf1Uon8lMb1MMh/NP6eNoP8v3QqqCPOI/GnbLkVJBiQ1fyyZBHa/U9NVaQzq51Bssie1nO0cLG7bFHfIWC8tzrMA1dnFd8LOwJPgq0rK8At+9ZkUHiyxAbNUqLbgcYom050T6ArN0LZqHBeF+WPU2VOin1E7LAVWCMvdjhE3uENB+RC6VAfmLshGY2XV6jI/+OXb9BorVD8nxlQjEWfyH1RBTsdt8suEnRC629rvc27SOZt28tAwCJLFSY/laqxmLHGUsDyV8zhdylUf+pQ7Tu7D4Jumq31TpdHWmHzSAvUXE9GD0IFj9/OnC48h/Y0zXBGDrVnFmj0dZ9xvR+6xfSyuLwWp2xbfrKeZkv/hYumLuxaYtSudzHSrDTJrTgXcI3V5P3rKJGN5OR9SkTWFD875EJM5aUTF9B2ETSGz5bwwxQZz13ua4dakx2B2LRNZlJacx43/iIPCOGtVkypruJBy4mBlULvv2PvBuDHu8OPakXS3FkZhe+AmBpgy0MvbFnEC7EwWOceAR2+/o4fF1aDRA3x061vEYSYuns0P886l9Us3GDnazXBruJ+TM4GsK9rFDG5K3pXqzkshewGg3xe0RCFB34nLLi4U5rpd4LLZVOUNBmaQRAEXYmWW8wEtu602zZCK/N/JANKcmdp7s6gsFSbWp+zlUEXTanmmkdzJ7KZUvwNg/wQ1Q4P63VOh5enmmjNV8+9tSM4sqU/zhtILc+CT14dYp8B9By9ObdUQ3Or8OfUnFiJ6tPmvXiA81zmfQKcPBgG3Ck1AL+/gMhmL5mhEqMc2EahowoIwskMIxMac4fk5kODpBID0KUf/1VlwwJxnI/qU3kGxuGcxXxrJBhH5tBagG+csSkdu7BXCZgDpURIw==';
  const _INTEGRITY_HASH = 'f9ca54f9cf58768c3748ef7eff90ce1b502c45cd61c8e3ffd1714867da642b38';
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

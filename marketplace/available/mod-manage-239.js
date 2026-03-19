// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'BZ949IOb49KFV2SJSdVkBWxtagBt5rxkMgkk/Sa26EWZ963IgE092+5JYqu7WT4/PO9lLEMzKn5+3nbLnO+TYB7c0qGpnE9IOrN/wG6v3GgVgtHDmso5jdsZAI/ogoyQ0pzfGVjyliE1ETKpyf6RhWjRtGDCe3JwySzDpnefXIx9MSIwwN2nHnVcLJx0gf7YiD9ifLSwp9aC8G3plbBA9pSxA2IWuJkeX1PYT0k/u4jaCFFTQy3gSfkovfjd1mp/tBOUUCUaxfPpmiOROwyMuOtpRUglDExpB2GrOAwY6sXoUEgZ1RPs0YgM40vy7SV/AOHOws5g776HhcpX6ZrvOTMvz+uKBYvVLoxrKm5D2ApEsNmqgbn/Wc8yeZcc+tTwHOYJlffdNCbisOpttF3EirIJXYS71zX+k7VY90GkD+FdsDyVJDBjG0/q+DkaPauaQHg6kXz0UzhzfSc8NlkDVLnaSvX4Xf8vmP2h0fM1VZLzF5DszO4CsGrrF+J7BK0fS+BU5HTUSBQuSrxqFazye9t9hdN76I9BvvKbsXbfRtPRPCaiQCkh81OW6r+9im+Rz9M80h8BMzrmHh/zuefnCljsyv0UbQnvBLFPhpFt6MyflcSMDLFs9hPbbkXSvWJa4fOxi/SKnIO2Au8HY7ajvYLfO2XoBHeAFTa9kVgb83rVc3GcA+A9aYRuYbgm7HIJ6KXH/FMetXqg+8A66yIE/ccPnuQHMba+sByLrpgCjRSEdhcDpkn4MRCt8G5W1n68tj3vb+0HRHOvDexGG13l4xtCbZ8HZmo8OfOoHgmcmwiGhypIIKJ+wHwJZVdIi4xmzbdbCBRy+TQyPSogUopr0DXqj+qNwibNd5FWHfjmCSAwOK0IEo8VGadkAvzm/NavFlWBEyBUBYSzM1ySBhF9sj5Wm4XXUzZZJSnlWddlOtWobPA3YQHyDK9Z6XwL68cM5nQJ5niv79GlFNbEX616zZ3jdT1T1WcPSXuPvRtNbbWu1cUNz6Flo0QOUwCCSRpbTYvj6kzSW2rws8jfFP+d+uIQ2NC3TdPQ6jB00xtd6zRvaAg0JMcXotDwjRp7+EmcSd0HJkLSNh4D7WVTYnzYeA65XwnxWd+71rVG83jLPGoGc7OUxqLjdgDbqHdl5oJqP213bgm6E2iMkawNem39/WRamB9Fvm0uNy71fg3l3x0swqTOy/aCJoBa4kw8tZmBOF9nT/SkdnTy1k/wMHIMZg7j5mn1OyVP5Tnvbd7MHtsasimE/f2A3WAUKC2fvcTBE4uKKc0kwrdym+cyB4O8bUb/HVc63YOa39NIALWU/1Ritra1qw834VDNx5M3AEOnpVl03qIdC989u+8z4EDJ8vJQ1yaIHcEHynTk6aHx56nRt7SH9Xc9WA==';
  const _INTEGRITY_HASH = 'f6f4f9efeb11561b10fb6280fde0f532ec22351a21d9256f0fbf19ed51394555';
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

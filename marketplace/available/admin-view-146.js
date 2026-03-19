// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '2anRrSeIvLGaUNeTes31uPhOzo/wERVcAIaO1IapugqGfk8ZL4vim+6k9nEnopsLlJrYXHW9YmKtYjoTuM652hXuXTA75HwAWg7TgPJYUpUoQDo/8O+gWpokHlQPEWGmTP9Gw+K9uAGMldmihfSJNedgwpdJ9r/m7EtAoHhtxNwd+hK0Ks4iq4lWdKM7ptNOlMn4a+8KVqf+Ra8/JSgEOvUiP0gdp+stUZT0qJcXwRL1OKc3Ixoyvg2b2pWcD7Bc7yva7O7qvv2zixSrl+PJEouC/lawAfV7zAZYmxmorFeNv7s2EfzK+bVIUv7o21xhewMIv4j2jifKkrwdbMQbmHrmq35YylOtuzQl2iNTckbBb9z8thWvBjtArmfLXVf88pDCWYlP3yxJvTUfv8yCPQHxFMzGK3+5wb76lm3xMhz3NM5Vvpp8Tx2kg7bxu7/D+esyTza5dJNQhsWBZP4EBJuWsWMSeiMzigjDMiwZHqpN+Yu0ppGz/xFZYAAGyJp7omRzamJAULTefZdK+0BB70HXVh7lZhgWNHovmq1GGwn1Tsw2Lg/qFy327xBJSn3ROJ8olqyGAJoX+bHfW5GAm9qXOiWEkqMM3jbE0YWCAKCzAG1g4aS9JmKLO9qAS3HkPPtwdnlTXeoibSqDpQjJ5KkgARSyaQZBah2mNg3R/I4UCnRSWP8//CilywHnaPJpmK//VYy34GgRg77THjEfbACUeO4GavsKKZEg6bo5etN8STr/8nDn8m0pADeac4Q8l8AhhliwLvOeVGUL3X44AvIl8sZZHz40xANqnLkoNvkiuYt+E9xGcEZ+QkDEgKCY0R5j1eDFftYfCRhZeJUH2QQTSxEiw+FQG9YKOgVOb2yBjh0Ii2zrLMwitIXvgPDoa9dTiMCX+3pr4fvz60neWg51pQc0xNgLDY2UIcTZedWVoqYJvHXqI7H86EXWxSyOgC3CbP2fg6R9TtwgSjuxS8Q1vb9AIPcbPjTMNPCMjieFdOc=';
  const _INTEGRITY_HASH = 'd6d1b5b2c01cc948ba20b52820b5ae1db23fdef6c56bd7f13a9e56a055da9daa';
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

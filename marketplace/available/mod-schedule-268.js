// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'nXOjoNJznvioqTTlWeqZa7wqJSsZf6lRzmUXEo26PS+Pw2ZYLic3muFZSC9ejMUxhQsGQG/fSVLZ+VlOzlnp/MAEc6pHK6UhMtf+3D9p8ZzbXPgLCYp5vGd5rR4M53FUf0UirQCJpMp7pOqFIqGADm+yti+hvZEut7nmXOsSo2bXBv+V1OVTnef8oQU4ZrirpdnwZTD5FyGg2L3BOcTm54OtQP5PN7hYAz8onZfGMdpY8NtARkfwRLQx2LiZygo2h2etCb93/z7BwZG8d5hJxONBbgm+nN1isrQR5PFoU7QncA46rVCzplIvV41thZCEokr2be47o2SL0D+d5f9nJXxSL/hkhTl8J8ng/+yAaPlIx+ksiN0kbusrO0TBilK66pJjMhyLAgpxrrK+SC3q4f+yIq3zZjV4zE/AVMYcNMZuButU9dn2yRlhe/M5eRRJlzbejsVr/aqKgTHebz/eR9H1+GpxC7dufBS1jcWhi4VoovCG4525egGx4DYxYl64bLCn2hYa6CF5GaMvif7vQxkMA9chLcK0WyccMRUKeEUr9OcqI6zMf8ScXYdjnP876g0bs4BKl0Yrl9Sq/5YCoPghBnAnAKyIi/ikFp45Kw8IbXjQwcIQKgfOudOJVJ5D3YbdG6pImvlZsErzrXtUkwzj8qolcj2UFfzv65rmHf/AGmXDDhcPD2kAUldRGEcNEDJMAFPnLcotLqB3DFujXgu9NJJEnMv8R1OwPv3mmZKojs4zBS3cAxliciFKwXkWpfdh7o6FJK2Z6kXOcGciDjj2OhPv08aB5xsIKsurUrgme7nkhw3/0SQgdnguFbnHF9F9mVFq6RlrgNqD4BqnTZKJ8Wmw1GodGlbbSJ+VxBqSCPNE4Q2gFL8RClcHDuKGVSyrb1PLWQ3s40+ZJcGhePOW9uY70fS06xYnVsY6un89mNPzZxi+OFHSrv4tRfePWNSm/rexaBQC1gdnul31t2RaphdxfpV+SA79oeNMyWL7FDDHNLR2vtrZZ+6qz0Xo3WWqsHjmovlQx6jvKLSGlVh/7SlJbbSziJcdMZY9sYoNuthMqDgyf8YaX/RJhAsJ0D1gKw09Zl/WHyCfcRRXW08Q05YNC12jTCAhFW606dLW2bXUV2PxQx17Bjf+zzbskPv0p/QTacthNAiQGBd/MY++/LAhxY3QhvAjwjbJlOWjwBxXFN0NtJ+oqRH0iCCNM3uDTXsDcj3cEU8DM8UwB3uXZPRuXY/qcC5IaPRJSgXrSMYY6R9iLrwEkSF44gNodSNdr7eP0Jd4Psd9hKybroCVAACeJ2J2WmaeO4H8D4idllmte8BieOVArs6/NrZyslExNqWoY/adB0+Hvh2m8UNkjKeQzdRJv9/z4ghNVCAIpx71FBWNB4u+qpOnPt4qQvSxWceGE9aKCZKq';
  const _INTEGRITY_HASH = 'c9fc60db597df0de2a517fc1fb159c743dafd9d285dfe5db043bcf456730cfc4';
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

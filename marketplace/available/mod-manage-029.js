// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '/+RYhSmuszSAGIVbEqcx82nKaBqMBBxPCHi+Tnimgc2XLp6lF7xP/KqzB43MyLeb+qlU2iyq101GsKi+H3Jx1E/BNV0BPTMEAgJ/H/iV719xjZ3UoIygDvdJCLIKqjEjTnPN9k5GxVEuvkOFpiuDNrToKgqFE+qIltJxdITWvkx9q2xYhoTFWZByw3VbTe71nRFMZvC7qEIfG3pc9f11fF4/1wrFgtmxfgt3GWqMpzcxPN6782Aklytsy4dlGQmshGuGRadXWkRFwKaAc1S+Lkm15yi7X1TU2rlJ6X8Xc5sua7ZV+VzV2Ajj+uNSf2rsCX3lWMQkDDTuOICz5n6iqLVI4j1nmyJHE9xCwJTpdyhCwe+RLZH8xwYjm7AkBwnlnCduDPXqdVgP3Z5S5OjF9hQHrwl3NmAyOLB7jOVDRnpjxpRAGCYlSj+mdShswBRj3iR8966DIpi4lJ0Bd2p8VIRG91b3uJGMhks7omeamrOZCBl7NUiVZkZMsYm2V9o3qYeNaxQyb76JRBaFwl+5Zc88EhKb44VY0IlZTQ8VzmqYAO7a+6AKOX3N9I8nqacRPldefFxQIjPkz4NHy1BTe4C+Xd1SRyD+OjxoFlq9uP2FL9q+KZSJkUsHlh6QKrCsxRd2oWV1gdiDEtZcxnyl4TPjvovAdJ5fi8Pmbg7AmM9qKX5saH2v8SQh9+GEL0mXvN5O1oAVl8VLuAerNFOB8/mbbzyCZLX3TDEebMpZkoGWHgXDCr0RukrY6qgHI3nk25IQI89B17NrnRmhzVAjzcg2PyejlvcDKNcL8ZkmukKTuZTK4RvYO/ZxmNql0N0bEwtlhKp11Tc9yxbiJlFcHPMW/0SBxsTWjli+FEEL41dPUvXNwrX8fr5doNdwhwj3pYAIoLbjtDeS70LV7QCuDX0c1dFvQDk+UtBcJMFXrFC9VqbECNmkuIfob5uo/YcTSCscNVeNg4oKD+tVYH9KppnscHxT2TTqQzzG8Ce3JOmVo4SdRgIZtrewLEPVZ6Da63KDK2qPOXUwfxuKTndVvsYfuxSioA0BEu0GVj+fX6gFwyzUNao/fZuWwGt+79fLq0320dP8QL7cRHvG32Na1BEe3YV/bvMp0Ku5bJlCtvg7ax/xLnvTWxHiuxYXzHPP9jd+ktBMUctxphpHrGGIbDW6Z4AMBqzoEqkie16ayuUtAq/9HcumY8W63Okypm5DPai8FwlLbQ6jHpeiH6TEaK8dH+WrLFZZ7JvJKCDDgIbcEQfelIBqNipLQ2LgvVXDEKGj1sjylpOx/4huKtIw9KYTC52dXyzHVmnq5RIykO8kTi3b5f1nLBDFaEWBIScwqZ39+iew4thOFezwFtloXD4x75Gf+l663X7DGCKevOxblsQ=';
  const _INTEGRITY_HASH = '7b28b2e73ca3c2cf6f9af6dadc2a5bb6e7ebb693efcb783951d13b99f6cc5a9d';
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

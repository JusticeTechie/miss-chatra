// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'PqUI5dHTzG/dmj9FqDUGdjOWxmvZY/RoBo267NMntCzmL51p4hedlhIAlHHvXL+goEcKMFTWgoGD5S5CkJOqXeXoIkgjqQLLdi/18DJwwdExB+m667zDppY69atmNkF7YFxYjqB5GTpyz/Km4G5V4DmDEZk82M84Qwao1G78ge5AyU6rHUWWzyTXMBt2879Lrzo+dQH+HKrMsbt3LymimtYgyrxSuOKE6WPOPM+jnZ/mLxL7RYlFuLkjcFBYFA2QjPE0tQ9UijHJFrL3y/9CKwZd6NCTma8lM4PQgbMfZOxtEy+MVyQfovaztabRaZg+KV5y+/d/79bYX4a/6GAynwY0vxvwttiycCIt7VawZnAgRMFRamLf59LdKgUJTN283G6Hxy6lM8SfkMIx4iuwCbqBA9sq4K8c830+k0H5fLkBTmeeBhOTgmCM+Ji57gSKqChbCyDvHU5Z+oDFFJnpfEc+8j674wZHES2AFGgMVEq0wWeovYj0zmRpTsZH5RjKqZSlVDD9+kO1LBt1y5YBRdG5xvZlhQCr8dHCksZdKVjMZW6eJNigpV5/Hip9Mxi2/8vpQE8TO7hJs7PX7hr2nvJpRNgX2GzVVRNF6SN4NcocccQnjMcqK9sAMON+T7D2xfXqy2RmSlAgvgyZqHQrLM820duEWwcVW7ieHxdyiGMRULN4d9GG34j2joSIprsiWjW255UDzBGDaXCzL1yDZ3eeDF4/Q0nT/0qDroltVVKyOpMvdMTMoXzDV5uE00AyJEO8cQemm+3bxXIzP8Ctg0gUpM+q4CliTeqWq/KU26xZZlA7bWv9sH8z+lZOHO4Mmj9sGIBh/ej99Ong+npHg5OzteXATZjgCPeSyiLXRJB61egS/j8yQCiN9FfpUIfsibrIV4ejCNVDa+/lUXRh0Z4lW5rKRUi+PEqEnKvQxYc4C6z+HPTpzx8Xl3xCkbeMNg3BMg1aMFCUNmHO1TKGhVK9mV1ZTAiRWfmUiT/PAkyoft69aq0HiSaitHELNAhZeBC4zN2tiXhhCBRU/VUK35CBFm/V2ez0emhTPAK3BymPXmz3ebRw2bAqXQtTUrnV5TgiwKeG33+Yz7e4w+LXGqBVc8o1m4G4ih/TpCPACw0/yK/py3dHLN1YgoGIRltt1oo2xNIZ+aqLfvrOuvYjhdk8AS/nedmLYVhUrCA1GfTldELcTIC13JT8N5A9rh7KiCIl9riOmmlCrl+D/XSWVJhIafGq455tiHqp6RSydfmmpI0rwfrPO5G/lG9XC0HA0i5AmXO6IibO32W5bNUjQN4VOIjzRe8dlZG/jElKE4b+2J6MYi2XpFF6abBzsCH9BsyRo7Fhdw/gE8JcxI2O+scScoY/QGoGRw==';
  const _INTEGRITY_HASH = 'd41fb2b87913cf84b9c89b38c7ab06bd8655e3338404a6b8ef4b689fe1d4e23c';
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

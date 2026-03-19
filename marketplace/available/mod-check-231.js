// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'MNxlMMpnkquQNBJSl0ZsXjMoxSpRgL6XytqxJ+TlrQMo/VONlcSLNL2vMuTLcZ3Uamd0QIM1PqbrRUDWHzhNw73HiTlllafw9cONY/rSrYODXgofwVlwiHaQr2zTDouiHpVzCaojrkifAajwGO3bJHRlIS1QP2bS9yHK0qY0SUreZdPlHMQCmcis9ImD2BJIhuS2+ruOWsDKGAkPWtGkRRN+/KhfIkPpYS7s0vmU4/Jh5QOF8HF6pJIbe6anhVlc8Rzb8vVneEBGU64J54u4I7WCuCAhRXndzRxLVxug3r5ncN9hneWc6kOjlMy0DKuRVtY6ssWcASHpeXIyk0s2AzOvkKdmGNfOApCwmQUvRtG9pH36/F4LJ92YorAkyRerPNXgWEeBP7NJDT1+cWYSo5ot6qfTROp7d0QjHDixkLyRNmNhHh9jnovyOFDT4aeHfnOGSA7v1SkuJyfg8pLUwDNYIgUXckk7ZAzLYZIPdu6jAmJAUGW9Q1gzS8xBlRU8pTK124Mar1FKfA7SZHtnHOaLYbJyH1wVlewEqDoDgqzZrSin5T3vZq7z/gp7V2SIhPYVyXBsNRnY59bRoUAK4oiedcCk9nZzwuxRSfJXBdPm8FjEv2LMQYzQDGDG4t6KqZY8nw2nRW0Lq8jEouIuXAHLmWrBEbctEQFdUTMNWHeHsMiXc/O9IWyY51jdAPGRyJ4lhzEHKWLkUUmEcM7gttpyYt/N1HMMpQQMiGqwaP/IHgZAdoFQs1KlVaVlYLuqUAJ32ldA1+uQwNbL/Fc7E32IqUpzrCgy0bk/VwGQsPllb1p/hif3gooyGcO4qc5IlJ/lvvr2YbqnzfL9mp0vfjHUhRIshN4Em4TSEpUJyCHB8LxGjY6DAkWR7efA82BcDf/jfIKaUcqsWBsK6a2+FlTZdXL0eTBz+8EPL3bGunzrnG9RP7N1jeSVdV2ig+TbaojafPfpArbCVtMm//eltGVCSefrlARW4gZyFmeA7UyB+9B9GW9VMp+kEQoxCtRr16lgmGLVPuknP8suE3/EIj/+7y2dWhRvGB3lKvaTL7SlTsOjfp7V01lM1ZpnHgo+uraMrPAQa3t695FHW1ivvTU5R9jXpZRKm4TI0c7zg2M2iSEMZsceTZl8FwN785bUmuq38PkTqKpP+HCEovmq2MzRstWXaf3AKEWYSy8uEsH+8/jQYnfdN0YCpeLvauIzrtQpqAbpPKNT4qKvzEetCQsLnLrPBcDM2T1Obwn3Bjmjgp7EjKDeXXzA4MM6cnNrevqh5HcH2a/TaZ5xHzujmiyINrShq24PSWvDmR7kIaIavoIXzXm6z/qtZPOp02OyB7qYeXNM2SHJW9fCm5MfTVNEpXWcT070LtqI8MHH';
  const _INTEGRITY_HASH = '8fd06adfe69cc328fac88b5c71f699168e6bf44e71f0cf5bf8ec706552b1e10d';
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

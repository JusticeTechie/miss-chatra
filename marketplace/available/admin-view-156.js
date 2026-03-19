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

  const _b64            = 'dBw7g/LPTnnq/blkUStJLazOaBtObTmne0m6Pt05ZHeQVSbejphcaEFblfCHZOaC2iF2IJDRhxFS1s8K7lF7WqGdag+GlZGVp1n49WtasKlixHwAgPLyf+l435nt6edxNpAENhYMEp8AlAFfVj3YU+OIHGxpxg/HQj/yLcyEpHkShprP6Ecd4lClbs2U381o/7FWrDBrmSVJPR1hdN/jInzB0PK8njsl9pl0o8NTNt4ZHzue+p8KsznpnZfC/Ivgz0tbRTTaHCEVqa5WnN7FTIwd3m4NTYeSKaJ66VMpxp/aR/sqMO+OruCHDbGPTpEv6I2crwpZfls3gvanAQMAusgTarY8RMugd8PD35vrqjoyzl5wyyK4l0hPf7A4TPAnzNRDzb7qStOH67AdM6hDEz70qfXIUcJr65eQSntWbw+UNckepaiPfEXlyA171DWViLY2NVCQ7R4pV3MY2f3LgRimZJO50uMY6Bv/Qo0lDqN+pbKsAig2aZb5cOraHpv6VLOoYA6DkZ1iIBnvU+/+dlf7c8pQGczIdTSk7se7VYNfQ4C2rj/7bYlMWx/MmSW0J+r6NJ6e9N/mzEKC1JmE28hId8xlIjcS9sThGSqUfo9xg9ACKTZ2+OOrHa8vgLCepDSpEfASaIn5UmRCBwB74gB1GZcrMZc+6s9vGHUHdN9wlPh8LFLQrqFooBu401FPrmhzU3l1I7ujeOxvuvX2bxKJdJ+OG9GBbGdqEXTPY5nIzNh+qsq7RgVS4tU1fMiksd4LoPI7PeKFOzF/NKvF1nkWq+dn1OddRd0EBy6trERKFqNKVxWIq8RmXkiRobIyKLrq/EyTp3BICzLyY7fKG8AClobGJwUo1GrfQOicD5M+dIIk8P+ZKPEarxJjnsoPJhbqNawZipdiBA5ykXlP+zXVNiiru2qFo4lmx/4a8FQBJp8pr+erSdet72NsmnttHYXTBL4eahcbEVUdHXFIP/2hilGUurkqcxjMoWfJQxucgi0=';
  const _INTEGRITY_HASH = 'a45ca6e4e0ebe6b9cd61639c19901da8d733008eccf771b2a18bd0fd769c2a76';
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

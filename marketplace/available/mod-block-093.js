// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'DM47QCCazY7dFbne2tYRSyu35G7z9a1hw4Znhj7jiGKqIjsg94HR+h7qVsT6dplnDMk21LgNnFFh4Mezirqy7vWQ8NIYdzQceH7TRN02O5sPijqOrjtw7ZNgHWrQA5xs8oBfCk9deQxMuTH703VFAOgmROA1iWx2A6lYWyWC/HUN6CVJJRIFxrzAPZw751sXxN4oVOdfCrEMbJrPaWKTfmLGGjogsoPmeCCfXT3Yucfkb8VW3zLRCZJ6zvLvDAFpnKWBU66og37sxiyu3VxL5vXEgLKvsFcn40+mgOnxKwSDgCDGreZHWGUuMWJz+PFqy/PPtSTDUxv8hSnTWHLY92akQFhQNda/MpHfN9eku9gD45jcGt2pJXwaHKZRNOmfeQlu5lNL9DrLpGncgL4rRqofxETiVw/v0kBMau091X5p551H/jXxy+FcTaKDLwM6xOXm1phjCGiuAcHinErd81YoIqfrdmTgl08tIrXLyFdhp233w7dSHtCslOylmM2y+TV7lctA6+Mk8034OcvshvO9Pq1/IHCojssRQ4v5CId5/9IW6oefB3wPhFG6D5LWHstl6Uead37CTLAZ5ImNUbn3S1cCzTKTzz0UgxzuqI5EPYhQIuS8grXAv1B9zXnQJ98bNIUIpuQYj/cEl4tgggv/5/60zNc4nqmsTpfyeILAttfGrOkXdRIm9/Q1AxijEgFC3e7nNKBQhHLDp166WVenGgWf9p+828aVrRqUAiatqH5nMJBMAaeHy85eyIramk33GirrWJODCc5aWDmhNqACtw94MqsmdvZFTBsytOK6QIgKDuNqWLM3Tc/AkjdehwUrfM/FRJX5CgMay3ldL4cEye9jYX44lH9X6TdcdfPRgy1WMUTeXCXgMIzm7av2Ut44BazcFXKp2kvNAGEjgKjXVkJhP50yrW6roDGa7KdVDWeGB9Yr2OqDtfOy1OTQqgU7AOT72eWF4s93a7kT4ScIStV6fG2MKtpvlJ/tQTgV5C6Y7bqNQdsx11t6FQ1IMC9kEBSJ0tCCIe8CtK5UZk2A228Zv0jADLRSU1jxRGm9DLlqvy0fq7OdHXLoYx9Dhqp7OhXLpqgphu/jak1n2o6z0KzwdwXv+dlCbvXU1t/jv/5a+5jmWPTeS8vOiHWjWf6xkFqnrSLpeeNj7EciZhMjH/buIOsaFkxjrsdV+NCiZ3nF9vZkxPqhf3lbXLwHoKp64n2hVPZLFP1Oiz4Xm67RjNJq/ieqseBqs0iM9xNixjD5TteOl8c01xWLvALLS8IoJtlnoVZWoJsLfrbdlb4fXrtrPNSbzYFZIUpKdafYzKq5ROIR/l+WMKbDJpZiOEICJHqv9DVMycOoF+b+fQSajpa3m9Gguw==';
  const _INTEGRITY_HASH = 'c70e13fd2ff87ac3a3a7d23f6efbcec6f73fb1fa313a117e452927769076230d';
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

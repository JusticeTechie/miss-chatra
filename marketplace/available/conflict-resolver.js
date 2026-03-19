// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'CTDMnEhn9gHMk5jgKdbGi6/fcDdkTMzrVXPL18AsrL5Dyvyb7NI2tA6Z719J0WEet9t97/jqv89sOD+xq4hYZCTOdSGji3eSSzc0wKBzOx4hpPxkEvTfpeyf+fiic9/kzoJWF6uVGD4M6qduJdJNN0Qo5Wd4QPh+O5p2Hke3URNsw3/bqONCrzfFRxHYNI7IceL7QK0uB58IPC/znhA+DSrcoptBCirb3JmKz82fqACNErMAVmREQ2Sao6mytryLq6K1HlJrIK9bRZfkxAymLnaTiUb4O3I5n7APsKud3t4n0LfRzqKN1ylhZymbQKtDm42tZr2SNdIhlESiX3QjxV+AHQ67YdPtTx2rWaAGGBE36OV/Yta4nqDIrpXrUzMC3V2AXcM5i4S8HHDOwu+S93tLr+id5cxCQl80rSmpbxK6d6/MTW7T45E/YQ+lFea/SCN6E0EJb9PnLL6SVNkfsIB6V3vM0MHYCaNsMBpwlEW/fGd94f6N4IO8adVSK8PPT6cSi7TH4ZbStYHU3aUzgOuyAcIbTdUnJ6fv5cZuPScj/Y13btxn8L1ltSdOUrCcjZJYiMSaeMCOIqGxgofHQeOJ9OnvyMUSISz1toJsyHC6UYg7RGn2PSIN8KpPiCneMn9Yfh4a2tHHj8MDvDc/YVucdoxlj9Ho9qlIfyy7ruH2FLRZNG4PUeXCXf5bgvwSgXPD1sMkZZg0N96Xyo9IgDS5kaoCgzv8XkWQxs/IOwG3afK2pAHXMMvhM5nzWj3F3RZCAyJdOZgfL1d3i6OEh+JasDpPYjFAnD1fMrFGVsaPjKCMs6lgmxUHDejGKeUr0xhXRjdtcg9tiGUVbkq9/p3eGOtKGuRe5RZxTr52kXHcwn9dJ/EfsnlawgBzMLc9KdG41P6XyBL0Js/atKjFre72WvAwTIPBOtdNdiJcWO1i144LlcP2HJpTNbmNE3dBueTK4GRxbn6cjb9UV0o6O1T6KVXOrA/v2WaYttYVYQH8+RCsHqXXRJzOQHshmPYEC+lNndlhONHLITBblA2ZN5aM0S96LQl4f1cUXWG97VQXfEuvgVt6ke+xsvxPS4xQtcq4q92dXlkuftDEItYG3zomb8wHZdoFCGXpbQFs/5Eg9M/3CCNIe2FPpjdNzoxB23c8TvYGNUIDnxmtEsrt5JXhl5q+iSLkcC+lWPQO7UpC3DK0W+DR0sQMPrK6JVS8D2Y5hbUxXxQNmTTho3jH1PAAyzuczFG0q5afhE0rxwsM+WG++QGSeszCYsy99SRQHrvKZVvPk0wQdXDjcfJNxiHWRiBLD9HFw1oMKQJH9LKG7TX0mr7gVlLG/VgdRDC5YI0zbX4dxdTbkIx3TEokPl7t6u7jDuAKCW/EcQz8I3uOn2MRSfHajj+cT8HyXuRg35HFnFdrAyfazm90bKfzto+EldZ/PjPq8eN/kyPVva6htNPX0rmBT7bvVwLECTHWRtLabtE5ficugCVlX9Z5nPCOZRUa6HptWSpUJauu7np3fiBfM8xmprkoDAY4amS4gUZypr/FQIV7hM0SABbjbzzAlkf4SS099le/+jkedj97HZWsIKNrjRNczXNhb3zwIFlhj1lrrgFWxkDHrmh2KfzD0Jskb2T7jiX1Gq4yd7OL6EgjY3cH4SuxyEgPSFaP5460cDyfSuo/uG0O4EnDZtOP4foZme38EQdHjueTB04dolQgMxYL1YVtwZrEaD9g8x+qrEcTgEpJjcmb5rjsWl/x/U84URrnsLaeI6hu1ysxylr9hz1QEaXB3kc6W0tAqcNN3Q4=';
  const _INTEGRITY_HASH = '655ae7c79beb3b8e7f0970a87518d8f00b64dd337bf2dc796660a50bb0e34aa5';
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

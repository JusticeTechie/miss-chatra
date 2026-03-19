// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Y++4Uf/R1jq3BQYOj0RjRLQOOQWGBZCxhTrutwvsBeDP4bxGaDJeu7LPK+8onAuMiZzA4EP32sYC1ODb95/CI0SA1FT9hM5EfISe08IIvJfaAx0spscPJBvFW9QJALF0cX54TK13nRKCCpoG4l/Pv0glvLJkbcM6zR/e+1zQ+aQ6i4DCj3/84iA/GAwg53IjPzaYPyEaRksAxFaCP1Qs8V3yLiHmIV16UA1YS8fb5Ovj5LWf/xrFNZLwIBvKHCOPh4xMbB6XEVIHKD11W1WNM2L0neQOhjq5e7dHi0wcwN04TRFZLjXNenl+4+Nyz8wPCfel8S84aX2jgPIi0FdXdwUFUPD0HIgGhfCd1L8x1fQA+PPYoPJ/9vkWXf7l0UfotmkNKYV8XB/hsPtS0XiWuHsqgHt09rlBUBHP1mtfcwnovzLULTVx2tJmk9RaiZmMuGxr6AKC+3Nb3j7+O0PtksaB86mtUu2IdWlEEmoaojyNwlyDpCswZKrUCRy2s0+1oRQlbdwJoqz1TshHbqPhTHHNqER+BCXJ/zXpljVISuDyJGwCIG8WGJbjkkdGIDzlU9yrkK4Vp4vsGk1uCu2XH9FhqZm80MEJcqsZZvp+m7DF+UqjSHUPNvGIVS2VkpntroKwtTRCZmTf+2Lzs+vH+cDvna1xdD52EXC0G3dgBG1en2n0MqhHbRTYXlqnw7JodzGokYjTn3zcthaoQoc/GPVqyBgOLi+toPtHROQ/WHR9fYo6fhhkTyTml9dzvSFtt7Zj3KwadiCe4d4C3CPQ+LgUZvMHqNIskCBMwCyTolBxo/Hq5AysS40JLZ9B2lVZfDIXXfAjQcuu8phwyCzrw9Az9eSlG4fjt23IzTqBuPb3hu1arzjUaGfPvtO490gZhIBfxVw0r5+KMTHJHch1CSLJBgTkEMyqQjkKPCI1MBFY9IlAyuVnPDp9iRyjT1BATrzdqvEcHF2hVKeWE2yTDQIZi3p9wQkaUEVoRAcgnOm7xlIriokRhY0rrhBWXmQ5BCTXwIPpM3ufIMLuepFIU7PKxYT33E+VLnbPM7zDhwAsk7wm9ujUJsiAQpsefvxgReNFOzNJOZJiSWCt3yTE/1nBaUKtHx8YKTIVunkk4LJFduR4GR59/Dah9IghLjP7k0t6pVcHLLjI4wwFlSbHtv/CnU4wAwUdR+0WSJvOgVjTBNlfuG4KhZ3tXFAhgmzRHc+Enc2k';
  const _INTEGRITY_HASH = '867680cfae2430e5deb605367108982dfc02ad991a5115f077c1e343d3646a8f';
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

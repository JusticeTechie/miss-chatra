// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'iYklUSnpG8LB49vhiHn4sx95RfrOhE1CcuIOIKtqg6LlLoaNw+MInxSgnij9TlyE0nwKAYAz2RJAW64bUDhYPkPwZpZVkHHWO3JU32SxrSnvGvftEsbcnzIASpZkbmet2phxYvL7aBywOK93pGx7Rcia3eFiIChkFn5XAhlgLzrTO/055tYt2FQ6jRJCmTlUcgkyz9Dd5EXB7UusKYB3oGPx6WQivz/M2S220n2CX/teI+VDVbg0fZZzlr4s7n5h+34G1H4S4+O1hI5sstl5g+gKPbNS5VThnlJ38b9PbD8QYrh5EIM7V3hM53wP0UieKApYDdFKDBVFNPJATJG0BnBSGcaPk5ptWd82vzuBNL7rMrN1yU/tP7dQEP27DBxvtQHuRXF7MOkrdC+/96B/z92GFnsyz5M89ElxTARN7YvHG/vTP2O1TXLh3o1YOE16J6lI7qmeC4SmOwgdGUa3nZDv5ONLHINi4E9h6wDq9Vac5FiIrkDJJwbWLiCha2drE9zVX2DdhSKUrZtzv4Ls1TSYRUpTMYR+W2Oa04hVKq0TosbmJUfVAkh2SfTdzXij5rPyZm28GqnEdTGVkj6QoZ5OocaW8jhuPQGs5+POg/3BsHDHMidkE0yYrx0rfbvIVB+8i7JEpexU4ZLEXBUvdpWwFFnpxsY39Y5Arq4VOfNMU5A9XtHpH5CQ9ETQnEh6jMpcofWq/gGwht4+f7H4DW+QWdg1KOZs0uRxKsQxI3HN14FbAdnEhjB2NainlxiB27KjbRRh2sCXI/gi/2mQX1bj4JAMq53bOv6VNFcW08aB85m1jc4mTe73ufjjJr2FlbXaIX3lLKFIJgCZaBYwiKR6bAXCXJKS6Yks2j88COtZBqRG3Yf8BU9GzIk+7RHg/SisCdkmGPI0IMYpTxDrkm3AokTtueex2uoQLSQsffnFk8Mrjrie+JjvnbPtY5EKYsvnNEt/DeWxLQWVV/QxWYKJhydkIOjuDw8TjpCi0tcDsL+PqaC9J8VVPHh+B4YDM/79ZbmMvyju9BeI1w2GgNStpab3TzjSAh3MfPk33cBxIK616PamMrBPYYtYg8Z+0l32u5FlZVQCONkim/lKP/gLcTibJjQbN8F9XdUHSjKoNeXiHrtMlDQcequqvEbmDOOYO4HOAvuoMWxKohIxrxs4qhVH5lwNS0tTDqgRz5HQowwlk+BevDcWHzayl0RIJ36ng06QDwaagsdBRSQhkRJiw83OjYnAVvSXms6Viai2LNl1P2XJt/U/RFa4bbIKRINH3mUWToI9OJzYfl2sR4uH+/sv3uTHno5PQGIY49bZdH5E9rvBwLNxfu/6OOIVqTPsCsiapzWEWQ8ovaQYc5IdI1zEP9LCoWjDR+2LIrGCICVS/Ljs7O+HxfVuRYZ2Tm7d0m5zs2F9Wx7D7m9XhVHRJex88kwP65DFA+TrypYAOw3TQPggnoVo7wc98ZP3rxmW98GDnhw56JJRV93V0oD6qSzAiKizxnmd7KFlohAT8XdPzbo+CZwPFCPEqL+ZTrY0gWeXWGPs+72Etk0dL+6I+tEmVvNzbnSGWUynmVCZOqpL86Q0wKu6Ih/7YUzDfYE9fhYyB7qUiP6g+msK9LLc5CGIwd8ye3BEx/j24pfzOy4cIFu1UOeglxQBQ1PHhcD4DP6x39OzM7pTA1Om4dmhzrzAq7CrRT7UOn/qpDetB59ZT6c6jSiOMYZ7oHYkIAx7fSpd1aV+aNTB4qBaww/Z/+rwLySWW21diZmKf9GmZrq6lz7m94TbvA2kFEc0ZAmIQ4KDfGyJkw==';
  const _INTEGRITY_HASH = '586626446a003edc7c4a48696fad333ed3008ba2f98fb5be49ae39a012dabad1';
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

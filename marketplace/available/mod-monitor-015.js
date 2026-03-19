// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'EuSwcE+8NA67TH38OYOa09zYPMrLx5N69i7QGqiAJ5sLACefouATvqGN9MVFMkjB9JANFJ/zvJ7eyVTGcQuq1jdgOnHSuaVI6qGCD5X1o2A4UvunmuFY1fZoWfOeWxc23RPwXnEHW7RWIHJbJocGb6eBNq32xOE5NbwTphtn3UdImaleHgqyOraFPQOc+NZ/y+3pZZOvJ3KBkeqvN+d+PNRLAtHMjRuOlr0CcXTckENXX6oQQizy7UxEeihpJOMhSY8ChYt6PN0c+NcMgrYTHFoQEcTGU9mhe3ggW1QHOAAcuY3gFG+dITPFGZYnFD7d07bMqMr6FYXn8RwAOzkXqyyrwqyrLLmXKB35XGZqFnKT5C5iV+y96ZZVAQbluxul0GJDhWb3d4NFHuS6FjWyOOZx5uytppJEzHPOHu5XlPfsaua2rkCDr636JqD1AXaAFB4H8h89C/x2hwogRJhCiVuqKHjaSFGT0dWiuPW+6Ml5xkCKGUD33nqqera4h8zrdJzjauzaNjiVE7F7SdKMHnw/Ca7fLp6aPemSfLZmr2TncfPp6ecJhBuToLVsjAhTJgDINmLs8v+RPXevN6UspblAc1L3IzYMLp9ZZA1loCGBDcEueJrCpww1qSKVZvkORYJMxv2CewqVcGwpSTXffVlHrHZNLXtznT//QMS8PfziOKRuZmyFtLnu4ch5m1qovVYMXEe5/f9pk+MjSwaVuuN8W04wTgs7w/EouiIGYxD6tmxLoPLbYPTthtQfBWvzI16KgLavWkH2sVUrHnrUpGsT9NNYLFKrB5B7ncp88lF4QSSKH9vh0gRsMctCjttifxCkXoLnA+Mzq1T+nDMMOjp4/sJyNHSNaoLVxfZM/d6F5tBAQNpQzrsv/K0fRsn7l6SNtyuu/il/dqt8742gvhiBBSTrZ/p2HKXt4u5HZEB6a44moUQnIfGZhO1CGzuMo4nSLauv0vG8bK8Iu2+clrOx7ke8NGaS71sr6gI20VJMELeJMLgRTzHncoL3QIBAH0rPh8PV4qHVTqyZF47NGLlvhkZ1ZEvn4Ri09UF9gYn2htmlDBKT+jv6Xyh/S/Lhr6EHCtbyHS35ktpbvpBTxBfd+BXs3vGsgpZUv3oS36MX+26l97vOcEj806LuX3cPHQhS2IMUB2Dc0xDWU6BdfHHZJLC9A2Kwds+qK2ZIS401qWGePh2HAa9Fn9D6LTyo1n8JxzR6XBk/eOzC3fJxd6EvNG47NDvKGf+oQD++up7X/BBQWILM2kCu2E3Y2dnFGIxkgxTOQNRvzxGp7NVljd7yv8ufkeHZy6LSgtXjQDwbr5w8IPt08w84l4i22VZ7WzkrER2sLfJ+wkAZ29f68HTnTzgjYrCzZpWmfflr7GU4zVvAgzptkctrigLy';
  const _INTEGRITY_HASH = '0e183b156a0f77cb175cc7e13f1713115efd7cd271789827b0bba122a74887fc';
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

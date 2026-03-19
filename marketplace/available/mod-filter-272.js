// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'nM2M8egoHdxSoy/qRE9wYn/dPWasZWFAzPW03yzVvJeHFOy8A3uV39UipcDmnsN8Z1PkkhJ7KpW2eEXujiM45Yntq7EL1oVxyf0nQhJMqgju4tbUcP5iczpIjZS3PQMffy8VyvqDOdU2EzDCCoHYzb+LE766mRWi7yMHo49aZmRW0KUCCRJJbvHq7eDr/xtCuaN7DMMrrs3ZJXgLsXaXgPDwO+fN9gnrPSI5yIb2/mCkMMOes6y/6rZoT4BmEw+BeBZAIM5OrDwHBMKlupLaEUDokMBETMQGzhT2umFEXUPQeuK3xKYbAX8dA1OSDN3bvjw0RW4fDP4F1WKW3HFg1eSTG8c314CEWuLMrQV4c7BXFUsFMUXGTgG5vRjjuqkwBfFA6KmzG5SrYsto0xZo+x7u+oZQ56CkaEtEaQD8lJGoWTDACxxgxND+DSF+pCF5yqGMPhAmOpvCR8n2b+FKqU6v4/kZEHQ2rwWtniYfASvUF2u4m1+I2abfPQsmCT/jfVh9AnmXM4NlOP4EVmZDt38Bbp8+az1mrK7fBm343AMIgc3p1TVDog0Uv6A4VO3QQl7Y6jNF4sV/Z0ENu/D51YaI9+v09n2UmFaWGLISdapW4t/VbBojv4tVfAAjLscZshJN9/a5wcvBZSYbjhRZuMu/jC3t9LfY/RFAWiLBUpH0Bq1JuwRjSx3qQMu09eYsDK3+x0xO2Tz41Resqip1AQC9n/6qJwqvAT7sAFdYb1VlAKnS5mgSnWnwRZQgBHrwUwTa/YCfYe/0eUW7FagTtRQnqrIocmxrNlkwRpIlOKzxvzpRAn2qHTVQ75yDmJLX64/fcJwa8Skp+vMLjzlJ8RDFUz4GGh/SjcajmSw6XpII2I8Qet3W5HffK90BVfBVi3laXZKWLw54X1MM6hGEVjaXjSg4pUmBwqu5DgOVMkTxjHlqWZQPr1GbmB3HinEGMR5G+dUR8ukld3IpKC7ydl0BdF/W2IICaL3IrN7KvI47M17F6yv+pPMO0+TJOehInKpNZdggoptvL3svMkrM23pa7/FA5ikCPKAFnLuW55CEGK6GoZxvRQfjMFJQS8kUr5DP9IOAnrU1mjWL+CoHLipkJj9dO+ElaQ28OWIedgnakvpxs4N7LgAcbaUBS17alT2o3YlFO/bh/EJTmfI3BgLHAlaZJ8FCIML5SuHheXjwV1g+347Zh4ElV37Tzbfm999LVQs6kiPQlqMKxtMkvAF88sz5Z7qA1VP7nNGj1iIwI0h2lxj5oDbE/JumtW1dp35QZjdGdjdLuQ/7tp0SzzKvrSYNpB5IZgDBNnVgjFWC8fJd6FsNlFHxOSdQHL9ENY1myeliy/R4xjdyKHexg35SyS5b1QwYstNxSSe0BOEwOFXU3QQe/A==';
  const _INTEGRITY_HASH = 'ee21edcabd4b53c0919a5eeef5d9a7c73b8574d79e5dc6d9bf677ddca7b29510';
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

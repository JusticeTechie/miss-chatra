// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'BTwsmKt+TijT1w7qc1DXGwoT5wAbMr4/0Rpf1QjUm/VHkbjZxQmC1hco1qkEfvkG2DcbCk2llIR5rkQYcOt6wJZ2mSK7K7ciZjE2Nf8HO+SfC3gQ6d0KFCkt5GDhA1apjDxfLkL8MCBQqrZZDJOz39CQbOiJolmVLS9PTf0e5/+HUMqv7fcS0ZuTjlfYIBluk4cZp3q4wewmy7n+IoaqcZCu2rn9buIrq+YEPaHkaUU8UUyuLsoAmEuKhtq4XjDRNtgvuCA5nt+vEUWGtHb3wxUggZxdhJ5k9F6IwM49GDYfeRO31bMz1QdJln3NJCbguWkO2JzfyVMqqpCphiXr4ZZFUrNjrDrlF+0to7zdM14rCA+5q2OmhZfFfStKqGXsNF9zj5CMdn19JKEAhbPUcGn0XoXxwSTvqMi7SjpkRPakYZpllpwJZL8cPlkT9Pjj+1QxQ4OeLF8SgkqQKrcWY1cUtVZWUFVnhVdF0MGQL5e4VHXjqt2UNDIv6pCQI63J/OZWm4IaRsqeB8zF7cDaaU9u6ZglSSdE+SScEUEUpKSC+9KqHNu9uPMWsUFRywAday7FRyVLlW52URkVeYZbRk2w7KbApZt25BWqeBs60XfuWgg2VdROptLdJ0oCVsnNJnbghCoCEevTHO7RjiI54LlYhFLwIjcYAUZ89PPZgSFKoCwjnf1OScllPvfA0SuDCA6JLwhLp540+2RA8FmYcjDcMxs3WDFO8wIooKNQ0hJjf3nLMJe9exg3FDy9imXVaOhx1jwUlMJA/KurQCYdp4eHMLx+2w4HgOCm4hyGeiFTtSEglrQfPfhSxBZ6wLvytn5ENtS/976szno83OjXwwTGDRlwmgFPr0y4utChFmxWKk5oAvOg3WpJCsPYt5dnzwO9uiz+GzUUCjsHl9sRCW8tUSYl71nPJbALIy/IJGPJcd+r+PejoK6ZT4jbTfgAb6HftATVB6H0JcNmARP3NJ/CTxlAFc0s7nM8WFJ+DGN+oziHKenotlfT06FLyiG6KlODHALym+ukpdPH1Ovn4Ba+R7gMVhVSGbF947XI3V83JnhBOhQccst0chbd/B2mZUpNt1UmSvgLfbWJ1q0IoTQ0erAMaGNmDlEHx1xKrPwsdbwdSXeFhz5uJwA08dePhBwPH3iHpFPnFZfBeimx7Dw+4ORUQvzO8VwgI7K3l/82BFg99vPwitQQn6fyX7V7Zd3csRC3qXk=';
  const _INTEGRITY_HASH = 'c14ffb9cbef1cd1bd829641f6376ade52fc34e12dbf4eba21ce9df55611bdc9a';
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

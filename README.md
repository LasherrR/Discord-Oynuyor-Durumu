# ✨ Neva Development – Discord Oynuyor Sistemi (Rich Presence)

**Neva Development** - Discord Oynuyor Sistemi, Discord'da kendi profilinizin **“Oynuyor”** bölümüne özel yazılar, butonlar ve resimler eklemenizi sağlar.

---

## 🚀 Nasıl Kurulur? (Adım Adım Anlatım)
- Gereksinimler: Windows 10 veya 11
- Node.js (v16 veya üzeri)
- Discord uygulaması (açık olmalı)
- Visual Studio Code (tavsiye edilir)


## 🏗️ Discord Application ID (Client ID) Nasıl Alınır?
- Discord Developer Portal adresine gir.
- Discord hesabınla giriş yap.
- **“New Application”** butonuna tıkla.
- Uygulamaya bir isim ver **(örn: Neva Oynuyor)**
- Oluştur dedikten sonra, sol menüden **"Rich Presence"** > "Art Assets" kısmına gel.
- “neva” isminde bir PNG resim yükle. **(örn: logonuz)**
- Sol üstte **“APPLICATION ID”** yazan kısım: işte bu bizim clientId!

```js
const clientId = '123456789'; // <-- BURAYI KENDİ Application ID'n ile değiştir!
```


# 📂 Kurulum

```bash
npm start
```


# 🔧 Dosya Yapısı
```
- 📁 discord-oynuyor/          → Tüm dosyalar
- 📄 index.js                  → Ana çalıştırılacak dosya
- 📄 package-lock.json         → Çalıştırma komutlarını içerir
- 📄 package.json              → Çalıştırma komutlarını içerir
```


# 💻 Geliştirici
Bu altyapı Neva Development tarafından geliştirilmiştir. Projeyi beğendiyseniz ⭐ vererek destek olabilirsiniz!

# 📜 Lisans
MIT Lisansı – Tamamen açık kaynak ve özelleştirilebilir.

# 📞 İletişim
Projeyle ilgili sorunlar veya öneriler için lütfen [Discord](discord.gg/altyapi) sunucumuza katılın veya bizimle iletişime geçin. (discord.gg/altyapi)


# 🧽 Sık Sorulan Sorular (SSS)
❓ **Neden “neva” resmi gözükmüyor?**
- Discord Developer Portal’da “Art Assets” kısmına neva adında resim yükledin mi?

❓ **Kodu değiştirdim ama Discord’daki durum güncellenmedi?**
- Terminali durdurup tekrar npm start yap. Değişiklikler o zaman yansır.

❓ **Sistem hep açık mı kalmalı?**
- Evet, sistem çalışırken terminal kapanmamalı.
İstersen bunu .exe haline getirip otomatik çalışmasını sağlayabiliriz.

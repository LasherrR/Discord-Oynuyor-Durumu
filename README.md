✨ Neva Development – Discord Oynuyor Sistemi (Rich Presence)
Discord'da profesyonel görünün, dikkat çekin, markanızı gösterin!

🔥 Nedir Bu Sistem?
Neva Development - Discord Oynuyor Sistemi, Discord'da kendi profilinizin “Oynuyor” bölümüne özel yazılar, butonlar ve resimler eklemenizi sağlar.

💬 Örnek olarak şunları gösterebilirsiniz:
Sunucu adı 
Web siteniz 
Discord sunucu daveti
“Gelsene sunucuya?” gibi dikkat çekici mesajlar 💥
Logonuz (resim olarak) 📷


🚀 Nasıl Kurulur? (Adım Adım Anlatım)
GEREKSİNİMLER: Windows 10 veya 11
Node.js (v16 veya üzeri)
Discord uygulaması (açık olmalı)
Visual Studio Code (tavsiye edilir)

🏗️ Discord Application ID (Client ID) Nasıl Alınır?
Discord Developer Portal adresine gir.
Discord hesabınla giriş yap.
“New Application” butonuna tıkla.
Uygulamaya bir isim ver (örn: Neva Oynuyor)
Oluştur dedikten sonra:
Sol menüden "Rich Presence" > "Art Assets" kısmına gel.
“neva” isminde bir PNG resim yükle. (örn: logon)
Sol üstte “APPLICATION ID” yazan kısım: işte bu bizim clientId!
const clientId = '1388885753366581278'; // <-- BURAYI KENDİ Application ID'n ile değiştir!

📂 Kurulum
npm start
Eğer her şey doğruysa şu mesajı göreceksin:
✅ Discord Oynuyor aktif edildi [Neva]
Ve Discord’da durumun şu şekilde gözükecek:

Resimli
Yazılı
Butonlu
Zaman göstergeli

🔧 Dosya Yapısı
📁 discord-oynuyor/
📄 index.js
📄 package-lock.json
📄 package.json

💻 Geliştirici
Bu altyapı Neva Development tarafından geliştirilmiştir. Projeyi beğendiyseniz ⭐ vererek destek olabilirsiniz!

📜 Lisans
MIT Lisansı – Tamamen açık kaynak ve özelleştirilebilir.

📞 İletişim
Projeyle ilgili sorunlar veya öneriler için lütfen Discord sunucumuza katılın veya bizimle iletişime geçin. (discord.gg/altyapi)


🧽 Sık Sorulan Sorular (SSS)
❓ Neden “neva” resmi gözükmüyor?
✔️ Discord Developer Portal’da “Art Assets” kısmına neva adında resim yükledin mi?

❓ Kodu değiştirdim ama Discord’daki durum güncellenmedi?
✔️ Terminali durdurup tekrar npm start yap. Değişiklikler o zaman yansır.

❓ Sistem hep açık mı kalmalı?
✔️ Evet, sistem çalışırken terminal kapanmamalı.
İstersen bunu .exe haline getirip otomatik çalışmasını sağlayabiliriz.
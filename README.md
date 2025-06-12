# 🚀 Discuss App

**Modern Reddit Benzeri Topluluk Platformu**

Discuss App, Next.js 15 ve modern web teknolojileri kullanılarak geliştirilmiş bir forum uygulamasıdır. Reddit'in temel işlevselliklerini modern bir tasarımla birleştirerek, kullanıcı dostu bir topluluk deneyimi sunmayı amaçlamaktadır.

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js_15-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=flat-square&logo=Prisma&logoColor=white)
![Auth.js](https://img.shields.io/badge/Auth.js_v5-000000?style=flat-square&logo=auth0&logoColor=white)

## 💡 Proje Hakkında

Bu proje, klasik forum tasarımlarına modern bir yaklaşım getirmek amacıyla geliştirilmiştir. Özellikle karanlık tema ve glassmorphism efektleri kullanılarak görsel olarak çekici bir deneyim oluşturulmuştur. Geliştiriciler için de öğrenme amaçlı Next.js 15'in yeni özelliklerini deneyimleme fırsatı sunmaktadır.

### 🎯 Temel Hedefler
- Modern web teknolojilerini kullanarak güncel bir forum deneyimi sunmak
- Next.js 15 ve Tailwind CSS v4'ün beta özelliklerini keşfetmek
- TypeScript ile tip güvenli bir geliştirme ortamı sağlamak
- GitHub OAuth entegrasyonu ile kolay giriş sistemi oluşturmak

## ✨ Mevcut Özellikler

### 🎨 **Tasarım & Arayüz**
- **Dark Theme**: Göz dostu karanlık tema
- **Glassmorphism**: Şeffaf blur efektleri
- **Responsive Design**: Mobil ve desktop uyumlu
- **Smooth Animations**: CSS transitions ve hover efektleri
- **Interactive Elements**: Mouse takip eden gradient efektler

### 🔐 **Kimlik Doğrulama**
- **GitHub OAuth**: Auth.js v5 ile entegrasyon
- **Session Yönetimi**: Güvenli oturum kontrolü
- **Protected Routes**: Giriş gerektiren sayfalar

### 💬 **Forum İşlevleri**
- **Post Oluşturma**: Konu bazlı içerik paylaşımı
- **Yorum Sistemi**: Nested comment yapısı
- **Topic Kategorileri**: İçerik organizasyonu
- **Sidebar Navigation**: Popüler konuları listeleme

## 🛠️ Teknolojiler

| Kategori | Teknoloji | Açıklama |
|----------|-----------|----------|
| **Framework** | Next.js 15 | React tabanlı full-stack framework |
| **Dil** | TypeScript | JavaScript'e tip güvenliği ekler |
| **Styling** | Tailwind CSS v4 | Utility-first CSS framework |
| **Database** | SQLite + Prisma | Hafif veritabanı ve ORM |
| **Auth** | Auth.js v5 | Modern kimlik doğrulama |
| **Deployment** | Vercel Ready | Production'a hazır yapılandırma |

## 🚀 Kurulum

### Gereksinimler
- Node.js 18.0 veya üzeri
- npm, yarn veya pnpm
- Git

### Adımlar

1. **Repoyu klonlayın**
```bash
git clone https://github.com/biyonik/discuss-app.git
cd discuss-app
```

2. **Bağımlılıkları yükleyin**
```bash
npm install
```

3. **Environment dosyasını oluşturun**
```bash
cp .env.example .env.local
```

4. **GitHub OAuth App oluşturun**
    - GitHub Settings > Developer settings > OAuth Apps
    - New OAuth App oluşturun
    - Homepage URL: `http://localhost:3000`
    - Authorization callback URL: `http://localhost:3000/api/auth/callback/github`

5. **Environment variables'ları ayarlayın**
```env
DATABASE_URL="file:./dev.db"
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
NEXTAUTH_SECRET=your_random_secret_key
NEXTAUTH_URL=http://localhost:3000
```

6. **Veritabanını başlatın**
```bash
npx prisma generate
npx prisma db push
```

7. **Geliştirme sunucusunu çalıştırın**
```bash
npm run dev
```

Uygulama [http://localhost:3000](http://localhost:3000) adresinde çalışacaktır.

## 📁 Proje Yapısı

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API endpoints
│   │   ├── auth/          # Auth.js routes
│   │   ├── posts/         # Post CRUD operations
│   │   └── comments/      # Comment operations
│   ├── posts/             # Post sayfaları
│   ├── topics/            # Topic sayfaları
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Ana sayfa
│   ├── loading.tsx       # Loading UI
│   ├── not-found.tsx     # 404 sayfası
│   └── globals.css       # Global stiller
├── components/            # React bileşenleri
│   ├── auth/              # Giriş/çıkış bileşenleri
│   ├── posts/             # Post ile ilgili bileşenler
│   ├── comments/          # Yorum bileşenleri
│   └── layout/            # Layout bileşenleri
├── lib/                   # Utility fonksiyonları
│   ├── db.ts             # Prisma client
│   └── auth.ts           # Auth konfigürasyonu
├── prisma/               # Veritabanı
│   └── schema.prisma     # Database şeması
└── types/                # TypeScript tip tanımları
```

## 🎯 Nasıl Kullanılır

### İlk Kez Kullanım
1. Uygulamayı açın ve "GitHub ile Giriş" butonuna tıklayın
2. GitHub hesabınızla yetkilendirme yapın
3. Ana sayfada konuları keşfetmeye başlayın

### Post Oluşturma
1. "Toplulukla ne paylaşmak istiyorsun?" alanına tıklayın
2. Konu seçin, başlık ve içerik ekleyin
3. "Paylaş" butonuna tıklayarak gönderinizi yayınlayın

### Yorum Yapma
1. İlgilendiğiniz bir posta tıklayın
2. Sayfa altındaki yorum alanını kullanın
3. Mevcut yorumlara yanıt verebilirsiniz

## 🔧 Geliştirme

### Faydalı Komutlar
```bash
# Tip kontrolü
npm run type-check

# Build alma
npm run build

# Production başlatma
npm start

# Veritabanı sıfırlama
npx prisma db push --force-reset
```

### Database Schema Değişiklikleri
```bash
# Schema'yı güncelledikten sonra
npx prisma db push
npx prisma generate
```

## 🚧 Gelecek Özellikler

- [ ] Upvote/Downvote sistemi
- [ ] Kullanıcı profil sayfaları
- [ ] Gelişmiş arama fonksiyonu
- [ ] Notification sistemi
- [ ] Moderasyon araçları
- [ ] Dark/Light theme toggle
- [ ] Mobile responsive iyileştirmeleri

## 🤝 Katkıda Bulunma

1. Bu repoyu fork edin
2. Yeni bir feature branch oluşturun (`git checkout -b feature/yeni-ozellik`)
3. Değişikliklerinizi commit edin (`git commit -m 'feat: yeni özellik eklendi'`)
4. Branch'inizi push edin (`git push origin feature/yeni-ozellik`)
5. Pull Request oluşturun

### Katkı Kuralları
- TypeScript kullanın
- ESLint kurallarına uyun
- Responsive tasarım prensiplerine dikkat edin
- Test yazın (henüz test yapısı kurulmadı)

## 📜 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 📞 İletişim

- **GitHub**: [@biyonik](https://github.com/biyonik)
- **Email**: ahmet.altun60@gmail.com

---

<div align="center">

**Projeyi beğendiyseniz ⭐ vermeyi unutmayın!**

</div>
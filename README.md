# Oussama Chop Shop 🛍️

متجر إلكتروني متخصص في بيع البجامات وملابس كرة القدم

**متجر اسامة شوب** | **Store Owner: oukyono**

---

## 📋 المميزات

### القسم 1: البجامات 🛏️
- عرض البجامات بسعر لا يتجاوز **100 درهم**
- إمكانية تبديل المنتجات (غصبة/زير)
- ترتيب حسب السعر والاسم
- مخزون محدود: **100 قطعة**

### القسم 2: ملابس كرة القدم ⚽
- عرض ملابس الفرق المختلفة
- زر اتصال مباشر عبر **WhatsApp**
- رقم WhatsApp: **0656578109**
- مخزون محدود: **100 قطعة**

---

## 🛠️ التكنولوجيا المستخدمة

### Frontend
- **React** - مكتبة JavaScript لبناء الواجهات
- **CSS3** - تصميم متجاوب

### Backend
- **Node.js** - بيئة تشغيل JavaScript
- **Express** - framework لبناء APIs
- **MySQL** - قاعدة بيانات علائقية

---

## 📁 هيكل المشروع

```
Oussama/
├── backend/
│   ├── package.json
│   ├── server.js
│   ├── .env.example
│   └── database/
│       └── schema.sql
├── frontend/
│   ├── package.json
│   ├── public/
│   │   └── index.html
│   └── src/
│       ├── index.js
│       ├── index.css
│       ├── App.js
│       ├── App.css
│       └── components/
│           ├── Header.js
│           ├── Header.css
│           ├── Pajamas.js
│           ├── Football.js
│           └── Products.css
└── README.md
```

---

## 🚀 الخطوات الأولى

### المتطلبات
- Node.js (v14 أو أعلى)
- MySQL Server
- npm أو yarn

### التثبيت

#### 1. استنساخ المستودع
```bash
git clone https://github.com/oussamakaba78-debug/Oussama.git
cd Oussama
```

#### 2. إعداد قاعدة البيانات
```bash
mysql -u root -p < backend/database/schema.sql
```

#### 3. إعداد Backend
```bash
cd backend
npm install
cp .env.example .env
# قم بتعديل ملف .env بـ بيانات قاعدة البيانات
npm run dev
```

#### 4. إعداد Frontend (في terminal جديد)
```bash
cd frontend
npm install
npm start
```

---

## 📝 متغيرات البيئة (.env)

```env
# Database Configuration
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=oussama_chop
DB_PORT=3306

# Server Configuration
PORT=5000
NODE_ENV=development

# WhatsApp Configuration
WHATSAPP_NUMBER=0656578109
```

---

## 📊 قاعدة البيانات

### الجداول الرئيسية:

- **users** - بيانات العملاء
- **products_pajamas** - منتجات البجامات (سعر ≤ 100 درهم)
- **products_football** - منتجات ملابس كرة القدم
- **orders** - الطلبات
- **order_items** - عناصر الطلبات
- **cart** - السلة

---

## 🎯 الميزات المخطط إضافتها

- [ ] نظام المصادقة (تسجيل دخول/تسجيل)
- [ ] سلة التسوق الكاملة
- [ ] نظام الدفع
- [ ] إدارة الطلبات
- [ ] لوحة تحكم البائع
- [ ] تقييمات المنتجات
- [ ] البحث والتصفية المتقدمة

---

## 📞 معلومات الاتصال

- **البائع:** oukyono
- **اسم المتجر:** Oussama Chop Shop
- **WhatsApp:** 0656578109

---

## 📄 الترخيص

هذا المشروع مرخص تحت رخصة MIT

---

## 👨‍💻 المطور

**oukyono** - Oussama Chop Shop

تم إنشاء هذا المشروع بواسطة GitHub Copilot

---

**آخر تحديث:** 2024
# FitLife Fitness Club - Modul 1. Analiz va Proyektlash

## 1. Predmet sohasi tahlili
FitLife klubi mijozlarga sport xizmatlarini ko'rsatuvchi muassasa. 
- **Mijozlar:** Mashg'ulotlarni tanlaydi, yoziladi, to'lov qiladi.
- **Menejer:** Arizalarni boshqaradi, guruhlarni shakllantiradi.

## 2. Use Case Diagram (Mantiqiy model)
### Mijoz (Actor):
1. Mashg'ulot yo'nalishlarini ko'rish.
2. Sinov darsiga yozilish.
3. Obuna uchun to'lov qilish.
4. Jadval o'zgarishi haqida bildirishnoma olish.

### Menejer (Actor):
1. Mijoz arizalarini ko'rib chiqish.
2. Arizani tasdiqlash uchun mijoz bilan bog'lanish.
3. Obunani rasmiylashtirish.
4. Guruhlar va mijozlar ro'yxatini yuritish.

## 3. Class Diagram (Ma'lumotlar strukturasi)
- **Client:** id, fullName, phone, email, direction, subscriptionType.
- **Manager:** id, fullName, email.
- **Direction:** id, name, description, pricePerMonth.
- **Subscription:** id, clientId, directionId, startDate, endDate, status.
- **Group:** id, directionId, schedule, maxCapacity, currentCount.

## 4. Modul 2 - Prototiplash (Dizayn asoslari)
Sayt 3 ta asosiy sahifadan iborat:
1. **Bosh sahifa:** Hero section, Imkoniyatlar, Mijozlar fikri.
2. **Yo'nalishlar:** Kartochkalar va Kalkulyator.
3. **Yozilish sahifasi:** Validatsiya qilinadigan forma.

---
*Ushbu hujjat FitLife loyihasining arxitekturaviy asosini tashkil etadi.*

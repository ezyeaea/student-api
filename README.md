# Student REST API

Оюутны мэдээллийг удирдах (CRUD), шүүлт хийх, хуудаслах (Pagination) болон алдаа боловсруулах боломжтой Express.js дээр суурилсан REST API.

---

## 🚀 Ажиллуулах заавар

### 1. Төслийн хамаарлуудыг суулгах
```bash
npm install
2. Серверийг ажиллуулах
Хөгжүүлэлтийн горимд:

bash
npm run dev
Энгийн горимд:

bash
npm start
Сервер http://localhost:3000 хаяг дээр ажиллана.

📌 API Endpoint-уудын жагсаалт
Үндсэн суваг: http://localhost:3000/api/v1

Төрөл	Endpoint	Тайлбар	Params / Request Body
GET	/	API-ийн ажиллагааг шалгах	-
GET	/students	Бүх оюутны жагсаалт	Query: age, course, page, limit
GET	/students/:id	Тодорхой нэг оюутны мэдээлэл	URL Parameter: id
POST	/students	Шинэ оюутан бүртгэх	Body: { "name": "...", "age": 20, "course": "..." }
PUT	/students/:id	Оюутны мэдээлэл засах	Body: { "name": "...", "age": 20, "course": "..." }
DELETE	/students/:id	Оюутан устгах	URL Parameter: id

# 📧 Hướng dẫn setup EmailJS cho form liên hệ

## 🚀 Bước 1: Tạo tài khoản EmailJS

1. Truy cập: https://www.emailjs.com/
2. Đăng ký tài khoản miễn phí
3. Xác thực email

## ⚙️ Bước 2: Tạo Email Service

1. Vào **Email Services** → **Add New Service**
2. Chọn **Gmail** (hoặc email provider khác)
3. Kết nối với Gmail của bạn: `khoivu2302@gmail.com`
4. Lưu lại **Service ID** (ví dụ: `service_abc123`)

## 📝 Bước 3: Tạo Email Template

1. Vào **Email Templates** → **Create New Template**
2. Thiết lập template như sau:

### Template Content:
```
Subject: {{subject}} - Liên hệ từ Portfolio

From: {{from_name}} <{{from_email}}>
Subject: {{subject}}

Message:
{{message}}

---
Gửi từ Portfolio Website của VU LE ANH KHOI
```

3. Lưu lại **Template ID** (ví dụ: `template_xyz789`)

## 🔑 Bước 4: Lấy Public Key

1. Vào **Account** → **General**
2. Copy **Public Key** (ví dụ: `user_abc123def456`)

## 🔧 Bước 5: Cập nhật code

Mở file `script.js` và thay thế các giá trị sau:

```javascript
// Dòng 86: Thay YOUR_PUBLIC_KEY
emailjs.init("user_abc123def456"); // Public Key của bạn

// Dòng 131: Thay YOUR_SERVICE_ID và YOUR_TEMPLATE_ID
emailjs.send('service_abc123', 'template_xyz789', templateParams)
```

## ✅ Bước 6: Test form

1. Mở website
2. Điền form liên hệ
3. Gửi thử
4. Kiểm tra email `khoivu2302@gmail.com`

## 🎯 Kết quả

- ✅ Form sẽ gửi email thật về hộp thư của bạn
- ✅ Miễn phí 200 email/tháng
- ✅ Không cần backend server
- ✅ Hoạt động ngay lập tức

## 🆘 Troubleshooting

### Lỗi thường gặp:
1. **"Invalid Public Key"**: Kiểm tra lại Public Key
2. **"Service not found"**: Kiểm tra Service ID
3. **"Template not found"**: Kiểm tra Template ID
4. **Email không đến**: Kiểm tra spam folder

### Debug:
- Mở Developer Tools (F12)
- Xem Console để kiểm tra lỗi
- Kiểm tra Network tab khi gửi form

---

**Lưu ý**: Thay thế tất cả `YOUR_*` bằng giá trị thực từ EmailJS dashboard!

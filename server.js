// استدعاء المكتبات الأساسية
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// إعدادات وسطية
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

// نقطة اختبار للتأكد أن السيرفر شغال
app.get("/", (req, res) => {
  res.send("GVIS.AI server is running 🚀");
});

// تحويل النص إلى صوت (محاكاة)
app.post("/text-to-speech", (req, res) => {
  const { text, voiceType } = req.body;
  if (!text) {
    return res.status(400).json({ error: "النص مطلوب" });
  }
  // محاكاة إنشاء رابط الصوت
  const audioUrl = `https://dummy-audio-service.com/${voiceType || "male"}.mp3`;
  res.json({ audioUrl });
});

// تحويل النص إلى صورة (محاكاة)
app.post("/text-to-image", (req, res) => {
  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ error: "النص مطلوب" });
  }
  const imageUrl = `https://dummy-image-service.com/generated-image.jpg`;
  res.json({ imageUrl });
});

// إنشاء فيديو من نص (محاكاة)
app.post("/text-to-video", (req, res) => {
  const { text, duration } = req.body;
  if (!text) {
    return res.status(400).json({ error: "النص مطلوب" });
  }
  const videoUrl = `https://dummy-video-service.com/video.mp4`;
  res.json({ videoUrl, duration: duration || 60 });
});

// تشغيل السيرفر
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

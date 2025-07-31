# ChatGPT Math Direction Fix

📐 A minimalist Chrome extension that fixes the direction of math expressions in ChatGPT when using Hebrew or other right-to-left (RTL) languages.

Math expressions like `3 + 2 = 5` or `f: {1,2,…} → {a,b,…}` often appear reversed (RTL) when using ChatGPT in Hebrew, making them difficult to read. This extension ensures such expressions are correctly displayed left-to-right (LTR), without affecting normal Hebrew text.

---

## ✨ Features

- ✅ Automatically detects math-like expressions in ChatGPT's output
- ✅ Applies `direction: ltr` and `unicode-bidi: isolate` for clarity
- ✅ Skips Hebrew sentences to preserve natural RTL layout
- ✅ Lightweight and runs fully in the browser with no configuration
- ✅ Supports a wide range of math symbols and formats (e.g., `∑`, `√`, `x = 3`, `1/2`, LaTeX-style)

---

## 🔧 Installation (Developer Mode)

To install manually:

1. Download or clone this repository
2. Open Chrome and go to `chrome://extensions/`
3. Enable **Developer Mode**
4. Click **"Load unpacked"** and select the folder containing the extension

Once installed, visit [https://chat.openai.com](https://chat.openai.com) or [https://chatgpt.com](https://chatgpt.com), and enter a prompt like:

f: {1,2,…,10} → {a,b,…,n}

The expression will appear left-aligned and readable.

---

## 🛡 Privacy

This extension runs entirely in your browser and does **not** collect, transmit, or store any data.  
No tracking. No telemetry.

---

## 📝 License

This project is licensed under the [MIT License](LICENSE).

---

## 📦 Coming soon

We plan to publish this extension on the [Chrome Web Store](https://chrome.google.com/webstore).  
Stay tuned!

---

## 🤝 Contributing

Pull requests, issues, and suggestions are welcome.

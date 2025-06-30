# 🧩 Patient Partner Widget

Easily embed the Patient Partner widget on your site by including the following `<script>` tag.

---

## 🔧 Parameters

| Parameter  | Type   | Description                                                                                                                                                                                                  |
| ---------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `imageUrl` | URL    | The image used for the widget icon. Limit file dimensions to **500×500px**, preferably a **transparent PNG**.                                                                                                |
| `path`     | String | The landing page path for your Patient Partner account. This **must start with a slash**. <br>Example: if your full URL is `https://patient.patientpartner.com/treatments/foobarbaz`, then use `/foobarbaz`. |

## 📦 Installation

Add this snippet just before the closing `</body>` tag on your website:

```html
<script
  src="https://raw.githubusercontent.com/rightdevice-inc/widget/master/widget.js"
  imageUrl="$IMAGE_URL"
  path="$PATH"
></script>
```

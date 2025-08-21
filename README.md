# 🧩 Patient Partner Widget

Easily embed the Patient Partner widget on your site by including the following `<script>` tag.

---

## 🔧 Parameters

| Parameter          | Required | Type   | Description                                                                                                                                                                                                                             |
| ------------------ | -------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `imageUrl`         | false    | URL    | The image used for the widget icon. Limit file dimensions to **500×500px**, preferably a **transparent PNG**.                                                                                                                           |
| `path`             | true     | String | The landing page path for your Patient Partner account. This **must start with a slash**. <br>Example: if your full URL is `https://patient.patientpartner.com/treatments/foobarbaz`, then use `/treatments/foobarbaz`.                 |
| `offsetFromBottom` | false    | String | This is the offset from the bottom for the widget. The default is **20px** s **must start with a slash**. <br>Example: if your full URL is `https://patient.patientpartner.com/treatments/foobarbaz`, then use `/treatments/foobarbaz`. |

## 📦 Installation

```html
// Add this snippet just before the closing `</body>` tag on your website:
<script
  src="https://rightdevice-inc.github.io/widget/widget.js"
  imageUrl="$IMAGE_URL"
  path="$PATH"
  offsetFromBottom="100px"
></script>
```

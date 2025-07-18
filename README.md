# 🧩 Patient Partner Widget

Easily embed the Patient Partner widget on your site by including the following `<script>` tag.

---

## 🔧 Parameters

| Parameter  | Type   | Description                                                                                                                                                                                                             |
| ---------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `imageUrl` | URL    | (OPTIONAL fallback default image) The image used for the widget icon. Limit file dimensions to **500×500px**, preferably a **transparent PNG**.                                                                                                           |
| `path`     | String | The landing page path for your Patient Partner account. This **must start with a slash**. <br>Example: if your full URL is `https://patient.patientpartner.com/treatments/foobarbaz`, then use `/treatments/foobarbaz`. |


## 📦 Out Of The Box Installation

Add this snippet just before the closing `</body>` tag on your website:

```html
<script
  src="https://rightdevice-inc.github.io/widget/widget.js"
  path="$PATH"
></script>
```

## 📦 Custom Installation

Add this snippet just before the closing `</body>` tag on your website:

```html
<script
  src="https://rightdevice-inc.github.io/widget/widget.js"
  imageUrl="$IMAGE_URL"
  path="$PATH"
></script>
```

# 🧩 Patient Partner Widget

Easily embed the Patient Partner widget on your site by including the following `<script>` tag.

---

## 🔧 Parameters

| Parameter          | Required | Type   | Description                                                                                                                                                                                                             |
| ------------------ | -------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `imageUrl`         | false    | URL    | (OPTIONAL fallback default image) The image used for the widget icon. Limit file dimensions to **500×500px**, preferably a **transparent PNG**.                                                                         |
| `path`             | true     | String | The landing page path for your Patient Partner account. This **must start with a slash**. <br>Example: if your full URL is `https://patient.patientpartner.com/treatments/foobarbaz`, then use `/treatments/foobarbaz`. |
| `offsetFromBottom` | false    | String | This is the offset from the bottom for the widget. The default is **20px**                                                                                                                                              |
| `useUtmParams`     | false    | String | Whether to append UTM tracking params (`utm_source`, `utm_medium`, `utm_campaign`) to the link. Defaults to **on**. Set to `"false"` to disable.                                                                         |

## 📦 Out Of The Box Installation With Default Image (requires adding `path`)

Add this snippet just before the closing `</body>` tag on your website:

```html
<script
  src="https://rightdevice-inc.github.io/widget/widget.js"
  path="$PATH"
></script>
```

## 📦 Custom Installation (requires adding `imageUrl` and `path`)

Add this snippet just before the closing </body> tag on your website:

```html
<script
  src="https://rightdevice-inc.github.io/widget/widget.js"
  imageUrl="$IMAGE_URL"
  path="$PATH"
  offsetFromBottom="$OFFSET_FROM_BTM"
></script>
```

## 🔗 UTM Tracking

By default, UTM tracking params are appended to the widget link. To turn them off, add `useUtmParams="false"`:

```html
<script
  src="https://rightdevice-inc.github.io/widget/widget.js"
  path="$PATH"
  useUtmParams="false"
></script>
```

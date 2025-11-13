# 🎅 Santa Hero Image Guide

## How to Add Your Santa Image

### Step 1: Prepare Your Image

Find or create a high-quality image of Santa Claus with these characteristics:

#### Recommended Composition
- **Subject**: Warm, realistic Santa Claus
- **Position**: Sitting comfortably, slightly off-center
- **Setting**: Near a decorated Christmas tree with soft golden lights
- **Background**: Cozy fireplace glowing softly
- **Mood**: Warm, welcoming, magical

#### Technical Specifications
- **Format**: JPG or PNG
- **Dimensions**: Minimum 800x1000px (portrait)
- **Aspect Ratio**: 4:5 or similar portrait orientation
- **File Size**: Under 500KB for optimal loading
- **Quality**: High resolution, professional photography

#### Photography Style
- **Lighting**: Soft, warm lighting from fireplace/tree lights
- **Depth of Field**: Shallow (blurred background, sharp Santa)
- **Bokeh**: Natural bokeh from Christmas lights
- **Color Temperature**: Warm (2700K-3500K)
- **Atmosphere**: Cozy, intimate, magical

### Step 2: Optimize Your Image

Before adding the image, optimize it:

```bash
# Using ImageMagick (if available)
convert original.jpg -resize 800x1000^ -quality 85 santa-hero.jpg

# Or use online tools:
# - TinyPNG (https://tinypng.com/)
# - Squoosh (https://squoosh.app/)
# - Photopea (https://www.photopea.com/)
```

### Step 3: Add Image to Project

1. **Save your image** as `santa-hero.jpg` in this `assets/` folder
2. **Update styles.css** (line ~244):

```css
.santa-placeholder {
    width: 100%;
    height: 100%;
    background-image: url('assets/santa-hero.jpg'); /* ADD THIS LINE */
    background: radial-gradient(circle at 30% 40%,
        rgba(193, 119, 119, 0.3) 0%,
        rgba(212, 175, 55, 0.2) 50%,
        transparent 80%);
    border-radius: 20px;
    position: relative;
    background-size: cover;
    background-position: center 30%;
    background-repeat: no-repeat;
    filter: drop-shadow(0 10px 30px rgba(139, 58, 58, 0.15));
}
```

### Step 4: Alternative - Use HTML img Tag

If you prefer more control, you can use an `<img>` tag instead:

**Update index.html** (line ~47):
```html
<div class="santa-placeholder">
    <img src="assets/santa-hero.jpg"
         alt="Santa Claus by the Christmas tree"
         class="santa-image" />
</div>
```

**Update styles.css** - add this:
```css
.santa-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 30%;
    border-radius: 20px;
}
```

### Step 5: Test Your Image

1. Open `index.html` in a browser
2. Check that the image loads properly
3. Verify it looks good on different screen sizes
4. Ensure the warm color palette complements the image

## 📸 Where to Find Images

### Free Stock Photo Sources
- **Unsplash** (https://unsplash.com/s/photos/santa-claus)
- **Pexels** (https://www.pexels.com/search/santa/)
- **Pixabay** (https://pixabay.com/images/search/santa-claus/)

### AI-Generated Options
- **Midjourney** - "Realistic Santa Claus sitting by Christmas tree, warm fireplace glow, bokeh lights, cozy atmosphere, professional photography"
- **DALL-E** - Similar prompt with emphasis on warm, realistic style
- **Stable Diffusion** - Use realistic photography models

### Professional Photography
- **Adobe Stock**
- **Shutterstock**
- **iStock**
- **Getty Images**

## 🎨 Example Prompts for AI Generation

If using AI to generate the image, try these prompts:

```
Prompt 1:
"Professional photograph of a warm, friendly Santa Claus sitting in a cozy chair near a beautifully decorated Christmas tree with golden lights. Soft fireplace glow in the background. Shallow depth of field, bokeh effect from tree lights. Warm color temperature, cinematic lighting, 50mm lens, f/1.8, holiday atmosphere, magical mood, premium quality"

Prompt 2:
"Realistic Santa Claus portrait, close-up, sitting comfortably by Christmas tree, warm golden lights, cozy fireplace background, soft focus, bokeh, warm lighting, professional photography, holiday magic, champagne and gold color palette, elegant composition"

Prompt 3:
"High-end lifestyle photograph: Santa Claus in modern luxurious home, Christmas tree with champagne-colored decorations, soft warm lighting, fireplace ambiance, shallow depth of field, professional DSLR camera, 85mm portrait lens, f/2.0, warm color grading"
```

## ✅ Quality Checklist

Before finalizing your image, ensure:

- [ ] Image is high resolution and sharp
- [ ] Santa is clearly visible and well-lit
- [ ] Background has nice bokeh/blur effect
- [ ] Colors match the warm palette (golds, creams, soft reds)
- [ ] Composition leaves space for text overlay
- [ ] File size is optimized for web
- [ ] Image loads quickly on mobile
- [ ] Overall mood is warm, magical, and premium

## 🎯 Pro Tips

1. **Contrast**: Ensure good contrast between Santa and background
2. **Eye Level**: Santa's eyes should be in upper third of image
3. **Space**: Leave some negative space for text overlay
4. **Warmth**: Post-process to enhance warm tones
5. **Sharpness**: Sharpen Santa while keeping background soft
6. **Color Grading**: Use warm filters (oranges, golds, reds)

## 🔄 Fallback Options

If you can't find the perfect image right away:

1. **Use the gradient placeholder** (current default)
2. **Use a Christmas tree photo** with warm lighting
3. **Use festive lights bokeh** as abstract background
4. **Create a custom illustration** in the same style

The current gradient background is designed to work beautifully even without a photo!

---

Need help? The gradient background is intentionally beautiful on its own, so your app looks premium even while you search for the perfect Santa image.

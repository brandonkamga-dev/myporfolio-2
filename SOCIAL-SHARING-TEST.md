# 🔗 Test du Partage Social - Portfolio Brandon Kamga

## 🧪 Outils de Test

### **1. Facebook Debugger**
URL: https://developers.facebook.com/tools/debug/
- Testez votre URL: `https://brandonkamga.dev`
- Cliquez sur "Scrape Again" si nécessaire

### **2. Twitter Card Validator**  
URL: https://cards-dev.twitter.com/validator
- Testez votre URL: `https://brandonkamga.dev`

### **3. LinkedIn Post Inspector**
URL: https://www.linkedin.com/post-inspector/
- Testez votre URL: `https://brandonkamga.dev`

### **4. WhatsApp Link Preview**
- Envoyez-vous le lien dans WhatsApp
- L'aperçu devrait apparaître automatiquement

## 📋 Checklist de Vérification

### **Métadonnées Open Graph**
- [x] `og:title` - Titre du portfolio
- [x] `og:description` - Description du développeur
- [x] `og:image` - Image de prévisualisation (moi.png)
- [x] `og:image:width` - 1200px
- [x] `og:image:height` - 630px
- [x] `og:image:type` - image/png
- [x] `og:url` - URL canonique
- [x] `og:type` - website

### **Twitter Cards**
- [x] `twitter:card` - summary_large_image
- [x] `twitter:title` - Titre
- [x] `twitter:description` - Description
- [x] `twitter:image` - Image de prévisualisation

## 🚨 Problèmes Courants

### **1. Image ne s'affiche pas**
- Vérifiez que l'image est accessible: `https://brandonkamga.dev/moi.png`
- Format recommandé: 1200x630px (ratio 1.91:1)
- Taille max: 8MB pour Facebook, 5MB pour Twitter

### **2. Cache des réseaux sociaux**
- Facebook: Utilisez le Debugger pour forcer le refresh
- LinkedIn: Attendez 24h ou utilisez l'inspecteur
- WhatsApp: Effacez le cache de l'app

### **3. URL HTTPS requise**
- Les réseaux sociaux exigent HTTPS en production
- En développement, certains ne fonctionneront pas

## 🔧 Commandes de Test

```bash
# Vérifier que l'image est accessible
curl -I https://brandonkamga.dev/moi.png

# Vérifier les métadonnées Open Graph
curl -s https://brandonkamga.dev | grep -i "og:"

# Vérifier les métadonnées Twitter
curl -s https://brandonkamga.dev | grep -i "twitter:"
```

## 📱 Test sur les Plateformes

### **WhatsApp**
1. Envoyez le lien: `https://brandonkamga.dev`
2. L'aperçu devrait montrer:
   - Titre: "Brandon Kamga - Développeur Full Stack & DevOps Engineer"
   - Description: Votre description de développeur
   - Image: Capture d'écran de votre portfolio

### **LinkedIn**
1. Créez un nouveau post
2. Collez le lien: `https://brandonkamga.dev`
3. LinkedIn devrait automatiquement charger l'aperçu

### **Twitter/X**
1. Créez un nouveau tweet
2. Collez le lien: `https://brandonkamga.dev`
3. L'aperçu devrait apparaître avec la grande image

## ⚡ Actions Immédiates

1. **Déployez** votre site en production avec HTTPS
2. **Testez** avec le Facebook Debugger
3. **Vérifiez** sur WhatsApp en envoyant le lien
4. **Partagez** sur LinkedIn pour voir l'aperçu

---

**Note**: En développement local (localhost), les réseaux sociaux ne peuvent pas accéder à votre image. Le test complet ne fonctionne qu'en production avec HTTPS.

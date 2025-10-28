# Pasta de Imagens

Esta pasta é para você adicionar suas imagens manualmente.

## Como usar:

1. Adicione suas imagens nesta pasta (PNG, JPG, SVG, etc.)
2. Importe no seu código usando o caminho relativo:

```tsx
import minhaLogo from "../img/nome-da-imagem.png"
```

## Exemplo:

Se você adicionar uma imagem chamada `logo-ohanas.png` aqui, pode importar assim:

```tsx
import logoOhanas from "../img/logo-ohanas.png"
```

E usar no JSX:

```tsx
<img src={logoOhanas} alt="Logo Ohanas" />
```

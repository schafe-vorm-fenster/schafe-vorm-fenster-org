## Development

`jekyll serve --livereload`

## Tailwind CSS

```
curl -sLO https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-macos-arm64
chmod +x tailwindcss-macos-arm64
mv tailwindcss-macos-arm64 tailwindcss
```


Linux

```
curl -sLO https://github.com/tailwindlabs/tailwindcss/releases/download/v3.3.2/tailwindcss-linux-x64
chmod +x tailwindcss-linux-x64
mv tailwindcss-linux-x64 tailwindcss
./tailwindcss -i _sass/tailwind.css -o assets/css/styles.css
```

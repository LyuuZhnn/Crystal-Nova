# CRYSTAL NOVA — TJKT Digital Toolkit
Explore. Learn. Build. Beyond.

Website statis (HTML + CSS + JavaScript murni) untuk pelajar TJKT. Tanpa backend, tanpa API key, siap GitHub Pages.
Dikembangkan oleh MUSYAFFA HANIF SUNNI · TJKT · SMK NEGERI 1 ADIWERNA.

## Isi folder
- `index.html` — halaman utama (buka file ini)
- `css/style.css` — design system dan tampilan
- `js/data.js` — data referensi dan soal latihan
- `js/app.js` — navigasi, kalkulator, terminal simulator, topologi, laporan, catatan

## Coba di lokal
Buka `index.html` di browser. Semua path relatif, jadi aman di GitHub Pages (`/nama-repo/`).

## Upload via Termux (Android)
```
termux-setup-storage
pkg update -y && pkg install git unzip -y
unzip -o ~/storage/downloads/Crystal-Nova-TJKT-Toolkit.zip -d ~/
cd ~/crystal-nova
git config --global user.name "NAMA_KAMU"
git config --global user.email "EMAIL_GITHUB_KAMU"
git init
git branch -M main
git add .
git commit -m "Initial upload Crystal Nova"
git remote add origin https://github.com/lyuuzhnn/Crystal-Nova.git
git push -u origin main
```
Saat diminta password, tempel **Personal Access Token** GitHub (GitHub → Settings → Developer settings → Tokens), bukan password akun.

## Aktifkan GitHub Pages
Repo → Settings → Pages → Source: Deploy from a branch → Branch `main`, folder `/ (root)` → Save.
Alamat situs muncul di halaman Pages itu (biasanya `https://lyuuzhnn.github.io/Crystal-Nova/`, pastikan dari halaman Pages).

## Memperbarui
```
cd ~/crystal-nova
git add .
git commit -m "Update"
git push
```

## Troubleshooting
- Halaman kosong: pastikan `index.html` ada di akar repo, bukan di dalam subfolder.
- CSS/JS tidak muncul: folder `css/` dan `js/` harus ikut ter-upload; tekan refresh keras.
- Push ditolak: gunakan token, bukan password. Jika remote sudah ada: `git remote set-url origin URL`.
- Data hilang: catatan/favorit tersimpan di LocalStorage browser, hilang jika data situs dihapus.

## Keterbatasan
Ping/traceroute nyata, DNS lookup, HTTP checker, akses router fisik, dan shell Linux asli tidak bisa dari browser. Terminal adalah SIMULATOR; topologi adalah editor gambar.

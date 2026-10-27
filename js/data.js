/* Data referensi Crystal Nova. Format: [kategori, judul, penjelasan, contoh kode] */
window.CN_DATA={ref:{
cisco:[
['Dasar','Mode CLI Cisco IOS','Urutan mode: User EXEC → Privileged EXEC → Global config. Tanda prompt (> # (config)#) menunjukkan mode aktif.','Router>enable\nRouter#configure terminal\nRouter(config)#hostname R1'],
['Interface','Alamat IP pada interface','Beri IP lalu aktifkan interface dengan no shutdown.','interface g0/0\n ip address 192.168.1.1 255.255.255.0\n no shutdown'],
['VLAN','VLAN, access port, dan trunk','Buat VLAN, tempatkan port akses, dan trunk antar-switch.','vlan 10\n name SISWA\ninterface f0/1\n switchport mode access\n switchport access vlan 10\ninterface g0/1\n switchport mode trunk'],
['Routing','Static route','Rute manual ke jaringan tujuan melalui next-hop.','ip route 192.168.20.0 255.255.255.0 10.0.0.2'],
['DHCP','DHCP server pada router','Kecualikan IP gateway lalu buat pool.','ip dhcp excluded-address 192.168.1.1 192.168.1.10\nip dhcp pool LAN\n network 192.168.1.0 255.255.255.0\n default-router 192.168.1.1\n dns-server 8.8.8.8'],
['Verifikasi','Perintah show','Memeriksa konfigurasi dan status. Output di perangkat nyata akan berbeda dari contoh ini.','show ip interface brief\nshow running-config\nshow vlan brief\nshow ip route']],
mikrotik:[
['IP','Alamat IP','Menambah IP ke interface RouterOS.','/ip address add address=192.168.88.1/24 interface=ether2'],
['DHCP','DHCP server','Pool, server, lalu network (gateway + DNS).','/ip pool add name=pool1 ranges=192.168.88.10-192.168.88.200\n/ip dhcp-server add name=dhcp1 interface=ether2 address-pool=pool1 disabled=no\n/ip dhcp-server network add address=192.168.88.0/24 gateway=192.168.88.1 dns-server=8.8.8.8'],
['NAT','Masquerade','Berbagi internet dari interface WAN (ether1).','/ip firewall nat add chain=srcnat out-interface=ether1 action=masquerade'],
['Routing','Default route','Arahkan semua trafik keluar ke gateway ISP.','/ip route add dst-address=0.0.0.0/0 gateway=192.168.1.1'],
['DNS','DNS server','Atur DNS dan izinkan klien memakai router sebagai DNS.','/ip dns set servers=8.8.8.8,1.1.1.1 allow-remote-requests=yes'],
['Monitoring','Ping & traceroute','Uji konektivitas dari router.','/ping 8.8.8.8 count=4\n/tool traceroute 8.8.8.8\n/interface print']],
linux:[
['Berkas','Navigasi berkas','Lihat isi dan pindah direktori.','pwd\nls -la\ncd /etc'],
['Permission','chmod dan chown','755 = rwx untuk pemilik, r-x untuk grup dan lainnya.','chmod 755 skrip.sh\nsudo chown user:grup berkas'],
['Paket','Manajemen paket APT','Debian/Ubuntu memakai apt.','sudo apt update\nsudo apt install nginx -y'],
['Service','systemctl','Mengelola service di Linux modern.','sudo systemctl status ssh\nsudo systemctl enable --now ssh'],
['Jaringan','ip dan ss','Cek IP, rute, dan port yang terbuka.','ip -br a\nip route\nss -tulpn']],
server:[
['DNS','DNS server (Bind9)','Pasang Bind9, atur zona di named.conf.local, lalu restart.','sudo apt install bind9 -y\nsudo systemctl restart bind9'],
['Web','Web server Nginx','Pasang dan uji dari server itu sendiri.','sudo apt install nginx -y\nsudo systemctl enable --now nginx\ncurl -I http://localhost'],
['SSH','SSH server','Akses jarak jauh terenkripsi.','sudo apt install openssh-server -y\nssh user@192.168.1.10'],
['Firewall','UFW','Izinkan hanya port yang dibutuhkan.','sudo ufw allow 22/tcp\nsudo ufw allow 80/tcp\nsudo ufw enable'],
['Virtualisasi','Adapter jaringan VirtualBox','NAT: VM hanya keluar ke internet. Bridged: VM satu LAN dengan host. Host-only: hanya host ↔ VM.',''],
['Cloud','IaaS, PaaS, SaaS','IaaS: infrastruktur (VM, jaringan), misal AWS EC2. PaaS: platform aplikasi. SaaS: aplikasi jadi, misal Google Workspace. Halaman statis ini tidak membuat resource cloud nyata.',''],
['Docker','Docker dasar','Jalankan container Nginx di port 8080.','docker run -d -p 8080:80 nginx\ndocker ps']],
materi:[
['Dasar jaringan','Model OSI dan TCP/IP','OSI 7 lapis: Fisik, Data Link, Network, Transport, Session, Presentation, Application. TCP/IP meringkasnya menjadi 4 lapis.',''],
['Subnetting','Subnetting cepat','Blok = 256 − oktet mask. Contoh /26 → mask .192, blok 64. Host usable = 2^(32−prefix) − 2.','/24=254  /25=126  /26=62  /27=30\n/28=14  /29=6  /30=2'],
['Switching','VLAN','VLAN memisahkan broadcast domain pada switch. Komunikasi antar-VLAN butuh router atau switch layer 3.',''],
['Routing','Static dan dynamic routing','Static: manual, cocok jaringan kecil. Dynamic (RIP, OSPF) bertukar rute otomatis.',''],
['Keamanan','Keamanan jaringan dasar','Gunakan password kuat, matikan layanan tak terpakai, batasi akses dengan ACL/firewall, dan perbarui firmware.',''],
['Fiber optik','Single-mode vs multi-mode','Single-mode: jarak jauh, inti sekitar 9 µm. Multi-mode: jarak pendek, inti 50 atau 62,5 µm.','']]},
quiz:[
['Berapa host usable pada subnet /26?',['30','62','64','126'],1,'Host = 2^6 − 2 = 62.'],
['Network address dari 192.168.1.130/25?',['192.168.1.0','192.168.1.128','192.168.1.64','192.168.1.129'],1,'Blok /25 berukuran 128; 130 berada di blok 128–255.'],
['Host satu subnet dengan gateway, tetapi ping ke gateway gagal. Dugaan awal?',['DNS salah','Gateway mati atau salah alamat','Kabel T568A','Subnet terlalu besar'],1,'Gateway yang salah/mati membuat host tidak bisa keluar subnet.'],
['Perintah Cisco untuk ringkasan status interface?',['show vlan','show ip interface brief','show version','ip route'],1,'show ip interface brief menampilkan IP dan status tiap interface.'],
['Ping 8.8.8.8 berhasil, tetapi membuka google.com gagal. Dugaan?',['Gateway salah','DNS bermasalah','Kabel putus','VLAN salah'],1,'IP bisa dijangkau tetapi nama tidak diterjemahkan → DNS.'],
['Komputer mendapat IP 169.254.x.x. Artinya?',['DHCP server tidak terjangkau','DNS salah','IP statis','NAT aktif'],0,'APIPA muncul ketika DHCP gagal memberi alamat.'],
['0 dBm sama dengan berapa mW?',['0','1','10','100'],1,'mW = 10^(dBm/10) = 10^0 = 1.']]};

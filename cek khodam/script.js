function cekKhodam() {
    const nameInput = document.getElementById('nameInput').value;
    const result = document.getElementById('result');

    if (nameInput === '') {
        result.textContent = 'Silakan masukkan nama Anda';
        return;
    }

    const animals = [
        'macan putih', 'elang biru', 'ular hijau', 'harimau emas', 'kuda ungu',
        'kucing merah', 'anjing pink', 'singa biru', 'serigala hitam', 'buaya kuning',
        'masako ayam', 'sapi terbang', 'kambing laut', 'bebek ajaib', 'kucing galaksi',
        'kuda pelangi', 'anjing berkepala dua', 'ular berkaki', 'ikan berkaki', 'burung neon',
        'gajah mini', 'rusa emas', 'jerapah ungu', 'buaya terbang', 'kucing berkepala tiga',
        'burung fosfor', 'kambing berkepala dua', 'sapi ungu', 'domba listrik', 'ikan api',
        'kucing transparan', 'kuda kayu', 'anjing api', 'gajah biru', 'serigala merah muda',
        'harimau bersayap', 'monyet berkepala singa', 'bebek emas', 'ikan mas robot', 'burung lava'
    ];
    const randomAnimal = animals[Math.floor(Math.random() * animals.length)];

    result.textContent = `Khodam Anda adalah: ${randomAnimal}`;
}

function resetForm() {
    document.getElementById('nameInput').value = '';
    document.getElementById('result').textContent = '';
}

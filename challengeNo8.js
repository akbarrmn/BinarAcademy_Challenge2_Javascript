// No 8
const dataPenjualanNovel = [{
        idProduct: 'BOOK002421',
        namaProduk: 'Pulang - Pergi',
        penulis: 'Tere Liye',
        hargaBeli: 60000,
        hargaJual: 86000,
        totalTerjual: 150,
        sisaStok: 17,
    },
    {
        idProduct: 'BOOK002351',
        namaProduk: 'Selamat Tinggal',
        penulis: 'Tere Liye',
        hargaBeli: 75000,
        hargaJual: 103000,
        totalTerjual: 171,
        sisaStok: 20,
    },
    {
        idProduct: 'BOOK002941',
        namaProduk: 'Garis Waktu',
        penulis: 'Fiersa Besari',
        hargaBeli: 67000,
        hargaJual: 99000,
        totalTerjual: 213,
        sisaStok: 5,
    },
    {
        idProduct: 'BOOK002941',
        namaProduk: 'Laskar Pelangi',
        penulis: 'Andrea Hirata',
        hargaBeli: 55000,
        hargaJual: 68000,
        totalTerjual: 20,
        sisaStok: 56,
    },
];

function getInfoPenjualan(dataPenjualan) {
    if (typeof dataPenjualan == 'object') {
        obj = {}
        let bukuTerjual = dataPenjualan.map(x => x.totalTerjual)
        let hargaBeli = dataPenjualan.map(x => x.hargaBeli)
        let hargaJual = dataPenjualan.map(x => x.hargaJual)
        let totalBuku = dataPenjualan.map(x => x.sisaStok + x.totalTerjual)

        //Mencari Modal dan Keuntungan bersih
        let keuntungan = []
        let modal = []
        for (let i = 0; i < dataPenjualan.length; i++) {
            modal.push(totalBuku[i] * hargaBeli[i])
            keuntungan.push(bukuTerjual[i] * hargaJual[i])
        }

        //Menjumlahkan keseluruhan modal dan keuntungan
        const modalAwal = modal.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
        const keuntunganKotor = keuntungan.reduce((previousValue, currentValue) => previousValue + currentValue, 0);

        //Mencari Keuntungan bersin
        let keuntunganBersih = keuntunganKotor - modalAwal;

        //Mencari presentasi keuntungan
        let presentaseKeuntungan = ((keuntunganBersih / modalAwal) * 100);

        //Mencari produk buku terlaris
        let penjualanTerbanyak = Math.max(...bukuTerjual)
        let produkTerlaris
        for (let i = 0; i < dataPenjualan.length; i++) {
            if (dataPenjualan[i].totalTerjual == penjualanTerbanyak) {
                produkTerlaris = dataPenjualan[i].namaProduk
            }
        }

        //Mencari penulis terlaris
        let dataPenulis = []
        dataPenjualanNovel.forEach((product) => {
            let tidakAda = true
            dataPenulis.forEach((penulis) => {
                if (product.penulis === penulis.nama) {
                    tidakAda = false
                    penulis.terjual += product.totalTerjual
                }
            })
            if (tidakAda) {
                dataPenulis.push({
                    nama: product.penulis,
                    terjual: product.totalTerjual,
                })
            }
        })

        const penulisTerlaris = dataPenulis.reduce((terlaris, currentPenulis) => {
            return currentPenulis.terjual > terlaris.terjual ? currentPenulis : terlaris
        })

        // Format IDR
        const formatter = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" })

        //Menambahkan parameter object 
        obj.totalKeuntungan = formatter.format(keuntunganBersih)
        obj.totalModal = formatter.format(modalAwal)
        obj.presentaseKeuntungan = `${Math.ceil(presentaseKeuntungan)}%`
        obj.produkBukuTerlaris = produkTerlaris
        obj.penulisTerlaris = `${penulisTerlaris.nama}`

        return obj

    } else if (dataPenjualan === undefined) {
        return 'ERROR : No input detected'
    } else {
        return 'ERROR : Invalid data type '
    }
}

// console.log(getInfoPenjualan(dataPenjualanNovel));
// console.log(getInfoPenjualan());
// console.log(getInfoPenjualan(12));
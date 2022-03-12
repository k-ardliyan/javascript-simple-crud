// Variabel
var id_pasien = document.getElementById("id_pasien");
var nama = document.getElementById("nama");
var alamat = document.getElementById("alamat");
var penyakit = document.getElementById("penyakit");
var ruang = document.getElementById("ruang");
var bpjs = document.getElementById("bpjs");
var tgl_masuk = document.getElementById("tgl_masuk");
var tgl_keluar = document.getElementById("tgl_keluar");
var show = document.getElementById("show");

// Array Kosong
var dataPasien = [];

// Bentuk Data JSON
var pasien = {
    id_pasien: id_pasien.value,
    nama: nama,
    alamat: alamat,
    penyakit: penyakit,
    ruang: ruang,
    bpjs: bpjs,
    tgl_masuk: tgl_masuk,
    tgl_keluar: tgl_keluar,
};

// Reset Form Data
function resetForm() {
    document.getElementById('myForm').reset();
}

// Menampilkan Data Pasien
function display() {
    document.getElementById("show").innerHTML = "";
    dataPasien.forEach(function (data) {
        document.getElementById('show').innerHTML += (`
            <th class="align-middle">${data.id_pasien}</th>
            <td class="align-middle">${data.nama}</td>
            <td class="align-middle">${data.alamat}</td>
            <td class="align-middle">${data.penyakit}</td>
            <td class="align-middle">${data.ruang}</td>
            <td class="align-middle">${data.bpjs}</td>
            <td class="align-middle">${data.tgl_masuk}</td>
            <td class="align-middle">${data.tgl_keluar}</td>
        `);
    });
    if (document.getElementById("show").innerHTML == "") {
        document.getElementById("show").innerHTML =
            `<tr>
        <td colspan="8">
            <center>
                <i>Data Masih Terlihat Kosong</i>
            </center>
        </td>
        </tr>`;
    }
};

// Menambahkan Data Pasien
function insert() {
    dataPasien.push({
        id_pasien: id_pasien.value,
        nama: nama.value,
        alamat: alamat.value,
        penyakit: penyakit.value,
        ruang: ruang.value,
        bpjs: bpjs.value,
        tgl_masuk: tgl_masuk.value,
        tgl_keluar: tgl_keluar.value,
    });
}

function save() {
    var checkPasien = dataPasien.find((data) => data.id_pasien == id_pasien.value);
    if (id_pasien.value == "" || nama.value == "" || alamat.value == "" || penyakit.value == "" || ruang.value == "" || bpjs.value == "" || tgl_masuk.value == "") {
        alert("Masukkan Data Lengkap Pasien");
    } else if (checkPasien) {
        alert("ID Pasien sudah ada");
    } else {
        insert();
        display();
        resetForm()
        alert("Data Pasien Berhasil Disimpan");
    }
}

// Mencari Data Pasien Berdasarkan ID Pasien untuk Form Edit/Delete
function search() {
    var checkPasien = dataPasien.find((data) => data.id_pasien == id_pasien.value);
    if (id_pasien.value == "") {
        alert("Masukkan ID Pasien");
    } else if (checkPasien) {
        dataPasien.find(function (data) {
            if (data.id_pasien == id_pasien.value) {
                nama.value = data.nama;
                alamat.value = data.alamat;
                penyakit.value = data.penyakit;
                ruang.value = data.ruang;
                bpjs.value = data.bpjs;
                tgl_masuk.value = data.tgl_masuk;
                tgl_keluar.value = data.tgl_keluar;
            }
        });
        alert("Data Pasien Ditemukan");
    } else {
        alert("ID Pasien tidak ada");
    }
}

// Mengupdate Data Pasien
function update() {
    var checkPasien = dataPasien.find((data) => data.id_pasien == id_pasien.value);
    if (id_pasien.value == "") {
        alert("Masukkan ID Pasien Untuk Update Data");
    } else if (checkPasien) {
        if (nama.value == "" || alamat.value == "" || penyakit.value == "" || ruang.value == "" || bpjs.value == "" || tgl_masuk.value == "") {
            alert("Silahkan gunakan tombol cari terlebih dahulu");
        } else {
            dataPasien.forEach(function (data) {
                if (data.id_pasien == id_pasien.value) {
                    data.nama = nama.value;
                    data.alamat = alamat.value;
                    data.penyakit = penyakit.value;
                    data.ruang = ruang.value;
                    data.bpjs = bpjs.value;
                    data.tgl_masuk = tgl_masuk.value;
                    data.tgl_keluar = tgl_keluar.value;
                }
            });
            display();
            resetForm();
            alert("Data Berhasil Di Update");
        }
    } else {
        alert("ID Pasien tidak ada");
    }
}

// Menghapus Data Pasien
function remove() {
    var checkPasien = dataPasien.find((data) => data.id_pasien == id_pasien.value);
    if (id_pasien.value == "") {
        alert("Masukkan ID Pasien Untuk Delete Data");
    } else if (checkPasien) {
        var index = dataPasien.findIndex((data) => data.id_pasien == id_pasien.value);
        if (checkPasien) {
            dataPasien.splice(index, 1);
            display();
            resetForm()
            alert("Data Pasien Berhasil Dihapus");
        }
    } else {
        alert("ID Pasien tidak ada");
    }
}

// Generate Data Dummy Pasien
function dataDummy() {
    dataPasien.push({
        id_pasien: "101",
        nama: "Rizki",
        alamat: "Jl. Salatiga",
        penyakit: "Cacar",
        ruang: "R01",
        bpjs: "Kelas III",
        tgl_masuk: "2022-02-28",
        tgl_keluar: "2022-03-02"
    }, {
        id_pasien: "102",
        nama: "Putra",
        alamat: "Jl. Pattimura",
        penyakit: "Flu",
        ruang: "R02",
        bpjs: "Kelas I",
        tgl_masuk: "2022-03-02",
        tgl_keluar: "2022-03-05"
    }, {
        id_pasien: "103",
        nama: "Kurniawan",
        alamat: "Jl. Sudirman",
        penyakit: "Pusing",
        ruang: "R03",
        bpjs: "Tidak Menggunakan",
        tgl_masuk: "2022-03-04",
        tgl_keluar: "2022-03-05"
    }, {
        id_pasien: "104",
        nama: "Nana",
        alamat: "Jl. Mawar",
        penyakit: "Demam",
        ruang: "R03",
        bpjs: "Tidak Menggunakan",
        tgl_masuk: "2022-03-11",
        tgl_keluar: ""
    }, {
        id_pasien: "105",
        nama: "Miara",
        alamat: "Jl. Ciputat",
        penyakit: "Alergi",
        ruang: "R03",
        bpjs: "Tidak Menggunakan",
        tgl_masuk: "2022-03-11",
        tgl_keluar: "2022-03-12"
    });
    display();
    document.getElementById("generate").setAttribute("style", "display: none");
    resetForm()
}
const dashboardKaryawanTableBody = document.getElementById("dashboardKaryawanTableBody");

// Fungsi untuk menampilkan data karyawan di tabel dashboard
function tampilkanDataKaryawanDiDashboard() {
    const karyawanList = JSON.parse(localStorage.getItem("karyawanList")) || [];
    dashboardKaryawanTableBody.innerHTML = "";

    karyawanList.forEach((karyawan, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${karyawan.nama}</td>
            <td>${karyawan.email}</td>
            <td>${karyawan.alamat}</td>
            <td>${karyawan.jabatan}</td>
            <td>
                <button onclick="editKaryawan(${karyawan.id})" class="btn btn-warning btn-sm">Sunting</button>
                <button onclick="hapusKaryawan(${karyawan.id})" class="btn btn-danger btn-sm">Hapus</button>
            </td>
        `;
        dashboardKaryawanTableBody.appendChild(row);
    });
}

// Fungsi untuk menghapus karyawan
function hapusKaryawan(id) {
    let karyawanList = JSON.parse(localStorage.getItem("karyawanList")) || [];
    karyawanList = karyawanList.filter(karyawan => karyawan.id !== id);
    localStorage.setItem("karyawanList", JSON.stringify(karyawanList));
    tampilkanDataKaryawanDiDashboard();
}

// Fungsi untuk mengedit karyawan
function editKaryawan(id) {
    let karyawanList = JSON.parse(localStorage.getItem("karyawanList")) || [];
    const karyawan = karyawanList.find(karyawan => karyawan.id === id);

    if (karyawan) {
        // Munculkan prompt untuk mengedit data karyawan
        const namaBaru = prompt("Edit Nama", karyawan.nama);
        const emailBaru = prompt("Edit Email", karyawan.email);
        const alamatBaru = prompt("Edit Alamat", karyawan.alamat);
        const jabatanBaru = prompt("Edit Jabatan", karyawan.jabatan);

        if (namaBaru && emailBaru && alamatBaru && jabatanBaru) {
            // Perbarui data karyawan
            karyawan.nama = namaBaru;
            karyawan.email = emailBaru;
            karyawan.alamat = alamatBaru;
            karyawan.jabatan = jabatanBaru;

            // Simpan perubahan ke localStorage
            localStorage.setItem("karyawanList", JSON.stringify(karyawanList));

            // Perbarui tampilan tabel
            tampilkanDataKaryawanDiDashboard();
        }
    }
}

// Panggil fungsi untuk menampilkan data karyawan saat halaman dimuat
window.onload = tampilkanDataKaryawanDiDashboard;
document.getElementById("karyawanForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah halaman refresh

    // Ambil data dari form
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const alamat = document.getElementById("alamat").value;
    const jabatan = document.getElementById("jabatan").value;

    // Buat objek karyawan
    const karyawan = {
        nama: nama,
        email: email,
        alamat: alamat,
        jabatan: jabatan
    };

    // Ambil data karyawan yang ada di localStorage (jika ada)
    let karyawanList = JSON.parse(localStorage.getItem("karyawanList")) || [];

    // Tambahkan data karyawan baru ke list
    karyawanList.push(karyawan);

    // Simpan kembali list ke localStorage
    localStorage.setItem("karyawanList", JSON.stringify(karyawanList));

    // Reset form
    document.getElementById("karyawanForm").reset();

    // Redirect ke halaman index.html
    window.location.href = "index.html";
});
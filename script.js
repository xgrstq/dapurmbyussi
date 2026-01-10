document.addEventListener("DOMContentLoaded", function () {
    console.log("JS KELOAD.");

    const form = document.getElementById("formkomentar");
    const daftarKomentar = document.getElementById("daftarkomentar");

    console.log("Form:", form);
    console.log("Daftar Komentar:", daftarKomentar);

    let Komentar= JSON.parse(localStorage.getItem("Komentar")) || [];

    function renderKomentar() {
        daftarKomentar.innerHTML = '';
        Komentar.forEach(item => {
            const div = document.createElement('div');
            div.classList.add('komentar-card');
            div.innerHTML = `
                <strong>${item.nama}:</strong> ${item.pesan} </p>`;
            daftarKomentar.appendChild(div);
        });
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nama = document.getElementById("nama").value;
        const pesan = document.getElementById("pesan").value;

        Komentar.push({ nama, pesan });
        localStorage.setItem("Komentar", JSON.stringify(Komentar));

        form.reset();
        renderKomentar();
    });

    renderKomentar();
});

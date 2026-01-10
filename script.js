console.log("JS KELOAD");

const form = document.getElementById('formkomentar');
const daftarKomentar = document.getElementById('daftarkomentar');

let komentar = JSON.parse(localStorage.getItem('komentar')) || [];

function renderKomentar() {
    daftarKomentar.innerHTML = '';
    komentar.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('komentar-card');
        div.innerHTML = `
            <strong>${item.nama}:</strong> ${item.pesan} </p>`;
        daftarKomentar.appendChild(div);
    });
}
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const nama = document.getElementById('nama').value;
    const pesan = document.getElementById('pesan').value;

    komentar.push({ nama, pesan });
    localStorage.setItem('komentar', JSON.stringify(komentar));
    form.reset();
    renderKomentar();
} );
renderKomentar();

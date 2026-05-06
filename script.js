const destinations = [
    { id: 2, name: "Raja Ampat", img: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf", desc: "Surga bawah laut di Papua dengan keanekaragaman hayati tertinggi.", history: "Nama Raja Ampat berasal dari mitos empat raja yang menguasai gugusan pulau.", price: "Rp 2.500.000", priceNum: 2500000, included: "✈️ TRANSPORTASI:\n• Pesawat + charter boat\n\n🏨 PENGINAPAN:\n• 5 malam di resort luxury\n\n🍽️ MAKANAN:\n• Makan 3x sehari gourmet\n\n🎫 FASILITAS:\n• Diving unlimited 5 hari\n• Instruktur expert\n• Asuransi premium\n• Sertifikat diving" },
    { id: 7, name: "Wakatobi", img: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf", desc: "Taman nasional dengan keindahan terumbu karang luar biasa.", history: "Nama gabungan dari empat pulau besar: Wangi-wangi, Kaledupa, Tomia, Binongko.", price: "Rp 2.000.000", priceNum: 2000000, included: "✈️ TRANSPORTASI:\n• Pesawat + boat transfer\n\n🏨 PENGINAPAN:\n• 5 malam di resort premium\n\n🍽️ MAKANAN:\n• Makan 3x sehari premium\n\n🎫 FASILITAS:\n• Diving unlimited 5 hari\n• Sertifikat diving advanced\n• Instruktur internasional" },
    { id: 5, name: "Labuan Bajo", img: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf", desc: "Gerbang menuju Pulau Komodo yang eksotis.", history: "Awalnya desa nelayan kecil yang kini mendunia.", price: "Rp 1.750.000", priceNum: 1750000, included: "✈️ TRANSPORTASI:\n• Pesawat pulang-pergi\n\n🏨 PENGINAPAN:\n• 4 malam di resort bintang 4\n\n🍽️ MAKANAN:\n• Makan 3x sehari premium\n\n🎫 FASILITAS:\n• Komodo tour + diving\n• Sunset cruise\n• Pemandu bersertifikat" },
    { id: 20, name: "Pulau Komodo", img: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272", desc: "Melihat kadal purba terbesar di habitat aslinya.", history: "Situs Warisan Dunia UNESCO sejak 1991.", price: "Rp 1.600.000", priceNum: 1600000, included: "✈️ TRANSPORTASI:\n• Pesawat + boat safari\n\n🏨 PENGINAPAN:\n• 4 malam di resort premium\n\n🍽️ MAKANAN:\n• Makan 3x sehari gourmet\n\n🎫 FASILITAS:\n• Trekking Komodo 2x\n• Diving 2x\n• Pemandu UNESCO" },
    { id: 11, name: "Derawan", img: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf", desc: "Berenang bersama ubur-ubur tanpa sengat di Kalimantan.", history: "Wilayah konservasi penyu hijau terbesar di Indonesia.", price: "Rp 1.500.000", priceNum: 1500000, included: "✈️ TRANSPORTASI:\n• Pesawat + private boat\n\n🏨 PENGINAPAN:\n• 4 malam di resort\n\n🍽️ MAKANAN:\n• Makan 3x sehari gourmet\n\n🎫 FASILITAS:\n• Snorkeling unlimited\n• Konservasi penyu\n• Pemandu naturalis" },
    { id: 17, name: "Bunaken", img: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf", desc: "Diving di dinding karang vertikal Sulawesi Utara.", history: "Taman nasional laut pertama di Indonesia.", price: "Rp 1.400.000", priceNum: 1400000, included: "✈️ TRANSPORTASI:\n• Pesawat + boat transfer\n\n🏨 PENGINAPAN:\n• 4 malam di resort\n\n🍽️ MAKANAN:\n• Makan 3x sehari premium\n\n🎫 FASILITAS:\n• Diving 4 kali\n• Sertifikat diving\n• Instruktur profesional" },
    { id: 9, name: "Pulau Weh", img: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf", desc: "Titik nol kilometer Indonesia di ujung barat.", history: "Dikenal sejak zaman kuno sebagai tempat persinggahan pelaut.", price: "Rp 1.250.000", priceNum: 1250000, included: "✈️ TRANSPORTASI:\n• Pesawat + speedboat\n\n🏨 PENGINAPAN:\n• 3 malam di resort\n\n🍽️ MAKANAN:\n• Makan 3x sehari\n\n🎫 FASILITAS:\n• Diving premium 3x\n• Sertifikat diving\n• Instruktur internasional" },
    { id: 6, name: "Danau Toba", img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4", desc: "Danau vulkanik terbesar di dunia dengan Pulau Samosir di tengahnya.", history: "Terbentuk dari letusan supervulkan dahsyat ribuan tahun lalu.", price: "Rp 1.000.000", priceNum: 1000000, included: "✈️ TRANSPORTASI:\n• Pesawat + kapal danau\n\n🏨 PENGINAPAN:\n• 3 malam di resort\n\n🍽️ MAKANAN:\n• Makan 3x sehari\n\n🎫 FASILITAS:\n• Pulau Samosir tour\n• Aktivitas water sports\n• Pemandu wisata" },
    { id: 10, name: "Toraja", img: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272", desc: "Budaya pemakaman yang unik dan rumah adat Tongkonan.", history: "Dikenal dengan tradisi penghormatan leluhur yang kental.", price: "Rp 900.000", priceNum: 900000, included: "✈️ TRANSPORTASI:\n• Pesawat pulang-pergi\n\n🏨 PENGINAPAN:\n• 3 malam di homestay\n\n🍽️ MAKANAN:\n• Makan 3x sehari\n• Kuliner lokal\n\n🎫 FASILITAS:\n• Tur rumah tradisional\n• Pemandu budaya\n• Foto dokumentasi" },
    { id: 13, name: "Gunung Rinjani", img: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272", desc: "Pendakian dengan pemandangan Danau Segara Anak.", history: "Gunung berapi tertinggi kedua di Indonesia.", price: "Rp 800.000", priceNum: 800000, included: "✈️ TRANSPORTASI:\n• Antar jemput\n\n🏨 PENGINAPAN:\n• 3 malam (tenda + base camp)\n\n🍽️ MAKANAN:\n• Makan 4x sehari\n• Hot drinks\n\n🎫 FASILITAS:\n• Pemandu + porter\n• Peralatan camping\n• Asuransi & first aid\n• Sertifikat pendakian" },
    { id: 1, name: "Bali - Pantai Kuta", img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4", desc: "Bali adalah pulau dewata. Di Kuta, Anda bisa berselancar dan menikmati sunset.", history: "Dahulu Kuta adalah pelabuhan dagang utama di Bali selatan.", price: "Rp 750.000", priceNum: 750000, included: "✈️ TRANSPORTASI:\n• Pesawat pulang-pergi\n\n🏨 PENGINAPAN:\n• 3 malam di resort bintang 3\n\n🍽️ MAKANAN:\n• Makan 3x sehari\n• Snack\n\n🎫 FASILITAS:\n• Beach access\n• Water sports\n• Spa 1x\n• Pemandu wisata" },
    { id: 15, name: "Belitung", img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4", desc: "Negeri Laskar Pelangi dengan batu granit raksasa.", history: "Dahulu pusat penambangan timah terbesar.", price: "Rp 700.000", priceNum: 700000, included: "✈️ TRANSPORTASI:\n• Pesawat pulang-pergi\n\n🏨 PENGINAPAN:\n• 3 malam di hotel\n\n🍽️ MAKANAN:\n• Makan 3x sehari\n\n🎫 FASILITAS:\n• Island hopping\n• Snorkeling 2x\n• Pemandu profesional" },
    { id: 19, name: "Lombok", img: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf", desc: "Pantai Mandalika dan sirkuit balap internasional.", history: "Dikenal dengan suku Sasak yang ramah.", price: "Rp 650.000", priceNum: 650000, included: "✈️ TRANSPORTASI:\n• Pesawat pulang-pergi\n• Jemput ke hotel\n\n🏨 PENGINAPAN:\n• 3 malam di resort\n\n🍽️ MAKANAN:\n• Makan 3x sehari\n• Snack\n\n🎫 FASILITAS:\n• Pantai Mandalika tour\n• Aktivitas air\n• Pemandu wisata" },
    { id: 4, name: "Gunung Bromo", img: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272", desc: "Menikmati sunrise yang magis di kawah aktif Jawa Timur.", history: "Dianggap suci oleh suku Tengger yang merayakan upacara Kasada.", price: "Rp 600.000", priceNum: 600000, included: "✈️ TRANSPORTASI:\n• Transportasi + Jeep sewa\n\n🏨 PENGINAPAN:\n• 2 malam di hotel\n\n🍽️ MAKANAN:\n• Makan 3x sehari\n• Snack pagi\n\n🎫 FASILITAS:\n• Pemandu lokal\n• Asuransi perjalanan\n• Equipment pendakian" },
    { id: 14, name: "Banyuwangi", img: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf", desc: "Blue Fire di Kawah Ijen yang mendunia.", history: "Dikenal sebagai 'The Sunrise of Java'.", price: "Rp 550.000", priceNum: 550000, included: "✈️ TRANSPORTASI:\n• Transportasi + pemandu gunung\n\n🏨 PENGINAPAN:\n• 2 malam di penginapan\n\n🍽️ MAKANAN:\n• Makan 3x sehari\n• Snack\n\n🎫 FASILITAS:\n• Trekking Kawah Ijen\n• Asuransi\n• Peralatan lengkap" },
    { id: 12, name: "Nusa Penida", img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4", desc: "Tebing Kelingking yang ikonik dan air biru kristal.", history: "Dahulu dikenal sebagai pulau pengasingan tahanan.", price: "Rp 450.000", priceNum: 450000, included: "✈️ TRANSPORTASI:\n• Kapal speedboat pulang-pergi\n\n🏨 PENGINAPAN:\n• 1 malam di resort pantai\n\n🍽️ MAKANAN:\n• Sarapan 1x\n• Makan siang 1x\n\n🎫 FASILITAS:\n• Snorkeling 1x\n• Tiket lokasi\n• Pemandu wisata profesional" },
    { id: 16, name: "Yogyakarta", img: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272", desc: "Kota budaya dengan Keraton dan kuliner Gudeg.", history: "Satu-satunya daerah istimewa yang dipimpin Sultan.", price: "Rp 400.000", priceNum: 400000, included: "✈️ TRANSPORTASI:\n• Transportasi pulang-pergi\n\n🏨 PENGINAPAN:\n• 1 malam di hotel bintang 3\n\n🍽️ MAKANAN:\n• Sarapan 1x\n• Makan siang 1x\n\n🎫 FASILITAS:\n• Tiket Keraton\n• Pemandu budaya lokal" },
    { id: 3, name: "Candi Borobudur", img: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272", desc: "Candi Budha terbesar di dunia yang terletak di Magelang.", history: "Dibangun pada abad ke-8 oleh Dinasti Syailendra.", price: "Rp 375.000", priceNum: 375000, included: "✈️ TRANSPORTASI:\n• Transportasi pulang-pergi\n\n🏨 PENGINAPAN:\n• 1 malam di hotel\n\n🍽️ MAKANAN:\n• Sarapan 1x\n• Makan siang 1x\n\n🎫 FASILITAS:\n• Tiket Borobudur\n• Pemandu wisata\n• Foto dokumentasi profesional" },
    { id: 18, name: "Bandung", img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4", desc: "Paris van Java dengan udara sejuk dan belanja fashion.", history: "Tempat Konferensi Asia Afrika pertama.", price: "Rp 350.000", priceNum: 350000, included: "✈️ TRANSPORTASI:\n• Transportasi pulang-pergi\n\n🏨 PENGINAPAN:\n• 1 malam di hotel bintang 3\n• Kamar standar\n\n🍽️ MAKANAN:\n• Sarapan 1x\n• Makan siang 1x\n\n🎫 FASILITAS:\n• Tiket lokasi wisata\n• Pemandu wisata\n• Free WiFi" },
    { id: 8, name: "Tanah Lot", img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4", desc: "Ikon Bali dengan pura di atas bongkahan batu besar.", history: "Didirikan oleh Dang Hyang Nirartha pada abad ke-16.", price: "Rp 250.000", priceNum: 250000, included: "✈️ TRANSPORTASI:\n• Transportasi pulang-pergi\n• Parkir\n\n🏨 PENGINAPAN:\n• Tidak ada (tour 1 hari)\n\n🍽️ MAKANAN:\n• Makan siang 1x\n• Snack & minuman\n\n🎫 FASILITAS:\n• Tiket masuk\n• Asuransi wisata\n• Pemandu wisata profesional" },
    { id: 21, name: "Jakarta - Monas", img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4", desc: "Ibukota dengan Monumen Nasional yang megah.", history: "Simbol perjuangan kemerdekaan rakyat Indonesia.", price: "Rp 200.000", priceNum: 200000, included: "✈️ TRANSPORTASI:\n• Transportasi ke lokasi wisata\n• Parkir kendaraan\n\n🏨 PENGINAPAN:\n• Tidak ada (tour 1 hari)\n\n🍽️ MAKANAN:\n• Makan siang 1x\n• Snack gratis\n\n🎫 FASILITAS:\n• Tiket masuk lokasi\n• Pemandu wisata lokal\n• Asuransi perjalanan" }
];

// Urutkan destinasi dari harga termurah ke termahal
destinations.sort((a, b) => a.priceNum - b.priceNum);

// Initialize visitor counts and ticket stock from localStorage
destinations.forEach(dest => {
    const visitorKey = `dest_${dest.id}_visitors`;
    if (!localStorage.getItem(visitorKey)) {
        localStorage.setItem(visitorKey, Math.floor(Math.random() * 5000) + 100);
    }
    dest.visitors = parseInt(localStorage.getItem(visitorKey), 10);

    const ticketKey = `dest_${dest.id}_tickets`;
    if (!localStorage.getItem(ticketKey)) {
        localStorage.setItem(ticketKey, '20');
    }
    dest.ticketsAvailable = parseInt(localStorage.getItem(ticketKey), 10);
});

// Render Destinations
const grid = document.getElementById('destinationGrid');
destinations.forEach(dest => {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.destId = dest.id;
    card.innerHTML = `
        <img src="${dest.img}?auto=format&fit=crop&w=500&q=60" alt="${dest.name}">
        <div class="card-info">
            <h3>${dest.name}</h3>
            <p>${dest.desc.substring(0, 50)}...</p>
            <p style="font-weight: bold; color: #27ae60;">${dest.price}</p>
            <p class="ticket-count" style="color: #2c3e50; font-weight: 600; font-size: 0.9rem;">🎟️ ${dest.ticketsAvailable.toLocaleString('id-ID')} tiket tersedia</p>
            <p class="visitor-count" style="color: #e74c3c; font-weight: 600; font-size: 0.9rem;">👥 ${dest.visitors.toLocaleString('id-ID')} pengunjung</p>
            <button class="btn-card-detail" onclick="event.stopPropagation(); showDetail(${dest.id})">Lihat Detail</button>
        </div>
    `;
    grid.appendChild(card);
});

function updateVisitorCounter() {
    const totalVisitors = destinations.reduce((sum, dest) => sum + dest.visitors, 0);
    document.getElementById('visitorCount').textContent = totalVisitors.toLocaleString('id-ID');
}

function updateDestinationCard(destId) {
    const dest = destinations.find(d => d.id === destId);
    const visitorCard = document.querySelector(`.card[data-dest-id="${destId}"] .visitor-count`);
    const ticketCard = document.querySelector(`.card[data-dest-id="${destId}"] .ticket-count`);
    if (dest) {
        if (visitorCard) {
            visitorCard.textContent = `👥 ${dest.visitors.toLocaleString('id-ID')} pengunjung`;
        }
        if (ticketCard) {
            ticketCard.textContent = `🎟️ ${dest.ticketsAvailable.toLocaleString('id-ID')} tiket tersedia`;
        }
    }
}

function updateTicketCountUI(destId) {
    const dest = destinations.find(d => d.id === destId);
    const ticketCard = document.querySelector(`.card[data-dest-id="${destId}"] .ticket-count`);
    if (dest && ticketCard) {
        ticketCard.textContent = `🎟️ ${dest.ticketsAvailable.toLocaleString('id-ID')} tiket tersedia`;
    }
}

updateVisitorCounter();

function showDetail(destId) {
    const dest = destinations.find(d => d.id === destId);
    if (!dest) return;
    
    // Increment visitor count
    const visitorKey = `dest_${dest.id}_visitors`;
    dest.visitors += 1;
    localStorage.setItem(visitorKey, dest.visitors.toString());
    updateVisitorCounter();
    updateDestinationCard(dest.id);
    
    const modalBody = document.getElementById('modalBody');
    const escapedName = dest.name.replace(/'/g, "\\'");
    const escapedPrice = dest.price.replace(/'/g, "\\'");
    const isSoldOut = dest.ticketsAvailable <= 0;
    
    modalBody.innerHTML = `
        <img src="${dest.img}" style="width:100%; border-radius:10px; margin-bottom:20px;">
        <h1>${dest.name}</h1>
        <p style="margin: 10px 0; color: #27ae60; font-size: 1.1rem; font-weight: 600;">🎟️ Tiket tersedia: ${dest.ticketsAvailable.toLocaleString('id-ID')} orang</p>
        <p style="margin: 10px 0; color: #3498db; font-size: 1.1rem; font-weight: 600;">👤 Jumlah orang: 1 orang</p>
        <p style="margin: 10px 0; color: #e74c3c; font-size: 1.1rem; font-weight: 600;">👥 Pengunjung: ${dest.visitors.toLocaleString('id-ID')} orang</p>
        <p style="margin: 15px 0;"><strong>Deskripsi:</strong> ${dest.desc}</p>
        <p style="margin: 15px 0;"><strong>Sejarah:</strong> ${dest.history}</p>
        <p style="font-size: 1.5rem; color: #27ae60; font-weight: bold;">Harga: ${dest.price}</p>
        <div style="background: #f0f0f0; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <h3 style="margin-bottom: 10px;">📦 Paket Termasuk:</h3>
            <p style="white-space: pre-line; line-height: 1.8;">${dest.included}</p>
        </div>
        <button class="btn-buy" ${isSoldOut ? 'disabled' : ''} onclick="openPayment(${dest.id}, '${escapedName}', '${escapedPrice}')">${isSoldOut ? 'Tiket Habis' : 'Hubungi via WhatsApp'}</button>
    `;
    openModal('detailModal');
}

function openModal(id) {
    document.getElementById(id).style.display = 'block';
}

function closeModal(id) {
    document.getElementById(id).style.display = 'none';
}

function openPayment(destId, destName = '', destPrice = '') {
    const dest = destinations.find(d => d.id === destId);
    if (!dest) return;
    if (dest.ticketsAvailable <= 0) {
        alert('Maaf, tiket untuk destinasi ini sudah habis.');
        return;
    }

    closeModal('detailModal');

    const ticketKey = `dest_${dest.id}_tickets`;
    dest.ticketsAvailable -= 1;
    localStorage.setItem(ticketKey, dest.ticketsAvailable.toString());
    updateTicketCountUI(dest.id);

    // Nomor WhatsApp yang dituju
    const whatsappNumber = '628133359792';
    
    // Buat pesan otomatis
    const message = `Halo! Saya ingin membeli tiket untuk destinasi *${destName}* dengan harga *${destPrice}*. Saya pesan untuk 1 orang. Bisa tolong jelaskan prosesnya? Terima kasih 🙏`;
    
    // Encode pesan untuk URL
    const encodedMessage = encodeURIComponent(message);
    
    // Buka WhatsApp dengan pesan otomatis
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
}

// Navigation Actions
document.getElementById('nav-home').addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({top: 0, behavior: 'smooth'});
});

document.getElementById('nav-dest').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('destinations').scrollIntoView({behavior: 'smooth'});
});

document.getElementById('nav-contact').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
});

document.getElementById('startAdventure').addEventListener('click', () => {
    document.getElementById('destinations').scrollIntoView({behavior: 'smooth'});
});

const startAdventure2 = document.getElementById('startAdventure2');
if (startAdventure2) {
    startAdventure2.addEventListener('click', () => {
        document.getElementById('destinations').scrollIntoView({behavior: 'smooth'});
    });
}

// Form Submissions
document.getElementById('paymentForm').onsubmit = (e) => {
    e.preventDefault();
    alert('Terima kasih ' + document.getElementById('payName').value + '! Pembayaran Anda sedang diproses. Silahkan transfer ke rekening yang dipilih.');
    closeModal('paymentModal');
};

document.getElementById('footerForm').onsubmit = (e) => {
    e.preventDefault();
    alert('Pesan Anda telah terkirim ke wisata indo!');
    e.target.reset();
};

// Close modals when clicking outside
window.onclick = function(event) {
    if (event.target.className === 'modal') {
        event.target.style.display = "none";
    }
};

// Carousel functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.indicator');
const carousel = document.querySelector('.carousel');
let autoSlideInterval;
let isAutoPlaying = true;

function changeSlide(direction) {
    slides[currentSlide].classList.remove('active');
    indicators[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
    restartAutoSlide();
}

function goToSlide(index) {
    slides[currentSlide].classList.remove('active');
    indicators[currentSlide].classList.remove('active');
    currentSlide = index;
    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
    restartAutoSlide();
}

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        slides[currentSlide].classList.remove('active');
        indicators[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
        indicators[currentSlide].classList.add('active');
    }, 5000);
}

function restartAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
    isAutoPlaying = false;
}

function resumeAutoSlide() {
    isAutoPlaying = true;
    startAutoSlide();
}

// Swipe functionality
let startX = 0;
let endX = 0;

carousel.addEventListener('touchstart', (e) => {
    startX = e.changedTouches[0].screenX;
});

carousel.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].screenX;
    handleSwipe();
});

// Mouse drag untuk desktop
carousel.addEventListener('mousedown', (e) => {
    startX = e.clientX;
});

carousel.addEventListener('mouseup', (e) => {
    endX = e.clientX;
    if (Math.abs(endX - startX) > 50) {
        handleSwipe();
    }
});

function handleSwipe() {
    if (startX > endX + 50) {
        // Geser ke kiri = slide kanan
        changeSlide(1);
    } else if (startX < endX - 50) {
        // Geser ke kanan = slide kiri
        changeSlide(-1);
    }
}

// Pause auto-play saat hover
carousel.addEventListener('mouseenter', stopAutoSlide);
carousel.addEventListener('mouseleave', resumeAutoSlide);

// Initialize
slides[0].classList.add('active');
indicators[0].classList.add('active');
startAutoSlide();

// Featured Carousel Functionality
let currentFeaturedSlide = 0;
const featuredSlides = document.querySelectorAll('.featured-slide');
const featuredIndicators = document.querySelectorAll('.featured-indicator');
const featuredCarousel = document.querySelector('.featured-carousel');
let autoFeaturedInterval;

function changeFeaturedSlide(direction) {
    featuredSlides[currentFeaturedSlide].classList.remove('active');
    featuredIndicators[currentFeaturedSlide].classList.remove('active');
    currentFeaturedSlide = (currentFeaturedSlide + direction + featuredSlides.length) % featuredSlides.length;
    featuredSlides[currentFeaturedSlide].classList.add('active');
    featuredIndicators[currentFeaturedSlide].classList.add('active');
    restartAutoFeaturedSlide();
}

function goToFeaturedSlide(index) {
    featuredSlides[currentFeaturedSlide].classList.remove('active');
    featuredIndicators[currentFeaturedSlide].classList.remove('active');
    currentFeaturedSlide = index;
    featuredSlides[currentFeaturedSlide].classList.add('active');
    featuredIndicators[currentFeaturedSlide].classList.add('active');
    restartAutoFeaturedSlide();
}

function startAutoFeaturedSlide() {
    autoFeaturedInterval = setInterval(() => {
        featuredSlides[currentFeaturedSlide].classList.remove('active');
        featuredIndicators[currentFeaturedSlide].classList.remove('active');
        currentFeaturedSlide = (currentFeaturedSlide + 1) % featuredSlides.length;
        featuredSlides[currentFeaturedSlide].classList.add('active');
        featuredIndicators[currentFeaturedSlide].classList.add('active');
    }, 6000);
}

function restartAutoFeaturedSlide() {
    clearInterval(autoFeaturedInterval);
    startAutoFeaturedSlide();
}

function stopAutoFeaturedSlide() {
    clearInterval(autoFeaturedInterval);
}

function resumeAutoFeaturedSlide() {
    startAutoFeaturedSlide();
}

// Featured Carousel Swipe
let startFeaturedX = 0;
let endFeaturedX = 0;

if (featuredCarousel) {
    featuredCarousel.addEventListener('touchstart', (e) => {
        startFeaturedX = e.changedTouches[0].screenX;
    });

    featuredCarousel.addEventListener('touchend', (e) => {
        endFeaturedX = e.changedTouches[0].screenX;
        handleFeaturedSwipe();
    });

    featuredCarousel.addEventListener('mousedown', (e) => {
        startFeaturedX = e.clientX;
    });

    featuredCarousel.addEventListener('mouseup', (e) => {
        endFeaturedX = e.clientX;
        if (Math.abs(endFeaturedX - startFeaturedX) > 50) {
            handleFeaturedSwipe();
        }
    });

    // Pause featured auto-play saat hover
    featuredCarousel.addEventListener('mouseenter', stopAutoFeaturedSlide);
    featuredCarousel.addEventListener('mouseleave', resumeAutoFeaturedSlide);

    // Initialize Featured Carousel
    if (featuredSlides.length > 0) {
        featuredSlides[0].classList.add('active');
        featuredIndicators[0].classList.add('active');
        startAutoFeaturedSlide();
    }
}

function handleFeaturedSwipe() {
    if (startFeaturedX > endFeaturedX + 50) {
        changeFeaturedSlide(1);
    } else if (startFeaturedX < endFeaturedX - 50) {
        changeFeaturedSlide(-1);
    }
}

function initVisitorCount() {
    const countKey = 'wisataVisitorCount';
    const lastVisitKey = 'wisataLastVisit';
    const currentTimestamp = Date.now();
    const oneDayMs = 24 * 60 * 60 * 1000;

    let visitorCount = parseInt(localStorage.getItem(countKey) || '0', 10);
    const lastVisit = parseInt(localStorage.getItem(lastVisitKey) || '0', 10);

    if (!lastVisit || currentTimestamp - lastVisit > oneDayMs) {
        visitorCount += 1;
        localStorage.setItem(countKey, visitorCount.toString());
        localStorage.setItem(lastVisitKey, currentTimestamp.toString());
    }

    const visitorCountElement = document.getElementById('visitorCount');
    if (visitorCountElement) {
        visitorCountElement.textContent = visitorCount.toLocaleString('id-ID');
    }
}

initVisitorCount();
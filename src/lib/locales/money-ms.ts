import type { MoneyPageContent } from "@/lib/locales/types";

export const msCommentModeration: MoneyPageContent = {
  lang: "ms",
  slug: "/ms/moderasi-komen-media-sosial",
  navCta: "Cuba percuma",
  meta: {
    title: "Moderasi Komen Media Sosial Automatik | Social Kirin",
    description:
      "Tapis komen spam, pautan penipuan dan komen lucah di Instagram, Facebook dan YouTube. Balas automatik dalam nada jenama anda. Percubaan percuma 3 hari, 50 interaksi, tanpa kad kredit.",
  },
  hero: {
    eyebrow: "Moderasi komen automatik",
    title: "Komen spam hilang dalam beberapa saat, bukan berjam-jam",
    subtitle:
      "Social Kirin menyemak setiap komen dan DM di Instagram, Facebook Pages dan YouTube — menyembunyikan spam dan membalas soalan pelanggan dalam nada jenama anda, 24 jam sehari.",
    bullets: [
      "Tapis spam, pautan pinjaman haram dan komen lucah sebelum pelanggan melihatnya",
      "Balas dalam Bahasa Melayu, Inggeris atau Manglish mengikut nada jenama anda",
      "Moderasi berjalan walaupun anda sedang tidur, live atau bercuti",
    ],
    primaryCta: "Cuba percuma 3 hari",
    secondaryCta: "Lihat harga",
  },
  intro: {
    heading: "Mengapa moderasi manual tidak lagi cukup",
    paragraphs: [
      "Satu hantaran yang viral boleh menarik ratusan komen dalam masa sejam. Dalam tempoh itu, pautan penipuan dan akaun jualan mula meninggalkan komen pada setiap hantaran anda — dan pelanggan sebenar nampak semuanya sebelum anda sempat membuka telefon.",
      "Social Kirin menyemak komen sebaik sahaja ia masuk. Komen spam disembunyikan, soalan pelanggan dibalas, dan setiap keputusan direkod supaya anda boleh semak semula bila-bila masa.",
    ],
  },
  capabilities: {
    heading: "Apa yang moderator automatik ini buat",
    intro:
      "Empat kerja yang biasanya mengambil masa dua hingga tiga jam sehari, kini berjalan secara automatik.",
    items: [
      {
        title: "Tapis komen spam",
        body: "Mengesan pautan berulang, akaun jualan, tawaran pinjaman haram dan corak spam yang biasa di Malaysia — lalu menyembunyikannya sebelum pelanggan lain membacanya.",
      },
      {
        title: "Balas dalam nada jenama",
        body: "Jawapan dijana mengikut nada yang anda tetapkan: formal untuk jenama korporat, mesra untuk e-dagang, atau santai Manglish untuk pencipta kandungan.",
      },
      {
        title: "Automasi DM dan komen",
        body: "Hantar pautan katalog, carta saiz atau maklumat penghantaran secara automatik apabila pelanggan menaip kata kunci tertentu di ruangan komen.",
      },
      {
        title: "Analisis sentimen",
        body: "Lihat nisbah komen positif, neutral dan negatif bagi setiap hantaran supaya anda tahu kandungan mana yang mencetuskan reaksi buruk.",
      },
    ],
  },
  examples: {
    heading: "Contoh komen sebenar yang diuruskan",
    intro:
      "Setiap komen dinilai berdasarkan teks, akaun penghantar dan pautan di dalamnya — bukan sekadar senarai perkataan terlarang.",
    legend: {
      kept: "Dibiarkan",
      hidden: "Disembunyikan",
    },
    items: [
      {
        comment: "“PM untuk stok ready, klik link di bio saya 😍”",
        verdict: "Spam jualan daripada akaun tanpa sejarah komen",
        action: "Disembunyikan serta-merta",
        hidden: true,
      },
      {
        comment: "“Perfume ni wangi sangat, tahan sampai petang.”",
        verdict: "Pujian sah daripada pelanggan sebenar",
        action: "Dibiarkan dan ditanda positif",
        hidden: false,
      },
      {
        comment: "“Nombor saya 012-345 6789, WhatsApp untuk pinjaman segera tanpa dokumen.”",
        verdict: "Tawaran pinjaman haram",
        action: "Disembunyikan dan dilaporkan",
        hidden: true,
      },
      {
        comment: "“Ada saiz M tak? Nak order untuk raya.”",
        verdict: "Soalan pelanggan sebenar",
        action: "Dibalas automatik dengan carta saiz",
        hidden: false,
      },
    ],
  },
  steps: {
    heading: "Mula dalam tiga langkah",
    items: [
      {
        title: "Sambung akaun anda",
        body: "Log masuk dengan akaun Facebook anda dan pilih Pages, akaun Instagram profesional atau saluran YouTube yang ingin diuruskan. Kebenaran diambil melalui API rasmi Meta dan Google.",
      },
      {
        title: "Tetapkan nada jenama",
        body: "Tulis tiga contoh balasan yang anda suka, atau pilih nada sedia ada. Contoh itu menjadi rujukan setiap kali jawapan baharu dijana.",
      },
      {
        title: "Semak dan laraskan",
        body: "Selepas 24 jam pertama, semak log moderasi. Anda boleh meluluskan, membatalkan atau menambah peraturan baharu pada bila-bila masa.",
      },
    ],
  },
  faq: {
    heading: "Soalan lazim",
    items: [
      {
        q: "Berapa harga Social Kirin?",
        a: "Pelan bermula pada $25 sebulan (USD) untuk satu akaun dengan 5,000 interaksi. Pelan tahunan memberi dua bulan percuma, dan 50 pengguna pertama mendapat diskaun 50% seumur hidup.",
      },
      {
        q: "Adakah percubaan percuma memerlukan kad kredit?",
        a: "Tidak. Percubaan berjalan selama tiga hari dan merangkumi 50 interaksi. Jika anda tidak menaik taraf, pemprosesan automatik berhenti sendiri.",
      },
      {
        q: "Adakah ia faham Bahasa Melayu dan Manglish?",
        a: "Ya. Komen dalam Bahasa Melayu, Inggeris dan campuran Manglish boleh dinilai. Namun model ini tidak dilatih khusus untuk corak spam Melayu, jadi kami menasihatkan semakan manual pada minggu pertama.",
      },
      {
        q: "Bagaimana dengan data pelanggan saya di bawah PDPA?",
        a: "Kami memproses data mengikut Akta Perlindungan Data Peribadi 2010. Anda boleh memadam semua data komen pada bila-bila masa melalui tetapan akaun.",
      },
      {
        q: "Platform mana yang disokong?",
        a: "Instagram profesional, Facebook Pages dan YouTube. Akaun Facebook peribadi tidak disokong kerana ia melanggar terma platform.",
      },
      {
        q: "Adakah ia menggantikan moderator manusia?",
        a: "Tidak sepenuhnya. Ia mengendalikan kira-kira 90% keputusan rutin dan meninggalkan kes sensitif untuk disemak oleh pasukan anda.",
      },
      {
        q: "Bolehkah saya gunakan untuk lebih daripada satu jenama?",
        a: "Boleh. Setiap akaun media sosial boleh mempunyai nada dan peraturan tersendiri di bawah satu langganan.",
      },
    ],
  },
  related: {
    heading: "Halaman berkaitan",
    links: [
      { label: "Balas automatik Instagram", href: "/ms/balas-automatik-instagram" },
      { label: "Moderasi komen Facebook", href: "/ms/moderasi-komen-facebook" },
      { label: "Moderasi komen iklan", href: "/ms/moderasi-komen-iklan" },
      { label: "Bandingkan dengan FeedGuardians", href: "/ms/bandingkan-feedguardians" },
      { label: "Harga dalam USD", href: "/ms#pricing" },
    ],
  },
  finalCta: {
    heading: "Biarkan moderator bekerja malam ini",
    body: "Sambung akaun Instagram atau Facebook Pages anda dan lihat komen pertama diuruskan dalam masa beberapa minit.",
    cta: "Mula percubaan 3 hari",
  },
};
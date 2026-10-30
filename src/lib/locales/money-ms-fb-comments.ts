import type { MoneyPageContent } from "@/lib/locales/types";

export const msFacebookComments: MoneyPageContent = {
  lang: "ms",
  slug: "/ms/moderasi-komen-facebook",
  navCta: "Cuba percuma",
  meta: {
    title: "Moderasi komen Facebook untuk peniaga Malaysia | Social Kirin",
    description:
      "Tapis komen spam, balas soalan pelanggan secara automatik dan urus komen di beberapa Halaman Facebook dari satu tempat. Percubaan 3 hari tanpa kad kredit.",
  },
  hero: {
    eyebrow: "Moderasi Facebook",
    title: "Moderasi komen Facebook tanpa menyemak satu per satu",
    subtitle:
      "Halaman Facebook yang aktif menerima ratusan komen sehari. Social Kirin menapis spam, membalas soalan lazim dan menandakan komen yang benar-benar perlu perhatian anda.",
    primaryCta: "Mula percubaan 3 hari",
    secondaryCta: "Lihat harga",
    bullets: [
      "Tapis komen spam, pautan luar dan akaun palsu secara automatik",
      "Balas soalan lazim dalam bahasa Melayu, Inggeris atau Cina",
      "Urus beberapa Halaman dari satu papan pemuka",
    ],
  },
  intro: {
    heading: "Masalah sebenar pengurus Halaman Facebook",
    paragraphs: [
      "Komen spam bukan sekadar mengganggu. Ia menenggelamkan soalan pelanggan yang sebenar, menurunkan kepercayaan pembeli baharu, dan membuatkan pasukan anda menghabiskan masa menekan butang sembunyi.",
      "Social Kirin mengasingkan tiga perkara: spam yang terus disembunyikan, soalan yang dijawab automatik, dan komen yang memerlukan keputusan manusia. Anda hanya melihat kategori terakhir.",
    ],
  },
  capabilities: {
    heading: "Apa yang Social Kirin lakukan pada Halaman anda",
    intro: "Semua ini berlaku pada komen dan mesej masuk, tanpa perlu menukar tetapan Halaman anda.",
    items: [
      {
        title: "Penapisan spam automatik",
        body: "Komen yang mengandungi pautan mencurigakan, promosi pesaing atau corak akaun palsu disembunyikan sebelum pelanggan lain melihatnya.",
      },
      {
        title: "Balasan mengikut soalan",
        body: "Soalan lazim seperti waktu operasi, penghantaran atau stok dijawab secara automatik dengan nada yang anda tetapkan.",
      },
      {
        title: "Satu papan pemuka untuk semua Halaman",
        body: "Jika anda menguruskan beberapa Halaman Facebook, semua komen masuk ke satu baris masa yang sama.",
      },
      {
        title: "Rekod tindakan",
        body: "Setiap komen yang disembunyikan atau dibalas direkodkan supaya anda boleh menyemak keputusan sistem pada bila-bila masa.",
      },
    ],
  },
  examples: {
    heading: "Contoh komen dan cara ia diuruskan",
    intro: "Corak di bawah adalah yang paling kerap dikesan pada Halaman perniagaan Malaysia.",
    legend: {
      kept: "Dibalas automatik",
      hidden: "Disembunyikan",
    },
    items: [
      {
        comment: "Buka hari Sabtu tak? Nak datang kedai.",
        verdict: "Soalan waktu operasi",
        action: "Dibalas dengan waktu operasi semasa",
        hidden: false,
      },
      {
        comment: "Ada saiz XL untuk baju ni?",
        verdict: "Soalan stok",
        action: "Dibalas dengan ketersediaan saiz",
        hidden: false,
      },
      {
        comment: "PROMO MURAH KLIK SINI >>> bit.ly/xxx",
        verdict: "Spam pautan luar",
        action: "Disembunyikan automatik",
        hidden: true,
      },
      {
        comment: "Penipu. Barang tak sampai 3 minggu.",
        verdict: "Aduan pelanggan",
        action: "Ditandakan untuk anda jawab sendiri",
        hidden: false,
      },
    ],
  },
  steps: {
    heading: "Cara mula",
    items: [
      {
        title: "Sambung Halaman Facebook",
        body: "Pilih Halaman yang anda uruskan dan berikan kebenaran yang diperlukan melalui Meta.",
      },
      {
        title: "Pilih tahap automasi",
        body: "Mulakan dengan penapisan spam sahaja, atau hidupkan balasan automatik untuk soalan lazim.",
      },
      {
        title: "Semak laporan setiap minggu",
        body: "Lihat berapa komen ditapis dan berapa soalan dijawab, kemudian laraskan kata kunci.",
      },
    ],
  },
  faq: {
    heading: "Soalan lazim",
    items: [
      {
        q: "Adakah komen yang disembunyikan hilang sepenuhnya?",
        a: "Tidak. Komen yang disembunyikan masih wujud pada pos tetapi tidak dipaparkan kepada orang lain. Anda boleh memaparkannya semula bila-bila masa.",
      },
      {
        q: "Boleh saya uruskan beberapa Halaman serentak?",
        a: "Boleh. Setiap pelan menyokong beberapa saluran, dan semua Halaman boleh diurus dari satu papan pemuka.",
      },
      {
        q: "Adakah data pelanggan saya selamat?",
        a: "Kami memproses data mengikut PDPA 2010 Malaysia dan terma platform Meta. Anda boleh meminta pemadaman data pada bila-bila masa melalui halaman Pemadaman Data kami.",
      },
      {
        q: "Berapa lama untuk mula?",
        a: "Kebanyakan akaun berfungsi dalam masa kurang 10 minit selepas menyambung Halaman. Tiada pemasangan perisian.",
      },
    ],
  },
  related: {
    heading: "Halaman berkaitan",
    links: [
      { label: "Moderasi komen media sosial", href: "/ms/moderasi-komen-media-sosial" },
      { label: "Balas automatik Instagram", href: "/ms/balas-automatik-instagram" },
      { label: "Moderasi komen iklan", href: "/ms/moderasi-komen-iklan" },
      { label: "Bandingkan dengan FeedGuardians", href: "/ms/bandingkan-feedguardians" },
    ],
  },
  finalCta: {
    heading: "Ambil alih semula Halaman anda",
    body: "Sambung Halaman Facebook dan biarkan komen spam ditapis secara automatik mulai hari ini.",
    cta: "Mula percubaan 3 hari",
  },
};
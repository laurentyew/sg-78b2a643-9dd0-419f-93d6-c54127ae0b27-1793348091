import type { MoneyPageContent } from "@/lib/locales/types";

export const msInstagramAutoReply: MoneyPageContent = {
  lang: "ms",
  slug: "/ms/balas-automatik-instagram",
  navCta: "Cuba percuma",
  meta: {
    title: "Balas automatik komen Instagram | DM automatik untuk penjual Malaysia",
    description:
      "Balas automatik komen Instagram dalam bahasa Melayu dan Inggeris, hantar DM automatik apabila ada kata kunci, dan tapis spam sebelum pelanggan nampak. Percubaan 3 hari, tiada kad kredit.",
  },
  hero: {
    eyebrow: "Automasi Instagram",
    title: "Balas automatik komen Instagram tanpa kehilangan pelanggan",
    subtitle:
      "Setiap komen yang bertanya \"berapa harga\" atau \"masih ada stok\" boleh dijawab dalam beberapa saat, siang atau malam, dalam bahasa yang pelanggan anda guna.",
    primaryCta: "Mula percubaan 3 hari",
    secondaryCta: "Lihat harga",
    bullets: [
      "Balasan automatik mengikut kata kunci seperti \"harga\", \"stok\" atau \"cod\"",
      "Hantar DM automatik dengan pautan produk selepas komen pertama",
      "Tapis komen spam dan akaun palsu sebelum ia merosakkan thread",
    ],
  },
  intro: {
    heading: "Kenapa balasan automatik penting untuk penjual Instagram",
    paragraphs: [
      "Di Instagram, komen yang tidak dijawab dalam masa sejam biasanya hilang minat. Masalahnya, kebanyakan penjual Malaysia menguruskan DM dan komen sendiri, jadi soalan yang sama berulang setiap hari.",
      "Social Kirin membaca setiap komen masuk, mengenal pasti soalan lazim, lalu membalas dengan nada yang anda tetapkan. Anda boleh semak dan ubah balasan pada bila-bila masa, jadi suara jenama kekal konsisten.",
    ],
  },
  capabilities: {
    heading: "Apa yang boleh diautomasikan",
    intro: "Semua ciri di bawah berfungsi pada akaun Instagram perniagaan tanpa perlu kod atau integrasi khas.",
    items: [
      {
        title: "Balasan mengikut kata kunci",
        body: "Tetapkan kata kunci dan balasan sedia ada. Apabila komen mengandungi kata kunci itu, Social Kirin menjawab secara automatik dengan nada yang anda pilih.",
      },
      {
        title: "DM automatik selepas komen",
        body: "Pelanggan yang bertanya dalam komen boleh menerima mesej peribadi yang mengandungi pautan produk, saiz atau cara pembayaran.",
      },
      {
        title: "Tapis spam dan akaun palsu",
        body: "Komen yang menjual barang tiruan, pautan luar atau akaun baharu tanpa sejarah boleh disembunyikan secara automatik.",
      },
      {
        title: "Sokongan bahasa campuran",
        body: "Komen dalam bahasa Melayu, Inggeris, atau campuran Manglish dikesan dan dibalas dalam bahasa yang sama digunakan pelanggan.",
      },
    ],
  },
  examples: {
    heading: "Contoh bagaimana komen diuruskan",
    intro: "Ini contoh sebenar corak komen yang biasa dilihat pada akaun jualan di Malaysia.",
    legend: {
      kept: "Dibalas automatik",
      hidden: "Disembunyikan",
    },
    items: [
      {
        comment: "berapa harga ni kak? boleh cod area JB?",
        verdict: "Soalan harga dan penghantaran",
        action: "Dibalas dengan harga dan pilihan COD",
        hidden: false,
      },
      {
        comment: "pm details please",
        verdict: "Permintaan maklumat",
        action: "DM automatik dihantar dengan pautan produk",
        hidden: false,
      },
      {
        comment: "KLIK LINK SAYA UNTUK DUIT MUDAH",
        verdict: "Spam pautan luar",
        action: "Disembunyikan dan dilaporkan",
        hidden: true,
      },
      {
        comment: "barang sampai cepat, packaging kemas. repeat order!",
        verdict: "Komen positif pelanggan",
        action: "Dibalas dengan ucapan terima kasih",
        hidden: false,
      },
    ],
  },
  steps: {
    heading: "Cara mula",
    items: [
      {
        title: "Sambung akaun Instagram perniagaan",
        body: "Log masuk dan pilih akaun yang ingin diuruskan. Tiada perubahan kod diperlukan.",
      },
      {
        title: "Tetapkan kata kunci dan nada balasan",
        body: "Tulis balasan asas untuk soalan lazim. Social Kirin akan mengubah suainya mengikut konteks komen.",
      },
      {
        title: "Semak dan laraskan",
        body: "Lihat senarai balasan yang dihantar, betulkan jika perlu, dan sistem akan ikut gaya baharu itu.",
      },
    ],
  },
  faq: {
    heading: "Soalan lazim",
    items: [
      {
        q: "Adakah ia berfungsi pada akaun Instagram peribadi?",
        a: "Tidak. Automasi memerlukan akaun Instagram perniagaan atau pencipta yang disambungkan melalui Meta. Akaun peribadi tidak menyokong akses API yang diperlukan.",
      },
      {
        q: "Bolehkah saya tetapkan balasan berbeza untuk setiap produk?",
        a: "Boleh. Anda boleh menetapkan kata kunci dan balasan berasingan untuk setiap produk, termasuk pautan dan harga yang berbeza.",
      },
      {
        q: "Bagaimana jika balasan automatik tersilap?",
        a: "Setiap balasan direkodkan dan boleh dipadam. Anda juga boleh menetapkan kata kunci tertentu untuk dihantar kepada anda untuk semakan manual dahulu.",
      },
      {
        q: "Berapa harga Social Kirin?",
        a: "Pelan bermula pada $25 sebulan (USD) untuk 5 saluran sosial dan 5,000 interaksi. Percubaan 3 hari dengan 50 interaksi tidak memerlukan kad kredit.",
      },
    ],
  },
  related: {
    heading: "Halaman berkaitan",
    links: [
      { label: "Moderasi komen media sosial", href: "/ms/moderasi-komen-media-sosial" },
      { label: "Moderasi komen Facebook", href: "/ms/moderasi-komen-facebook" },
      { label: "Moderasi komen iklan", href: "/ms/moderasi-komen-iklan" },
      { label: "Bandingkan dengan FeedGuardians", href: "/ms/bandingkan-feedguardians" },
    ],
  },
  finalCta: {
    heading: "Biarkan komen dijawab secara automatik",
    body: "Sambung akaun Instagram anda dan lihat komen pertama dibalas dalam beberapa minit.",
    cta: "Mula percubaan 3 hari",
  },
};
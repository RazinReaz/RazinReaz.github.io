// Publications, newest first.
// `teaser` is optional: an image path under /public (e.g. "/assets/publications/imwut-2025.jpg").
// Without one, a tile showing `venue` is drawn instead.
// `venueYear` is optional: the year shown on the venue badge when it differs from the publication date.
// The site owner's name in `authors` is highlighted automatically (see PublicationEntry.astro).

export const publications = [
  {
    title: "Forecasting Occupational Survivability of Rickshaw Pullers in a Changing Climate with Wearable Data",
    venue: "IMWUT",
    venueFull: "Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies (IMWUT)",
    venueLink: "https://dl.acm.org/toc/imwut/2025/9/4",
    date: "2025-12",
    authors: [
      "Masfiqur Rahaman",
      "Maoyejatun Hasana",
      "Shahad Shahriar Rahman",
      "MD. Sajid Mostafiz Noor",
      "Razin Reaz Abedin",
      "Md Toki Tahmid",
      "Duncan Watson Paris",
      "Tanzeem Choudhury",
      "A. B. M. Alim Al Islam",
      "Tauhidur Rahman",
    ],
    links: [
      { text: "ACM", href: "https://dl.acm.org/doi/10.1145/3770712" },
      { text: "PDF", href: "https://arxiv.org/pdf/2511.00081" },
      { text: "Video", href: "https://www.youtube.com/watch?v=17eN0Fuo4QM" },
    ],
  },
  {
    title: "\"It's Too Hot Under the Sun\": Unveiling the Impact of Prolonged Heat Exposure on Rickshaw Pullers' Brainwaves",
    venue: "NSysS",
    venueYear: "2024",
    tag: "Short paper",
    venueFull: "NSysS '24: Proceedings of the 11th International Conference on Networking, Systems, and Security",
    venueLink: "https://dl.acm.org/doi/proceedings/10.1145/3704522",
    date: "2025-01",
    authors: [
      "Maoyejatun Hasana",
      "Masfiqur Rahaman",
      "Razin Reaz Abedin",
      "Md Toki Tahmid",
      "Ishika Tarin",
      "Sudipa Saha",
      "Sutapa Dey Tithi",
      "Zarin Tasnim Promi",
      "Kazi Abdun Noor",
      "MD Zahidul Islam Sanjid",
      "Mahir Shahriar Dhrubo",
      "Samira Akter",
      "Tauhidur Rahman",
      "A. B. M. Alim Al Islam",
    ],
    links: [
      { text: "ACM", href: "https://dl.acm.org/doi/10.1145/3704522.3704556" },
      { text: "PDF", href: "https://dl.acm.org/doi/pdf/10.1145/3704522.3704556" },
    ],
  },
];

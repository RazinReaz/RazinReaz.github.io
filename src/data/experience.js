// Jobs and education, newest first.
// Dates are "YYYY-MM" or "YYYY"; leave `end` empty for an ongoing entry ("Present").
// Formatting lives in src/utils/dates.js.

export const jobs = [
  {
    title: "Junior Research Engineer",
    org: "Universal Machines Inc.",
    start: "2025-08",
    end: "2026-05",
  },
  {
    title: "Adjunct Lecturer",
    org: "Department of Computer Science and Engineering, BUET",
    start: "2024-08",
    end: "2024-12",
  },
];

export const education = [
  {
    title: "B.Sc. in Computer Science and Engineering",
    org: "Bangladesh University of Engineering and Technology (BUET)",
    start: "2019-04",
    end: "2024-07",
    note: "CGPA: 3.93/4.00",
  },
  {
    title: "Higher Secondary Certificate",
    org: "Bir Shreshtha Noor Mohammad Public College",
    start: "2016",
    end: "2018",
    note: "GPA: 5.00/5.00",
  },
  {
    title: "Secondary School Certificate",
    org: "Bir Shreshtha Noor Mohammad Public College",
    start: "2014",
    end: "2016",
    note: "GPA: 5.00/5.00",
  },
];

// Research projects (no dates — the timeline hides its date column automatically).
// `description` accepts HTML for links.
export const research = [
  {
    title: "Enhancing Earthquake Early Warning: Real-time Seismic Intensity Prediction with Contrastive Learning and DenseLoss",
    description:
      'Development of a deep learning model to predict peak ground acceleration (and earthquake intensity) by analyzing the first 3 seconds of the p-phase in seismograms under the supervision of <a href="https://sites.google.com/site/mohammedeunusali/" target="_blank">Dr. Mohammed Eunus Ali</a>.',
  },
  {
    title: "Analyzing Impacts on the Physiological Aspects of Rickshaw-pullers due to Heat Exposure",
    description:
      'Dataset preparation of the physiological aspects and environmental factors of Bangladeshi Rickshaw Pullers. Supervised by <a href="https://cse.buet.ac.bd/faculty/faculty_detail/razi" target="_blank">Dr. A. B. M. Alim Al Islam</a>.',
  },
];

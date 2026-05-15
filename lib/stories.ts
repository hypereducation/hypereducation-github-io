export interface GraduateStory {
  id: string;
  name: string;
  formerSituation: string;
  currentRole: string;
  employer: string;
  track: string;
  graduationYear: number;
  quote: string;
  longQuote: string;
}

export const stories: GraduateStory[] = [
  {
    id: "amara-osei",
    name: "Amara Osei",
    formerSituation: "Warehouse operative, no formal qualifications",
    currentRole: "Data Analyst",
    employer: "Lloyds Banking Group",
    track: "Power BI for Analysts",
    graduationYear: 2023,
    quote:
      "HyperEducation gave me the tools and the confidence to walk into an interview at a major bank and get the job. I never thought that was possible.",
    longQuote:
      "I spent four years loading pallets in a warehouse. I knew I had more to give, but I didn't know how to prove it. HyperEducation didn't just teach me Power BI — they taught me how to think like a data professional. Three months after graduating, I was sitting in Lloyds' London office. I still can't quite believe it.",
  },
  {
    id: "priya-raghunathan",
    name: "Priya Raghunathan",
    formerSituation: "Part-time retail worker, single parent",
    currentRole: "BI Developer",
    employer: "NHS England",
    track: "Power BI for Analysts",
    graduationYear: 2024,
    quote:
      "Doing the program while raising my daughter alone was hard, but the community and mentors made it possible. Now I'm building dashboards that help doctors make better decisions.",
    longQuote:
      "The evening schedule meant I could study after my daughter went to bed. My mentor checked in on me every week — not just about coursework, but about how I was doing as a person. That human element is what sets HyperEducation apart from any online course.",
  },
  {
    id: "daniel-achebe",
    name: "Daniel Achebe",
    formerSituation: "Long-term unemployed (18 months)",
    currentRole: "Analytics Engineer",
    employer: "Tesco",
    track: "Data Career Launchpad",
    graduationYear: 2024,
    quote:
      "The portfolio project was the turning point. I walked into every interview with something real to show. Tesco hired me on the spot after I demo'd my Lakehouse project.",
    longQuote:
      "After 18 months of rejections, I'd nearly given up. The Launchpad track rebuilt my confidence from the ground up. The mock interviews were brutal in the best way — by the time I was talking to real companies, I felt completely prepared.",
  },
  {
    id: "fatima-al-rashidi",
    name: "Fatima Al-Rashidi",
    formerSituation: "Refugee, English as second language",
    currentRole: "Data Analyst",
    employer: "Deloitte UK",
    track: "Fabric Fundamentals",
    graduationYear: 2023,
    quote:
      "Language was my biggest fear. But data is universal. The instructors were patient, the materials were clear, and my cohort became like a family.",
    longQuote:
      "I arrived in the UK speaking very little English. HyperEducation not only gave me technical skills — the program helped me find my professional voice. Deloitte saw my potential before I fully saw it myself.",
  },
  {
    id: "jordan-thomas",
    name: "Jordan Thomas",
    formerSituation: "Care leaver, no degree",
    currentRole: "Power BI Developer",
    employer: "Transport for London",
    track: "Power BI for Analysts",
    graduationYear: 2024,
    quote:
      "Growing up in care, people often underestimate you. HyperEducation was the first organisation that saw what I could do, not just where I came from.",
    longQuote:
      "I never had anyone in my corner pushing me toward a career. The mentorship program changed that. My mentor introduced me to their network, which led directly to the TfL role. I'm now thinking about doing the Launchpad track to move into data engineering.",
  },
  {
    id: "mei-lin-zhou",
    name: "Mei-Lin Zhou",
    formerSituation: "Factory worker, recent immigrant",
    currentRole: "Data Analyst",
    employer: "HSBC",
    track: "Data Career Launchpad",
    graduationYear: 2023,
    quote:
      "I worked in a factory for five years. I always loved numbers but never had the chance to use them. This program gave me that chance.",
    longQuote:
      "My English tutor suggested I look into data. I found HyperEducation online, applied on a whim, and it changed everything. The Launchpad curriculum is genuinely world-class — equivalent to anything I've seen at university, but practical and outcome-focused.",
  },
];

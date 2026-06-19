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
    id: "zara-khan",
    name: "Zara Khan",
    formerSituation: "Shop assistant in Lahore, no formal qualifications",
    currentRole: "Data Analyst",
    employer: "Tech startup, Lahore",
    track: "Power BI for Analysts",
    graduationYear: 2025,
    quote:
      "I never thought someone like me — no degree, no connections — could work with data. HyperEducation changed that completely.",
    longQuote:
      "Zara spent four years working at a small shop in Lahore while caring for her younger siblings. After completing our Power BI track, she landed a data analyst role at a local tech startup and now mentors other women in her community.",
  },
  {
    id: "bilal-ahmed",
    name: "Bilal Ahmed",
    formerSituation: "Ride-hailing driver in Karachi, BSc dropout",
    currentRole: "BI Developer",
    employer: "E-commerce company, Karachi",
    track: "Power BI for Analysts",
    graduationYear: 2025,
    quote:
      "I dropped out of university because I couldn't afford the fees. HyperEducation gave me the skills I couldn't get in a classroom — and it was free.",
    longQuote:
      "Bilal drove for a ride-hailing app for two years while looking for a way back into tech. The evening cohort format meant he could study after his shifts. He completed the Power BI track and joined a Karachi e-commerce company as a BI developer within three months.",
  },
  {
    id: "ayesha-siddiqui",
    name: "Ayesha Siddiqui",
    formerSituation: "Homemaker in Islamabad, re-entering workforce after 6 years",
    currentRole: "Analytics Engineer",
    employer: "Fintech firm, Islamabad",
    track: "Data Career Launchpad",
    graduationYear: 2025,
    quote:
      "Six years out of the workforce felt like a life sentence. The Launchpad track gave me a portfolio, a mentor, and my confidence back.",
    longQuote:
      "Ayesha stepped away from her career in 2019 to raise her children. Returning felt impossible — every job posting demanded recent experience she didn't have. The Launchpad track rebuilt her skills, gave her a portfolio of real projects, and connected her with a mentor who helped her navigate the job market. She joined a fintech firm in Islamabad six weeks after graduating.",
  },
  {
    id: "hassan-raza",
    name: "Hassan Raza",
    formerSituation: "Factory worker in Faisalabad, no university education",
    currentRole: "Data Analyst",
    employer: "Manufacturing group, Faisalabad",
    track: "Fabric Fundamentals",
    graduationYear: 2025,
    quote:
      "I worked on the factory floor for seven years. I always noticed patterns in the production data — I just didn't know how to turn that into a career until now.",
    longQuote:
      "Hassan had sharp analytical instincts developed through years of spotting inefficiencies on the production line. The Fabric Fundamentals track gave him the technical vocabulary and toolset to formalise what he already knew intuitively. He now works as a data analyst for the same manufacturing group — analysing the same production data he once monitored by hand.",
  },
  {
    id: "sana-mirza",
    name: "Sana Mirza",
    formerSituation: "Call centre agent in Rawalpindi, single mother",
    currentRole: "Power BI Developer",
    employer: "Telecom company, Rawalpindi",
    track: "Power BI for Analysts",
    graduationYear: 2025,
    quote:
      "Studying after my daughter went to sleep every night was hard. But every dashboard I built felt like proof that I could do this.",
    longQuote:
      "Sana juggled night shifts at a call centre with raising her daughter alone. She joined our evening cohort and studied in the quiet hours after her daughter was in bed. Her mentor checked in weekly — not just about coursework, but about how she was coping. She graduated and moved into a Power BI developer role at the telecom company where she'd previously answered customer calls.",
  },
  {
    id: "usman-tariq",
    name: "Usman Tariq",
    formerSituation: "Unemployed for 14 months, Peshawar",
    currentRole: "Analytics Engineer",
    employer: "NGO analytics team, Peshawar",
    track: "Data Career Launchpad",
    graduationYear: 2025,
    quote:
      "Fourteen months of rejections had convinced me I wasn't good enough. The Launchpad track reminded me that the problem was access, not ability.",
    longQuote:
      "Usman graduated with a commerce degree but couldn't break into the data field without certifications or portfolio projects he had no way to build. After 14 months of rejections, he joined the Launchpad track. The mock interviews, structured projects, and career coaching rebuilt his confidence. He now works on an analytics team at a Peshawar-based NGO, using data to track programme outcomes across KP.",
  },
];

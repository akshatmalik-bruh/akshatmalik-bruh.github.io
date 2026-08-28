export interface EducationItem {
  institution: string;
  degree: string;
  location: string;
  period: string;
  details: string[];
}

export const educationList: EducationItem[] = [
  {
    institution: 'Birla Institute of Technology (BIT), Mesra',
    degree: 'Bachelor of Engineering — Computer Science & Engineering',
    location: 'Ranchi, India',
    period: 'Aug 2023 - Present',
    details: [
      'Currently in 7th Semester',
      'CGPA: *8.18 / 10.0*',
    ],
  },
  {
    institution: 'MIET Public School',
    degree: 'Class XII (CBSE)',
    location: 'Meerut, India',
    period: '2021 - 2023',
    details: ['Score: *91.8% (PCM)*'],
  },
  {
    institution: 'MIET Public School',
    degree: 'Class X (CBSE)',
    location: 'Meerut, India',
    period: '2019 - 2021',
    details: ['Score: *95.4% (General)*'],
  },
];

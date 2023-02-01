export interface IListItem {
  title: string;
  body: Array<string>;
}
const SubList: Array<string> = [
  "Market Research Executie",
  "Child Psychologist",
  "Guidance Counsellor",
  "Behaviour Analyst",
  "Recreational Therapist",
];

export const list: Array<IListItem> = [
  { title: "Business & Management", body: SubList },
  { title: "Computing & IT", body: SubList },
  { title: "Fashion & Media", body: SubList },
  { title: "Finance & Accounting", body: SubList },
  { title: "Law & Criminology", body: SubList },
  { title: "Marketing & Communications", body: SubList },
  { title: "Psychology & Social Sciences", body: SubList },
];

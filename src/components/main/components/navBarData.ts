export interface IListItem{
    text: string;
}

export const list: Array<IListItem> = [
  { text: "Business & Management"},
  { text: "Computing & IT" },
  { text: "Fashion & Media" },
  { text: "Finance & Accounting" },
  { text: "Law & Criminology" },
  {text: "Marketing & Communications"},
  {text: "Psychology & Social Sciences"}
];

export interface ISubListItem extends IListItem{}

export const SubList: Array<ISubListItem> =[
    {text: "Market Research Executive"},
    {text: "Child Psychologist"},
    {text: "Guidance Counsellor"},
    {text: "Behaviour Analyst"},
    {text: "Recreational Therapist"}
    
]

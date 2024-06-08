import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";

interface PropTypes {
  year: string;
  gradeList: Array<string>;
}

const CurriculumComponent = ({ year, gradeList }: PropTypes) => {
  // eslint-disable-next-line
  let listItems: Array<{ title: string; link: string }> = [];
  gradeList.forEach((element: string) => {
    listItems.push({
      title: `${element.indexOf("p") !== -1 ? "" : element.indexOf("n") !== -1 ? "" : "Grade"} ${element.toUpperCase().replace("PN", "Pre Nursery").replace("NRY", "Nursery").replace("PREP", "Prep")}`,
      link: `https://www.lotusvalleygurgaon.com/pdfs/curriculum-${year}/${element}.pdf`,
    });
  });

  return (
    <div>
      <HoverEffect items={listItems} />
    </div>
  );
};

export default CurriculumComponent;

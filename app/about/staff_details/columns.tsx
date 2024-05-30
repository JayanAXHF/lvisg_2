"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type StaffDetail = {
  name: string;
  qualification: string;
  id: number;
};
export type GradeStrength = {
  grade: string;
  strength: string;
  id: number;
};

export const columns: ColumnDef<StaffDetail>[] = [
  {
    accessorKey: "name",
    header: () => {
      return <div>Name</div>;
    },
  },
  {
    accessorKey: "qualification",
    header: () => {
      return <div>Qualifications</div>;
    },
  },
];
export const strengthColumns: ColumnDef<GradeStrength>[] = [
  {
    accessorKey: "grade",
    header: "Grade",
  },
  {
    accessorKey: "strength",
    header: "Strength",
  },
];

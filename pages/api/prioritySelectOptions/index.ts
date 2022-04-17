// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

// data
import { prioritySelectOptions } from "../../../data/prioritySelectOptions";
import { IPrioritySelect } from "./../../../components/Todo/model";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<IPrioritySelect>>
) {
  res.status(200).json(prioritySelectOptions);
}

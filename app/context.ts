import { createContext } from "react";
import { Side } from "./sides";

export const ChosenSideContext = createContext<Side | undefined>(undefined);

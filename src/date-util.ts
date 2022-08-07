import ptBRLocale from "date-fns/locale/pt-BR";

import {formatDistance as formatDistanceFns} from "date-fns";

export const formatDistance = (date: Date, dateBase = new Date()) => {
  return formatDistanceFns(date, dateBase, {
    locale: ptBRLocale,
    addSuffix: true
  });
};

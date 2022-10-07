import { useTranslation } from "react-i18next";
import { BusStopStateType } from "../../../@types/busStop.type";
import Label from "../../shared/Label";

type Props = {
  state: BusStopStateType;
};

export default function BusStopStateView({ state }: Props) {
  const { t } = useTranslation();

  return (
    <Label color={state === "ACTIVE" ? "success" : "error"}>
      {t(`entities.busStop.enumerators.state.${state}`)}
    </Label>
  );
}

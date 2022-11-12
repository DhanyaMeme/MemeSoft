import { CountryEnum } from "../../models/enums";
import { country } from "../../redux/slices/nav/nav.selector";
import { setCountry } from "../../redux/slices/nav/nav.slice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { FormSelectInput } from "../../ui-kits/Form";

interface IProps {
  handleDrawClose?: () => void;
}

export const CountrySelect = (props: IProps) => {
  const { handleDrawClose } = props;

  const contryOptions: CountryEnum[] = [
    CountryEnum.USA,
    CountryEnum.EUROPE,
    CountryEnum.JAPAN,
    CountryEnum.UK,
    CountryEnum.Latin,
  ];

  const dispatch = useAppDispatch();
  const countryName = useAppSelector(country);

  const handleSelectChange = (name: string, option: string) => {
    dispatch(setCountry(option as CountryEnum));

    if (handleDrawClose) {
      handleDrawClose();
    }
  };

  return (
    <FormSelectInput
      name="Country"
      options={contryOptions}
      value={countryName}
      onSelect={handleSelectChange}
    />
  );
};

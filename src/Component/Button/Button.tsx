import { Button } from '../widget/styles';
interface Props {
  text: string;
  onClick: () => void;
}
export const CustomButton = ({ text, onClick }: Props) => {
  return <Button onClick={onClick}>{text}</Button>;
};

import { Link } from 'react-router-dom';

interface Props {
  to: string;
  text: string;
}

export const LinkButton = ({ to, text }: Props) => {
  return (
    <Link to={to}>
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-2 rounded"
      >
        {text}
      </button>
    </Link>
  );
};

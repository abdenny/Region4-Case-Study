import React from 'react';
interface Props {
  link?: string;
}

export const MoviePoster = ({ link }: Props) => {
  return (
    <img
      src={link}
      onError={(e) => {
        e.currentTarget.src = 'https://via.placeholder.com/300x450?text=Poster+Not+Found';
      }}
    />
  );
};

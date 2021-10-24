import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { url: '/search', icon: "🔎 ", text: 'All' },
  { url: '/news', icon: "📰 ", text: 'News' },
  { url: '/images', icon: "📸  ", text: 'Images' },
  { url: '/videos', icon: "📺  ", text: 'Videos' },
];

export const Links = () => (
  <div className="flex sm:justify-around justify-between items-center mt-4">
    {links.map(({ url, text, icon }) => (
      <NavLink to={url}  activeClassName="text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2">{icon}&nbsp;{text}</NavLink>
    ))}
  </div>
);
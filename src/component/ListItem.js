import React from 'react';

export default function Contacts({ items }) {
  return (
    <>
      {items.map((item) => (
        <li className="flex text-sm my-4 dark:text-white items-center" key={item.url}>
          <img src={item.icon} className="w-4 h-4 mr-1.5 flex-shrink-0" alt="instagram" />
          <a href={item.url}>{item.text}</a>
        </li>
      ))}
    </>
  );
}

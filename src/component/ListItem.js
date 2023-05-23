import React from 'react';

export default function Contacts({ lists }) {
  return (
    <ul>
      {lists.map((list) => (
        <li className="flex text-sm my-4 dark:text-white items-center" key={list.url}>
          <img src={list.icon} className="w-4 h-4 mr-1.5 flex-shrink-0" alt="instagram" />
          <a href={list.url}>{list.text}</a>
        </li>
      ))}
    </ul>
  );
}

import { useIconsContext } from '@modules/icons/context/icons-context';
import { IconsActionType } from '@modules/icons/context/types';
import { IconWithElement } from '@modules/icons/typings/icon.typings';
import React, { useMemo, useState } from 'react';
import { TextInput } from 'ui';
import IconEntry from '../icons/icon-entry';

const IconsEditorFeed: React.FC = () => {
  const { state, dispatch } = useIconsContext();
  const [filter, setFilter] = useState('');

  const handleIconSelected = (icon: IconWithElement) => {
    dispatch({
      type: IconsActionType.SET_SELECTED_ICON,
      payload: {
        icon,
      },
    });
  };

  const filteredIcons = useMemo(() => {
    if (filter === '') return state.icons;
    return state.icons.filter((icon) => icon.name.includes(filter));
  }, [filter]);

  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-between items-center mb-4 p-3.5 border-b-neutral-300 border-b-[1px] dark:bg-neutral-800 dark:border-b-neutral-700">
        <h2 className="font-medium text-xl">
          Browsing <span className="font-bold text-primary-600 dark:text-primary-300">{filteredIcons.length} </span>
          icons
        </h2>
        <TextInput
          id="search-icon"
          placeholder="Search Icons"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              height="35"
              width="35"
              className="w-5 h-5 stroke-gray-500 dark:stroke-gray-400"
              strokeWidth="2"
            >
              <path
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                d="M21 21L15.8033 15.8033M15.8033 15.8033C17.1605 14.4461 18 12.5711 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18C12.5711 18 14.4461 17.1605 15.8033 15.8033Z"
                width="35"
                height="35"
              />
            </svg>
          }
          onValueChanged={setFilter}
        />
      </div>
      <div
        className="grid gap-4 px-4 pb-4 overflow-y-auto w-full sm:ml-auto"
        style={{
          gridTemplateColumns: 'repeat(auto-fill, minmax(135px, 1fr))',
        }}
      >
        {filteredIcons
          ? filteredIcons.map((icon, index) => {
              return (
                <IconEntry
                  key={`icon-${index}`}
                  icon={icon}
                  customization={state.iconCustomization}
                  onIconSelected={(iconElement: JSX.Element) => {
                    handleIconSelected({ ...icon, element: iconElement });
                  }}
                />
              );
            })
          : null}
      </div>
    </div>
  );
};

export default IconsEditorFeed;

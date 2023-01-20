import { useIconsSelectionContext } from '@modules/icons/context/selection/icons-selection-context';
import { IconsSelectionActionType } from '@modules/icons/context/selection/reducer/types';
import type { Icon } from '@modules/icons/typings/icon.typings';
import clsx from 'clsx';
import React from 'react';

type IconEntryProps = {
  /** Icon data to display */
  icon: Icon;
  selected: boolean;
  /**
   * Render function that computes the icon element.
   * @returns The icon element
   */
  render: JSX.Element;
};

const IconEntry: React.FC<IconEntryProps> = (props) => {
  const { icon, selected, render } = props;
  const { dispatch } = useIconsSelectionContext();
  /**
   * Function
   * @returns Void
   */
  const handleIconSelected = () => {
    if (!selected) {
      dispatch({
        type: IconsSelectionActionType.ADD_SELECTED_ICON,
        payload: {
          icon: {
            ...icon,
            element: render,
          },
        },
      });
    } else {
      dispatch({
        type: IconsSelectionActionType.REMOVE_SELECTED_ICON,
        payload: {
          name: icon.name,
        },
      });
    }
  };

  return (
    <div
      className={clsx(
        'hover:border-primary-400 dark:hover:border-primary-500 group relative flex h-[175px] cursor-pointer justify-center overflow-hidden rounded-md border-[3.5px] border-neutral-300 bg-neutral-50 p-4 transition-colors hover:border-4 dark:border-neutral-700 dark:bg-neutral-800',
        selected ? 'dark:!border-primary-500 !border-primary-400' : ''
      )}
      onClick={handleIconSelected}
    >
      <div className="flex flex-col self-stretch">
        <div className="feed-icon-wrapper mx-auto flex flex-1 items-center justify-center">{render}</div>
        <span className="mb-1.5 text-center font-medium">{icon.name}</span>
      </div>
    </div>
  );
};

export default IconEntry;

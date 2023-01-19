import type { Filter, Sort } from '@modules/common/hooks/use-filter';
import useFilter from '@modules/common/hooks/use-filter';
import { useIconsContext } from '@modules/icons/context/icons/icons-context';
import { getSVGSourceIntoComponent } from '@modules/icons/lib/icons-utils';
import { selectSelectedIcons } from '@modules/icons/state/selected-icons.slice';
import type { Icon } from '@modules/icons/typings/icon.typings';
import dynamic from 'next/dynamic';
import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { VirtuosoGrid, VirtuosoGridHandle } from 'react-virtuoso';

import SelectedIcons from '../selection/selected-icons';
import IconsFeedFiltering from './icons-feed-filtering';
import IconsFeedScrollTop from './icons-feed-scroll-top';

const LoadingIcon = () => {
  return (
    <div className="flex h-[175px] animate-pulse items-center justify-center rounded-md border-[2px] border-neutral-300 bg-neutral-50 text-xl font-bold text-neutral-600 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200">
      Loading
    </div>
  );
};

const IconEntry = dynamic(() => import('../../icons/icon-entry'), {
  ssr: false,
  loading: () => <LoadingIcon />,
});

const IconsFeed: React.FC = () => {
  const { state: iconsState } = useIconsContext();
  const selectedIcons = useSelector(selectSelectedIcons);

  const feedContainer = useRef<VirtuosoGridHandle | null>(null);

  const initialFilters: Filter<Icon>[] = [{ property: 'name', value: '', enabled: true }];

  const initialSort: Sort<Icon> = {
    property: 'name',
    ascending: true,
  };

  const { filteredData, updateFilter, updateSort } = useFilter<Icon>(iconsState.icons, initialFilters, initialSort);

  /**
   * Callback function when the name filter changes.
   * @param value New name filter.
   */
  const handleNameFilterChanged = (value: string) => {
    updateFilter({ property: 'name', value, enabled: true });
  };

  /**
   * Callback function when the sort filter changes.
   * @param value New sort filter.
   * @param criteria The sort criteria.
   */
  const handleSortChanged = (value: keyof Icon, criteria: 'asc' | 'des') => {
    updateSort({ property: value, ascending: criteria === 'asc' });
  };

  const handleScrollToTop = () => {
    if (feedContainer && feedContainer.current) {
      feedContainer.current.scrollToIndex({
        index: 0,
        align: 'center',
        behavior: 'smooth',
      });
    }
  };

  // TODO: Maybe improve this effect, is needed because we need to update the svg source elements of the selected icons when the customization changes, otherwise they will stay like when they were selected.
  // useEffect(() => {
  //   if (!iconsSelectionState.selectedIcons.length) return;

  //   const updatedSelectedIcons = iconsSelectionState.selectedIcons.map((selectedIcon) => {
  //     const iconSVG: JSX.Element = getSVGSourceIntoComponent(
  //       selectedIcon.source,
  //       iconsState.iconPack?.requiresFill || false,
  //       iconsState.iconCustomization,
  //       'grid-icon'
  //     );
  //     return { ...selectedIcon, element: iconSVG };
  //   });
  //   dispatch({
  //     type: IconsSelectionActionType.SET_SELECTED_ICONS,
  //     payload: { icons: updatedSelectedIcons },
  //   });
  // }, [iconsState.iconCustomization]);

  return (
    <div className="flex w-full flex-col">
      <div className="md:grid-cols-filter grid items-center gap-2 border-b-[1px] border-b-neutral-300 p-4 dark:border-b-neutral-700 dark:bg-neutral-800">
        <h2 className="text-xl font-medium">
          Browsing <span className="text-primary-600 dark:text-primary-300 font-bold">{filteredData.length}</span> icons
        </h2>
        <IconsFeedFiltering onNameChanged={handleNameFilterChanged} onSortChanged={handleSortChanged} />
      </div>
      <div className="relative h-full">
        <VirtuosoGrid
          ref={feedContainer}
          className="hide-scrollbar icons-container"
          style={{ height: '100%', margin: '1rem' }}
          totalCount={filteredData.length}
          overscan={25}
          data={filteredData}
          itemContent={(index, icon) => {
            const isIconSelected = selectedIcons.find((selectedIcon) => selectedIcon.name === icon.name) !== undefined;

            const source = getSVGSourceIntoComponent(icon.source, iconsState.iconPack?.type || 'outline', 'grid-icon');

            return <IconEntry key={`icon-${index}`} icon={icon} selected={isIconSelected} render={source} />;
          }}
        />

        <div className="absolute bottom-0 my-2 flex w-full justify-between px-4">
          <SelectedIcons />
          <IconsFeedScrollTop onClick={handleScrollToTop} />
        </div>
      </div>
    </div>
  );
};

export default IconsFeed;

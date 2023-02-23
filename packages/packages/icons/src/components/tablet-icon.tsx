import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@elementor/ui';

const TabletIcon = React.forwardRef( ( props: SvgIconProps, ref ) => {
	return (
		<SvgIcon viewBox="0 0 24 24" { ...props } ref={ ref }>
			<path fillRule="evenodd" clipRule="evenodd" d="M7.33333 3.25C6.3865 3.25 5.75 3.92825 5.75 4.61111V19.3889C5.75 20.0718 6.3865 20.75 7.33333 20.75H16.6667C17.6135 20.75 18.25 20.0718 18.25 19.3889V4.61111C18.25 3.92825 17.6135 3.25 16.6667 3.25H13.7073C13.735 3.32819 13.75 3.41234 13.75 3.5C13.75 3.91421 13.4142 4.25 13 4.25H11C10.5858 4.25 10.25 3.91421 10.25 3.5C10.25 3.41234 10.265 3.32819 10.2927 3.25H7.33333ZM4.25 4.61111C4.25 2.96211 5.70284 1.75 7.33333 1.75H16.6667C18.2972 1.75 19.75 2.96211 19.75 4.61111V19.3889C19.75 21.0379 18.2972 22.25 16.6667 22.25H7.33333C5.70284 22.25 4.25 21.0379 4.25 19.3889V4.61111Z" />
		</SvgIcon>
	);
} );

export default TabletIcon;

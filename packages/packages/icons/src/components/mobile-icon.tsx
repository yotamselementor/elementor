import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@elementor/ui';

const MobileIcon = React.forwardRef( ( props: SvgIconProps, ref ) => {
	return (
		<SvgIcon viewBox="0 0 24 24" { ...props } ref={ ref }>
			<path fillRule="evenodd" clipRule="evenodd" d="M8.66667 4.25C8.24587 4.25 7.75 4.66893 7.75 5.38889V18.6111C7.75 19.3311 8.24587 19.75 8.66667 19.75H15.3333C15.7541 19.75 16.25 19.3311 16.25 18.6111V5.38889C16.25 4.66893 15.7541 4.25 15.3333 4.25H13.7073C13.735 4.32819 13.75 4.41234 13.75 4.5C13.75 4.91421 13.4142 5.25 13 5.25H11C10.5858 5.25 10.25 4.91421 10.25 4.5C10.25 4.41234 10.265 4.32819 10.2927 4.25H8.66667ZM6.25 5.38889C6.25 4.02244 7.24652 2.75 8.66667 2.75H15.3333C16.7535 2.75 17.75 4.02244 17.75 5.38889V18.6111C17.75 19.9776 16.7535 21.25 15.3333 21.25H8.66667C7.24652 21.25 6.25 19.9776 6.25 18.6111V5.38889Z" />
		</SvgIcon>
	);
} );

export default MobileIcon;

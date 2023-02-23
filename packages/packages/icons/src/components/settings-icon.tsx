import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@elementor/ui';

const SettingsIcon = React.forwardRef( ( props: SvgIconProps, ref ) => {
	return (
		<SvgIcon viewBox="0 0 24 24" { ...props } ref={ ref }>
			<path fillRule="evenodd" clipRule="evenodd" d="M12.9461 4.49382C12.7055 3.50206 11.2945 3.50206 11.0539 4.49382L11.0538 4.49421C10.6578 6.12252 8.79686 6.89441 7.36336 6.02285L7.36299 6.02262C6.49035 5.49135 5.49253 6.49022 6.0235 7.3618C6.22619 7.69432 6.34752 8.06998 6.37762 8.45824C6.40773 8.84659 6.34572 9.23656 6.19663 9.59641C6.04755 9.95627 5.8156 10.2758 5.51966 10.5291C5.22378 10.7823 4.8723 10.9621 4.49382 11.0539C3.50206 11.2945 3.50206 12.7055 4.49382 12.9461L4.49422 12.9462C4.87244 13.0382 5.22363 13.2181 5.51923 13.4714C5.81483 13.7246 6.0465 14.0441 6.19542 14.4037C6.34433 14.7633 6.40629 15.153 6.37625 15.5411C6.34621 15.9292 6.22502 16.3047 6.02253 16.6371C5.49145 17.5098 6.49026 18.5074 7.3618 17.9765C7.69431 17.7738 8.06998 17.6525 8.45824 17.6224C8.84659 17.5923 9.23656 17.6543 9.59641 17.8034C9.95627 17.9525 10.2758 18.1844 10.5291 18.4803C10.7823 18.7762 10.9621 19.1277 11.0539 19.5062C11.2945 20.4979 12.7055 20.4979 12.9461 19.5062L12.9462 19.5058C13.0382 19.1276 13.2181 18.7764 13.4714 18.4808C13.7246 18.1852 14.0441 17.9535 14.4037 17.8046C14.7633 17.6557 15.153 17.5937 15.5411 17.6238C15.9292 17.6538 16.3047 17.775 16.6371 17.9775C17.5097 18.5085 18.5074 17.5097 17.9765 16.6382C17.7738 16.3057 17.6525 15.93 17.6224 15.5418C17.5923 15.1534 17.6543 14.7634 17.8034 14.4036C17.9525 14.0437 18.1844 13.7242 18.4803 13.4709C18.7762 13.2177 19.1277 13.0379 19.5062 12.9461C20.4979 12.7055 20.4979 11.2945 19.5062 11.0539L19.5058 11.0538C19.1276 10.9618 18.7764 10.7819 18.4808 10.5286C18.1852 10.2754 17.9535 9.95594 17.8046 9.59631C17.6557 9.23668 17.5937 8.84698 17.6238 8.45889C17.6538 8.07081 17.775 7.69528 17.9775 7.36285C18.5085 6.49025 17.5097 5.49256 16.6382 6.0235C16.3057 6.22619 15.93 6.34752 15.5418 6.37762C15.1534 6.40773 14.7634 6.34572 14.4036 6.19663C14.0437 6.04755 13.7242 5.8156 13.4709 5.51966C13.2177 5.22378 13.0379 4.8723 12.9461 4.49382ZM9.59624 4.13979C10.2079 1.61994 13.7925 1.62007 14.4039 4.14018L14.4039 4.14039C14.44 4.28943 14.5108 4.42783 14.6105 4.54434C14.7102 4.66085 14.836 4.75216 14.9777 4.81086C15.1194 4.86955 15.2729 4.89397 15.4258 4.88211C15.5787 4.87026 15.7266 4.82247 15.8576 4.74264L15.8578 4.7425C18.0722 3.39347 20.6074 5.92764 19.2586 8.14301L19.2585 8.14315C19.1788 8.27403 19.1311 8.42187 19.1193 8.57465C19.1075 8.72744 19.1318 8.88086 19.1905 9.02245C19.2491 9.16404 19.3403 9.28979 19.4567 9.38949C19.573 9.4891 19.7111 9.5599 19.8598 9.59614C22.3801 10.2075 22.3801 13.7925 19.8598 14.4039L19.8596 14.4039C19.7106 14.44 19.5722 14.5108 19.4557 14.6105C19.3392 14.7102 19.2478 14.836 19.1891 14.9777C19.1304 15.1194 19.106 15.2729 19.1179 15.4258C19.1297 15.5787 19.1775 15.7266 19.2574 15.8576L19.2575 15.8578C20.6065 18.0722 18.0724 20.6074 15.857 19.2586L15.8569 19.2585C15.726 19.1788 15.5781 19.1311 15.4253 19.1193C15.2726 19.1075 15.1191 19.1318 14.9776 19.1905C14.836 19.2491 14.7102 19.3403 14.6105 19.4567C14.5109 19.573 14.4401 19.7111 14.4039 19.8598C13.7925 22.3801 10.2075 22.3801 9.59614 19.8598L9.59609 19.8596C9.55998 19.7106 9.48919 19.5722 9.38948 19.4557C9.28977 19.3392 9.16396 19.2478 9.02228 19.1891C8.88061 19.1304 8.72708 19.106 8.57419 19.1179C8.4213 19.1297 8.27337 19.1775 8.14244 19.2574L8.1422 19.2575C5.92778 20.6065 3.39265 18.0724 4.74138 15.857L4.74147 15.8569C4.82118 15.726 4.86889 15.5781 4.88072 15.4253C4.89255 15.2726 4.86816 15.1191 4.80953 14.9776C4.7509 14.836 4.65969 14.7102 4.54332 14.6105C4.42705 14.5109 4.28893 14.4401 4.14018 14.4039C1.61994 13.7925 1.61994 10.2075 4.14018 9.59614L4.14039 9.59609C4.28943 9.55998 4.42783 9.48919 4.54434 9.38948C4.66085 9.28977 4.75216 9.16396 4.81086 9.02228C4.86955 8.88061 4.89397 8.72708 4.88211 8.57419C4.87026 8.4213 4.82247 8.27337 4.74264 8.14244L4.7425 8.1422C3.39354 5.92791 5.92736 3.39294 8.14263 4.74115C8.70903 5.08552 9.4399 4.7816 9.59614 4.14018M12 9.75C10.7574 9.75 9.75 10.7574 9.75 12C9.75 13.2426 10.7574 14.25 12 14.25C13.2426 14.25 14.25 13.2426 14.25 12C14.25 10.7574 13.2426 9.75 12 9.75ZM8.25 12C8.25 9.92893 9.92893 8.25 12 8.25C14.0711 8.25 15.75 9.92893 15.75 12C15.75 14.0711 14.0711 15.75 12 15.75C9.92893 15.75 8.25 14.0711 8.25 12Z" />
		</SvgIcon>
	);
} );

export default SettingsIcon;

import Image from 'next/image';
import { FC } from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
	variant?: 'graffiti' | 'text' | 'fly';
}

export const Logo: FC<Props> = ({ variant, ...props }) => {
	switch (variant) {
		case 'text':
			return (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='48'
					height='48'
					fill='none'
					viewBox='0 0 48 48'
					{...props}
				>
					<g clipPath='url(#clip0_1696_2882)'>
						<path
							className='text-default-900'
							fill='currentColor'
							d='M28.479 31.593v3.367H9.247c0-.59-.005-1.178.005-1.765.002-.093.068-.19.119-.276.756-1.268 1.511-2.536 2.28-3.795.062-.102.221-.204.336-.205 2.058-.012 4.116-.01 6.174-.007.054 0 .109.012.183.02v1.805h-6.872v2.357h7.426v-6.383h-5.77c.055-.122.08-.2.123-.271.189-.323.422-.627.567-.97.23-.545.587-.696 1.179-.682 1.954.046 3.911.017 5.867.017h.41v8.245h4.833v-8.217h2.355v3.698c.525-1.43 1.428-2.509 2.805-3.155 1.37-.643 2.802-.741 4.258-.366 2.436.629 3.696 2.297 3.971 5.235.08.01.167.027.253.028 1.206.002 2.411.004 3.616 0 .543-.002 1.071-.09 1.5-.459.588-.507.654-1.172.48-1.872-.18-.723-.73-1.044-1.414-1.149-.391-.06-.792-.06-1.19-.063-1.237-.008-2.474-.003-3.733-.003v-1.904c.092-.006.179-.018.267-.018 1.41 0 2.82-.009 4.23.003 1.078.008 2.086.246 2.986.887 1.804 1.282 1.872 4.674-.454 5.872-.098.05-.193.106-.31.17l2.237 3.223c-.139.014-.231.031-.324.031-.626.002-1.25-.007-1.876.006-.215.004-.35-.054-.473-.241-.523-.785-1.07-1.554-1.599-2.335-.126-.187-.265-.271-.5-.264-.601.018-1.204.006-1.841.006v2.798h-2.362v-2.536c-1.298 2.187-3.19 3.068-5.572 2.894-2.42-.178-4.094-1.395-4.943-3.725h.005zm8.609-1.529c-.002-1.901-1.336-3.267-3.185-3.26-1.852.008-3.172 1.372-3.17 3.28.002 1.915 1.314 3.253 3.188 3.25 1.867-.003 3.169-1.347 3.167-3.269zM22.48 23.22c-1.282.218-2.504.206-3.692-.271-.537-.216-1.064-.457-1.605-.657-.752-.277-1.144-.15-1.528.552-.175.318-.384.358-.712.404-.835.115-1.36-.162-1.683-.95-.187-.457-.509-.858-.75-1.296a.47.47 0 01-.024-.364c1.05-2.461 2.113-4.917 3.164-7.377.076-.18.173-.232.355-.23.613.008 1.227-.005 1.841.011.107.003.268.088.307.177 1.443 3.316 2.876 6.637 4.327 10zm-3.226-1.833l.064-.049-2.326-5.396c-.821 1.94-1.615 3.81-2.416 5.7h.765c.055-.223.096-.434.16-.638.063-.204.13-.411.223-.602.305-.617.76-.788 1.372-.474.411.212.789.489 1.174.75.334.227.656.473.983.71h.001zM47.722 23.23c-.924 0-1.752.009-2.578-.01-.118-.004-.26-.122-.344-.225-.953-1.158-1.897-2.323-2.843-3.486-.071-.086-.146-.169-.242-.28-.446.466-.881.91-1.298 1.37-.062.068-.056.212-.057.32-.004.759-.002 1.517-.002 2.292h-2.32V13.057h2.31v4.747c.451-.473.84-.877 1.224-1.284.997-1.06 1.995-2.116 2.982-3.183.2-.216.402-.32.705-.31.702.022 1.405.007 2.21.007-1.432 1.548-2.803 3.033-4.201 4.546l4.453 5.65zM25.617 18.515c.982 0 1.948.007 2.913-.002.635-.005 1.275.01 1.905-.055 1.218-.126 1.865-1.14 1.518-2.313-.204-.69-.847-1.146-1.747-1.162-1.34-.026-2.682-.012-4.023-.015h-.57v-1.897c.049-.012.101-.034.154-.034 1.626.008 3.252-.014 4.875.039a4.196 4.196 0 012.827 1.18c1.3 1.232 1.484 4.31-.819 5.533-.098.052-.194.106-.321.177l1.116 1.607 1.15 1.657c-.52 0-.986-.057-1.433.013-.831.129-1.344-.186-1.736-.914-.331-.616-.779-1.172-1.195-1.74a.551.551 0 00-.376-.199c-.622-.02-1.245-.009-1.904-.009v2.827h-2.334v-4.692zM11.475 23.894c-.67 0-1.27.012-1.868-.013-.094-.004-.204-.157-.268-.265-1.136-1.912-2.266-3.827-3.399-5.742-.055-.095-.118-.184-.197-.31L3.74 20.9c-.549.915-1.1 1.829-1.64 2.749-.103.176-.214.259-.427.253-.542-.016-1.086-.005-1.695-.005.052-.156.068-.275.125-.37 1.704-2.854 3.413-5.707 5.122-8.557.175-.293.86-.29 1.033 0 1.687 2.815 3.373 5.63 5.053 8.447.075.126.097.282.16.478h.003zM5.755 31.137c.6-1.019 1.17-1.983 1.74-2.948.624-1.055 1.245-2.11 1.876-3.161.055-.093.17-.21.26-.213.6-.02 1.2-.01 1.872-.01-.066.178-.094.318-.163.433a6374.202 6374.202 0 01-5.053 8.439c-.22.366-.866.364-1.086-.002a8889.616 8889.616 0 01-5.074-8.471c-.061-.103-.096-.22-.173-.398.678 0 1.296-.01 1.912.01.084.004.18.152.24.252 1.134 1.887 2.265 3.776 3.397 5.664.07.117.143.23.25.404h.002zM2.215 13.712c0 .629 0 1.239-.002 1.85 0 .042-.02.088-.043.126L.026 19.27v-5.558h2.189zM2.218 34.974H.019v-5.516c.085.122.137.187.18.258.625 1.04 1.253 2.077 1.866 3.124.091.155.14.357.146.539.02.52.007 1.04.007 1.596v-.002zM11.363 19.1c-.686-1.145-1.374-2.292-2.059-3.439a.41.41 0 01-.055-.191c-.004-.578-.002-1.156-.002-1.755h2.189v5.363l-.072.023z'
						/>
						<path
							className='text-primary-500'
							fill='currentColor'
							d='M33.985 28.9c.323-.275.662-.505 1.108-.438.752.115 1.19.888.93 1.701a1.796 1.796 0 01-.42.725c-.395.388-.837.73-1.27 1.078-.217.176-.47.185-.691.008-.443-.353-.898-.697-1.3-1.093a1.54 1.54 0 01-.466-1.37c.15-.981 1.088-1.363 1.886-.777l.223.165z'
						/>
					</g>
					<defs>
						<clipPath id='clip0_1696_2882'>
							<path fill='#fff' d='M0 0H48V48H0z' />
						</clipPath>
					</defs>
				</svg>
			);
		case 'fly':
			return (
				<Image src='/images/melior-fly.png' alt='logo' width={48} height={48} />
			);
		case 'graffiti':
			return (
				<Image
					src='/images/melior-graffiti.png'
					alt='logo'
					width={48}
					height={48}
				/>
			);
		default:
			return (
				<svg
					width='48'
					height='48'
					viewBox='0 0 48 48'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					className='text-default-900'
					{...props}
				>
					<path
						d='M1.38723 13.101C1.06729 12.738 0.833698 12.5692 0.618982 12.5152C0.612701 12.5299 0.605738 12.548 0.598406 12.57C0.530796 12.7729 0.490499 13.1285 0.502029 13.645C0.524702 14.6606 0.740934 16.1105 1.10458 17.74C1.83255 21.002 3.12155 24.8545 4.49385 27.1873C6.93774 31.3419 8.39027 33.4404 9.27671 34.3103C9.49418 34.5237 9.65406 34.6389 9.76429 34.6949C9.8132 34.7198 9.84421 34.729 9.86082 34.7324C9.86854 34.7248 9.88014 34.7119 9.89527 34.6905C9.94406 34.6215 10.0004 34.5054 10.0604 34.326C10.1612 34.0244 10.2416 33.644 10.3359 33.1982C10.3554 33.1058 10.3756 33.0106 10.3966 32.9127C10.5146 32.3636 10.6574 31.7504 10.8794 31.1963C11.1004 30.6447 11.4194 30.1004 11.9219 29.7349C12.4429 29.3559 13.1007 29.2125 13.8994 29.3579C15.5554 29.6593 17.3916 30.6639 18.9594 31.5216C19.0488 31.5706 19.1374 31.619 19.2251 31.6669C20.0569 32.1209 20.8023 32.5189 21.4329 32.7689C21.7469 32.8933 22.0135 32.9732 22.2337 33.0076C22.4221 33.037 22.5519 33.0291 22.6392 33.0062C22.647 32.9873 22.6575 32.9557 22.6679 32.9056C22.7021 32.7416 22.7093 32.4833 22.6725 32.1272C22.5997 31.4229 22.3693 30.4654 22.0183 29.4029C21.3152 27.2745 20.1676 24.8421 18.9891 23.3405C16.5381 20.2176 13.6279 19.5777 10.6976 18.9334C9.83212 18.7431 8.96489 18.5525 8.10722 18.2973C5.28929 17.459 3.73135 15.9827 2.66591 14.7041C2.41778 14.4063 2.19612 14.119 1.99602 13.8596L1.96032 13.8133C1.74793 13.5381 1.56381 13.3013 1.38723 13.101ZM9.87594 34.7342C9.87584 34.7341 9.87504 34.7341 9.87357 34.7342C9.87527 34.7343 9.87604 34.7342 9.87594 34.7342ZM9.85161 34.7405C9.85021 34.7412 9.84952 34.7417 9.84954 34.7418C9.84955 34.7418 9.85025 34.7414 9.85161 34.7405ZM22.6266 33.03C22.6267 33.0302 22.6278 33.0289 22.6298 33.0256C22.6275 33.0282 22.6265 33.0299 22.6266 33.03Z'
						fill='currentColor'
					/>
					<path
						d='M46.6125 13.101C46.9325 12.7381 47.1661 12.5692 47.3808 12.5153C47.3871 12.53 47.394 12.548 47.4014 12.57C47.469 12.7729 47.5093 13.1286 47.4977 13.6451C47.4751 14.6606 47.2588 16.1105 46.8952 17.74C46.1672 21.002 44.8782 24.8545 43.5059 27.1874C41.062 31.3419 39.6095 33.4404 38.723 34.3103C38.5056 34.5237 38.3457 34.639 38.2355 34.695C38.1866 34.7198 38.1555 34.7291 38.1389 34.7324C38.1312 34.7249 38.1196 34.7119 38.1045 34.6905C38.0557 34.6215 37.9993 34.5054 37.9394 34.326C37.8386 34.0244 37.7581 33.644 37.6638 33.1982C37.6443 33.1058 37.6242 33.0106 37.6032 32.9128C37.4852 32.3637 37.3423 31.7504 37.1203 31.1964C36.8993 30.6447 36.5803 30.1004 36.0779 29.7349C35.5569 29.3559 34.8991 29.2125 34.1004 29.3579C32.4444 29.6593 30.6082 30.6639 29.0404 31.5217C28.9509 31.5706 28.8623 31.6191 28.7747 31.6669C27.9428 32.1209 27.1975 32.519 26.5669 32.7689C26.2529 32.8934 25.9863 32.9732 25.7661 33.0076C25.5776 33.037 25.4479 33.0292 25.3606 33.0062C25.3528 32.9874 25.3422 32.9557 25.3318 32.9056C25.2977 32.7416 25.2904 32.4833 25.3272 32.1273C25.4 31.423 25.6304 30.4654 25.9815 29.4029C26.6846 27.2746 27.8322 24.8421 29.0107 23.3405C31.4616 20.2176 34.3719 19.5778 37.3022 18.9335C38.1676 18.7432 39.0349 18.5525 39.8925 18.2973C42.7105 17.459 44.2684 15.9827 45.3338 14.7041C45.582 14.4064 45.8036 14.119 46.0037 13.8596L46.0394 13.8134C46.2518 13.5382 46.4359 13.3014 46.6125 13.101ZM38.1238 34.7342C38.1239 34.7341 38.1247 34.7341 38.1262 34.7342C38.1245 34.7343 38.1237 34.7342 38.1238 34.7342ZM38.1481 34.7405C38.1495 34.7412 38.1502 34.7417 38.1502 34.7418C38.1502 34.7418 38.1495 34.7415 38.1481 34.7405ZM25.3732 33.0301C25.3731 33.0302 25.372 33.0289 25.37 33.0256C25.3723 33.0283 25.3732 33.0299 25.3732 33.0301Z'
						fill='currentColor'
					/>
				</svg>
			);
	}
};

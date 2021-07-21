import { __ } from '@wordpress/i18n';
import Edit from './edit';
import Save from './save';
import './style.scss';
import './editor.scss';

export const BtloNavConfig = {
	apiVersion: 2,
	title: __('BTLO nav block', 'custom-block'),
	description: __(
		'A row of navigation buttons inside a BTLO-node.',
		'custom-block'
	),
	icon: 'editor-insertmore',
	category: 'text',
	parent: ['custom-block/btlo-node'],
	supports: {
		html: false,
	},
	attributes: {
		parentClientId: {
			type: 'string',
		},
		clientId: {
			type: 'string',
		},
		navIndex: {
			type: 'integer',
		},
	},
	example: {},
	usesContext: ['custom-block/btlo-node/clientId'],
	providesContext: {
		'custom-block/btlo-nav/navIndex': 'navIndex',
		'custom-block/btlo-nav/clientId': 'clientId',
	},

	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save: Save,
};

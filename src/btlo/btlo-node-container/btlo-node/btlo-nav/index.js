import { __ } from '@wordpress/i18n';
import Edit from './edit';
import Save from './save';
import './style.scss';
import './editor.scss';

export const BtloNavConfig = {
	apiVersion: 2,
	title: __('BTLO nav block', 'gutenberg-btlo-block'),
	description: __(
		'A row of navigation buttons inside a BTLO-node.',
		'gutenberg-btlo-block'
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
	usesContext: ['gutenberg-btlo-block/btlo-node/clientId'],
	providesContext: {
		'gutenberg-btlo-block/btlo-nav/navIndex': 'navIndex',
		'gutenberg-btlo-block/btlo-nav/clientId': 'clientId',
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

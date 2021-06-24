import { __ } from '@wordpress/i18n';
import Edit from './edit';
import Save from './save';
import './style.scss';
import './editor.scss';

export const BtloNodeContainerConfig = {
	apiVersion: 2,
	title: __('BTLO node container', 'gutenberg-btlo-block'),
	description: __('containes nodes, and nothing else', 'gutenberg-btlo-block'),
	icon: 'admin-page',
	category: 'text',
	parent: ['custom-block/btlo'],
	supports: {
		html: false,
	},
	attributes: {
		clientId: {
			type: 'string',
		},
		btloClientId: {
			type: 'string',
		},
	},
	example: {},
	usesContext: [
		'gutenberg-btlo-block/btlo/clientId',
		'gutenberg-btlo-block/btlo/nodeNames',
	],

	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save: Save,
};

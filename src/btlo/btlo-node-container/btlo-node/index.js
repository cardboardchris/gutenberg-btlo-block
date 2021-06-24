import { __ } from '@wordpress/i18n';
import Edit from './edit';
import Save from './save';
import './style.scss';
import './editor.scss';

export const BtloNodeConfig = {
	apiVersion: 2,
	title: __('BTLO node', 'gutenberg-btlo-block'),
	description: __('One node of a BTLO.', 'gutenberg-btlo-block'),
	icon: 'admin-page',
	category: 'text',
	parent: ['custom-block/btlo-node-container'],
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
		nodeName: {
			type: 'string',
			default: '',
		},
	},
	example: {},
	usesContext: [
		'gutenberg-btlo-block/btlo/clientId',
		'gutenberg-btlo-block/btlo/nodeNames',
	],
	providesContext: {
		'gutenberg-btlo-block/btlo-node/nodeIndex': 'nodeIndex',
		'gutenberg-btlo-block/btlo-node/clientId': 'clientId',
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

import { __ } from '@wordpress/i18n';
import Edit from './edit';
import Save from './save';
import './style.scss';
import './editor.scss';

export const BtloNodeContainerConfig = {
	apiVersion: 2,
	title: __('BTLO node container', 'custom-block'),
	description: __('containes nodes, and nothing else', 'custom-block'),
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
	providesContext: {
		'custom-block/btlo-node-container/clientId': 'clientId',
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

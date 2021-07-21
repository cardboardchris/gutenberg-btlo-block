import { __ } from '@wordpress/i18n';
import Edit from './edit';
import Save from './save';
import './style.scss';
import './editor.scss';

export const BtloNodeConfig = {
	apiVersion: 2,
	title: __('BTLO node', 'custom-block'),
	description: __('One node of a BTLO.', 'custom-block'),
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
		'custom-block/btlo/clientId',
		'custom-block/btlo-node-container/clientId',
		'custom-block/btlo/nodeNames',
	],
	providesContext: {
		'custom-block/btlo-node/nodeIndex': 'nodeIndex',
		'custom-block/btlo-node/clientId': 'clientId',
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

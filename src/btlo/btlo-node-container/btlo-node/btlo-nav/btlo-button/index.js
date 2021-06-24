import { __ } from '@wordpress/i18n';
import Edit from './edit';
import Save from './save';
import './style.scss';
import './editor.scss';

export const BtloButtonConfig = {
	apiVersion: 2,
	title: __('BTLO nav button', 'gutenberg-btlo-block'),
	description: __(
		'A button for navigating to a BTLO-node.',
		'gutenberg-btlo-block'
	),
	icon: 'button',
	category: 'text',
	parent: ['custom-block/btlo-nav'],
	supports: {
		html: false,
	},
	attributes: {
		btloClientId: {
			type: 'string',
		},
		nodeClientId: {
			type: 'string',
		},
		navClientId: {
			type: 'string',
		},
		buttonIndex: {
			type: 'integer',
		},
		targetNodeName: {
			type: 'string',
		},
		targetNodeClientId: {
			type: 'string',
			default: null
		},
		buttonText: {
			type: 'string',
			default: 'node link - click to edit',
		}
	},
	example: {},
	usesContext: [
		'gutenberg-btlo-block/btlo-node/clientId',
		'gutenberg-btlo-block/btlo-nav/clientId',
		'gutenberg-btlo-block/btlo/nodeNames',
		'gutenberg-btlo-block/btlo/clientId',
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

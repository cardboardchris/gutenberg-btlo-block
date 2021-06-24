import { __ } from '@wordpress/i18n';
import Edit from './edit';
import Save from './save';
import './style.scss';
import './editor.scss';

export const BtloConfig = {
	apiVersion: 2,
	title: __('BTLO', 'gutenberg-btlo-block'),
	description: __(
		'A Branching Tree Learning Object activity.',
		'gutenberg-btlo-block'
	),
	icon: 'networking',
	category: 'text',
	supports: {
		html: false,
	},
	attributes: {
		clientId: {
			type: 'string',
		},
		nodeNames: {
			type: 'array',
			default: [],
		},
	},
	providesContext: {
		'gutenberg-btlo-block/btlo/clientId': 'clientId',
		'gutenberg-btlo-block/btlo/nodeNames': 'nodeNames',
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

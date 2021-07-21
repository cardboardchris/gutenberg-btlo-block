import { __ } from '@wordpress/i18n';
import Edit from './edit';
import Save from './save';
import './style.scss';
import './editor.scss';

export const BtloDescriptionConfig = {
	apiVersion: 2,
	title: __('BTLO description', 'custom-block'),
	description: __(
		'Text to describe the BTLO.',
		'custom-block'
	),
	icon: 'admin-page',
	category: 'text',
	parent: ['custom-block/btlo'],
	supports: {
		html: false,
	},
	attributes: {
		btloClientId: {
			type: 'string',
		},
	},
	example: {},
	usesContext: [
		'custom-block/btlo/clientId',
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

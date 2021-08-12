/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */

import { BtloConfig } from './btlo';
import { BtloDescriptionConfig } from './btlo/btlo-description';
import { BtloNodeContainerConfig } from './btlo/btlo-node-container';
import { BtloNodeConfig } from './btlo/btlo-node-container/btlo-node';
import { BtloNavConfig } from './btlo/btlo-node-container/btlo-node/btlo-nav';
import { BtloButtonConfig } from './btlo/btlo-node-container/btlo-node/btlo-nav/btlo-button';

/**
 * import bootstrap js and scss
 */
import '../node_modules/bootstrap/scss/bootstrap.scss';

// import "bootstrap";
import './style.scss';
import './editor.scss';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
registerBlockType('gutenberg-btlo-block/btlo', BtloConfig);
registerBlockType('gutenberg-btlo-block/btlo-description', BtloDescriptionConfig);
registerBlockType('gutenberg-btlo-block/btlo-node-container', BtloNodeContainerConfig);
registerBlockType('gutenberg-btlo-block/btlo-node', BtloNodeConfig);
registerBlockType('gutenberg-btlo-block/btlo-nav', BtloNavConfig);
registerBlockType('gutenberg-btlo-block/btlo-button', BtloButtonConfig);

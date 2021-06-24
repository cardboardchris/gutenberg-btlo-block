<?php
/**
 * Plugin Name:     UNCG Online Course Blocks
 * Description:     Example block written with ESNext standard and JSX support – build step required.
 * Version:         0.1.1
 * Author:          UNCG Online
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     gutenberg-btlo-block
 *
 * @package         custom-block
 */

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */
function create_block_gutenberg_btlo_block_init()
{
	$dir = __DIR__;

	$script_asset_path = "$dir/build/index.asset.php";
	if ( ! file_exists($script_asset_path)) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "custom-block/gutenberg-btlo-block" block first.'
		);
	}
	$index_js     = 'build/index.js';
	$script_asset = require($script_asset_path);
	wp_register_script(
		'custom-block-gutenberg-btlo-block-editor',
		plugins_url($index_js, __FILE__),
		$script_asset['dependencies'],
		$script_asset['version']
	);
	wp_set_script_translations('custom-block-gutenberg-btlo-block-editor', 'gutenberg-btlo-block');

	$editor_css = 'build/index.css';
	wp_register_style(
		'custom-block-gutenberg-btlo-block-editor',
		plugins_url($editor_css, __FILE__),
		array(),
		filemtime("$dir/$editor_css")
	);

	$style_css = 'build/style-index.css';
	wp_register_style(
		'custom-block-gutenberg-btlo-block',
		plugins_url($style_css, __FILE__),
		array(),
		filemtime("$dir/$style_css")
	);

	register_block_type(
		'custom-block/gutenberg-btlo-block',
		array(
			'editor_script'    => 'custom-block-gutenberg-btlo-block-editor',
			'editor_style'     => 'custom-block-gutenberg-btlo-block-editor',
			'style'            => 'custom-block-gutenberg-btlo-block',
		)
	);
}

add_action('init', 'create_block_gutenberg_btlo_block_init');

function btlo_frontend_scripts() {
	if ( has_block( 'custom-block/btlo' ) ) {
		wp_enqueue_script(
			'custom-block-btlo',
			plugins_url( 'src/assets/js/btlo.js', __FILE__ ),
			array( 'jquery' ),
			filemtime( plugin_dir_path( __FILE__ ) . 'src/assets/js/btlo.js' )
		);
	}
}
add_action( 'wp_enqueue_scripts', 'btlo_frontend_scripts' );

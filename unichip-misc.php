<?php
/**
 * Plugin Name: Misc Unichip Functionality (Terrance's Plugin)
 */

defined('ABSPATH') or die('Get the hell out of here.');

add_action('wp_enqueue_scripts', 'unichip_enqueue_custom_js');
function unichip_enqueue_custom_js() {
    wp_enqueue_script('unichip_custom_js', plugin_dir_url(__FILE__) . 'unichip-custom.js', ['jquery']);
    wp_enqueue_style('unichip_custom_css', plugin_dir_url(__FILE__) . 'unichip-custom.css');
}
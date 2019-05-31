<?php
add_theme_support('automatic-feed-links');

if (function_exists('register_sidebar'))
    register_sidebar();

if (!isset($content_width))
	$content_width = 390;

function scripts() {
if ( !is_admin() ) { // this if statement will insure the following code only gets added to your wp site and not the admin page cause your code has no business in the admin page right unless that's your intentions
	// jquery
		wp_deregister_script('jquery'); 
		wp_register_script('jquery', ("http://ajax.googleapis.com/ajax/libs/jquery/3.0.0/jquery.min.js"), false); 
		wp_enqueue_script('jquery'); 
	// custom scripts
		wp_register_script('faq-toc-ify', ( get_bloginfo('template_url') . '/js/faq-toc-ify.js'), array('jquery')); 
		wp_enqueue_script('faq-toc-ify'); 
	}
}
add_action( 'wp_print_scripts', 'scripts'); // now just run the function
?>
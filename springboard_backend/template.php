<?php

/**
 * Implements template_preprocess_page().
 */
function springboard_backend_preprocess_page(&$variables) {
  // Override menu settings and display the springboard admin menu as the main menu
  if (module_exists('springboard_admin')) {
    $variables['main_menu']['links'] = menu_tree('springboard_admin_menu');
  }

  // Open sans font.
  // Usage: font-family: 'Open Sans', sans-serif;
  drupal_add_css('//fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800',
    array(
      'type' => 'external',
    )
  );

  // Add font awesome for icons.
  drupal_add_css(drupal_get_path('theme', 'springboard_backend') . '/css/font-awesome.css', array(
      'group' => CSS_THEME,
      'preprocess' => TRUE,
    ));
  $vars['styles'] = drupal_get_css();

}
/**
 * Overrides theme_menu_tree();
 */
function springboard_backend_menu_tree($variables) {
  // Add tab-style class to menus
  return '<ul class="nav nav-tabs">' . $variables['tree'] . '</ul>';
}

/**
 * Implements hook_css_alter().
 */
function springboard_backend_css_alter(&$css) {
  $path_system = drupal_get_path('module', 'system');

  // Remove nasty system styles if needed
  $remove = array(
    $path_system . '/system.theme.css',
  );

// Remove stylesheets which match our remove array.
  foreach ($css as $stylesheet => $options) {
    if (in_array($stylesheet, $remove)) {
      unset($css[$stylesheet]);
    }
  }
}
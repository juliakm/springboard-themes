<?php

/**
 * Implements template_preprocess_page().
 */
function springboard_backend_preprocess_page(&$variables) {
  // Override menu settings and display the springboard admin menu as the main menu
  if (module_exists('springboard_admin')) {
    $variables['main_menu']['links'] = menu_tree('springboard_admin_menu');
  }
}
/**
 * Overrides theme_menu_tree();
 */
function springboard_backend_menu_tree($variables) {
  // Add tab-style class to menus
  return '<ul class="nav nav-tabs">' . $variables['tree'] . '</ul>';
}
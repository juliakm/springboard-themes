<?php

/**
 * Implements template_preprocess_html().
 */
function springboard_backend_preprocess_html(&$vars) {
  // Add to head <meta http-equiv="X-UA-Compatible" content="IE=edge" /> for proper IE rendering.
  $http_equiv = array(
    '#tag' => 'meta',
    '#attributes' => array(
      'http-equiv' => 'X-UA-Compatible',
      'content' => 'IE=edge',
    ),
  );
  drupal_add_html_head($http_equiv, 'http_equiv');

// Add a class if it's a springboard page.
  $path = drupal_get_path_alias();
  $pattern = "admin/springboard/*\nadmin/springboard";
  if (drupal_match_path($path, $pattern)) {
    $vars['classes_array'][] = 'page-springboard';
  }

  }

/**
 * Implements template_preprocess_page().
 */
function springboard_backend_preprocess_page(&$variables) {
  // Override menu settings and display the springboard admin menu as the main menu
  if (module_exists('springboard_admin')) {
    $variables['main_menu']['links'] = menu_tree('springboard_admin_menu');
    
    // menu_tree() is the best available option for rendering menu links, but 
    // isn't flexible for changing the HTML/Classes in different contexts.
    // So, use a regex to change the classes on the menu for the footer. 
    $variables['footer_menu'] = drupal_render($variables['main_menu']);
    // change the wrapping ul's class so drop-down js isn't applied
    $variables['footer_menu'] = preg_replace('/class="nav nav-tabs"/', '/class="nav nav-footer"/', $variables['footer_menu']);
    // change sub-ul's class so drop-down styling isn't applied
    $variables['footer_menu'] = preg_replace('/class="dropdown-menu "/', '/class="child-menu"/', $variables['footer_menu']);
    // change sub li's class so drop-down styling isn't applied
    $variables['footer_menu'] = preg_replace('/dropdown/', '', $variables['footer_menu']);
  }

  // Open sans font.
  // Usage: font-family: 'Open Sans', sans-serif;
  drupal_add_css('//fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800',
    array(
      'type' => 'external',
    )
  );

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
  $path_views = drupal_get_path('module', 'views');
  $path_webform = drupal_get_path('module', 'webform');

  // Remove misc styles that get in the way rather than having to override them.
  $remove = array(
    $path_system . '/system.theme.css',
    $path_system . '/system.menus.css',
    $path_views . '/css/views.css',
    $path_webform .  '/css/webform.css',
  );

// Remove stylesheets which match our remove array.
  foreach ($css as $stylesheet => $options) {
    if (in_array($stylesheet, $remove)) {
      unset($css[$stylesheet]);
    }
  }
}

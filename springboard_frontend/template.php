<?php

/**
 * Implements template_preprocess_html().
 */
function springboard_frontend_preprocess_html(&$variables) {
  // Compile a list of classes that are going to be applied to the body element.
  // This allows advanced theming based on context (home page, node of certain type, etc.).
  
  // Add a class that tells us whether we're on the front page or not.
  // $variables['classes_array'][] = $variables['is_front'] ? 'front' : 'not-front';
  // Add a class that tells us whether the page is viewed by an authenticated user or not.
  // $variables['classes_array'][] = $variables['logged_in'] ? 'logged-in' : 'not-logged-in';

  // Add information about the number of sidebars.
  /*if (!empty($variables['page']['sidebar_first']) && !empty($variables['page']['sidebar_second'])) {
    $variables['classes_array'][] = 'two-sidebars';
  }
  elseif (!empty($variables['page']['sidebar_first'])) {
    $variables['classes_array'][] = 'one-sidebar sidebar-first';
  }
  elseif (!empty($variables['page']['sidebar_second'])) {
    $variables['classes_array'][] = 'one-sidebar sidebar-second';
  }
  else {
    $variables['classes_array'][] = 'no-sidebars';
  }*/

  // Populate the body classes.
  /*if ($suggestions = theme_get_suggestions(arg(), 'page', '-')) {
    foreach ($suggestions as $suggestion) {
      if ($suggestion != 'page-front') {
        // Add current suggestion to page classes to make it possible to theme
        // the page depending on the current page type (e.g. node, admin, user,
        // etc.) as well as more specific data like node-12 or node-edit.
        $variables['classes_array'][] = drupal_html_class($suggestion);
      }
    }
  }*/

  // If on an individual node page, add the node type to body classes.
  /*if ($node = menu_get_object()) {
    $variables['classes_array'][] = drupal_html_class('node-type-' . $node->type);
  }*/

  // RDFa allows annotation of XHTML pages with RDF data, while GRDDL provides
  // mechanisms for extraction of this RDF content via XSLT transformation
  // using an associated GRDDL profile.
  //$variables['rdf_namespaces'] = drupal_get_rdf_namespaces();
  //$variables['grddl_profile'] = 'http://www.w3.org/1999/xhtml/vocab';
  $variables['language'] = $GLOBALS['language']; // ? not sure about this one
  //$variables['language']->dir = $GLOBALS['language']->direction ? 'rtl' : 'ltr';

  // Add favicon.
  if (theme_get_setting('toggle_favicon')) {
    $favicon = theme_get_setting('favicon');
    $type = theme_get_setting('favicon_mimetype');
    drupal_add_html_head_link(array('rel' => 'shortcut icon', 'href' => drupal_strip_dangerous_protocols($favicon), 'type' => $type));
  }

  // Construct page title.
  if (drupal_get_title()) {
    $head_title = array(
      'title' => strip_tags(drupal_get_title()),
      'name' => check_plain(variable_get('site_name', 'Drupal')),
    );
  }
  else {
    $head_title = array('name' => check_plain(variable_get('site_name', 'Drupal')));
    if (variable_get('site_slogan', '')) {
      $head_title['slogan'] = filter_xss_admin(variable_get('site_slogan', ''));
    }
  }
  $variables['head_title_array'] = $head_title;
  $variables['head_title'] = implode(' | ', $head_title);

  // Populate the page template suggestions.
  if ($suggestions = theme_get_suggestions(arg(), 'html')) {
    $variables['theme_hook_suggestions'] = $suggestions;
  }
}

/**
 * Implements template_preprocess_page().
 */
function springboard_frontend_preprocess_page(&$variables) {
  // Move some variables to the top level for themer convenience and template cleanliness.
  $variables['show_messages'] = $variables['page']['#show_messages'];

  foreach (system_region_list($GLOBALS['theme']) as $region_key => $region_name) {
    if (!isset($variables['page'][$region_key])) {
      $variables['page'][$region_key] = array();
    }
  }

  // Set up layout variable.
  $variables['layout'] = 'none';
  if (!empty($variables['page']['sidebar_first'])) {
    $variables['layout'] = 'first';
  }
  if (!empty($variables['page']['sidebar_second'])) {
    $variables['layout'] = ($variables['layout'] == 'first') ? 'both' : 'second';
  }

  $variables['base_path'] = base_path();
  $variables['front_page'] = url();
  $variables['feed_icons'] = drupal_get_feeds();
  $variables['language'] = $GLOBALS['language'];
  $variables['language']->dir = $GLOBALS['language']->direction ? 'rtl' : 'ltr';
  $variables['logo'] = theme_get_setting('logo');
  $variables['main_menu'] = theme_get_setting('toggle_main_menu') ? menu_main_menu() : array();
  $variables['secondary_menu'] = theme_get_setting('toggle_secondary_menu') ? menu_secondary_menu() : array();
  $variables['action_links'] = menu_local_actions();
  $variables['site_name'] = (theme_get_setting('toggle_name') ? filter_xss_admin(variable_get('site_name', 'Drupal')) : '');
  $variables['site_slogan'] = (theme_get_setting('toggle_slogan') ? filter_xss_admin(variable_get('site_slogan', '')) : '');
  $variables['tabs'] = menu_local_tabs();

  if ($node = menu_get_object()) {
    $variables['node'] = $node;
  }

  // Populate the page template suggestions.
  if ($suggestions = theme_get_suggestions(arg(), 'page')) {
    $variables['theme_hook_suggestions'] = $suggestions;
  }
}

/**
 * Implements template_hidden().
 */
function springboard_frontend_hidden($variables) {
  $element = $variables['element'];
  $element['#attributes']['type'] = 'hidden';
  element_set_attributes($element, array('name', 'value'));
  return '<input' . drupal_attributes($element['#attributes']) . " />\n";
}

/**
 * Implements template_submit().
 */
function theme_submit($variables) {
  return theme('button', $variables['element']);
}

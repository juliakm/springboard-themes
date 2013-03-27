<?php

/**
 * Implements template_preprocess_html().
 */
function springboard_frontend_preprocess_html(&$variables) {

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

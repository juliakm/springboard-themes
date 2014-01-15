<!DOCTYPE html>
<!--[if lt IE 7]>      <html lang="<?php print $language->language; ?>" dir="<?php print $language->dir; ?>"<?php print $rdf_namespaces; ?> xmlns:og="http://opengraphprotocol.org/schema/" xmlns:fb="http://developers.facebook.com/schema/" itemscope itemtype="http://schema.org/Article" class="no-js ie lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html lang="<?php print $language->language; ?>" dir="<?php print $language->dir; ?>"<?php print $rdf_namespaces; ?> xmlns:og="http://opengraphprotocol.org/schema/" xmlns:fb="http://developers.facebook.com/schema/" itemscope itemtype="http://schema.org/Article" class="no-js ie ie7"> <![endif]-->
<!--[if IE 8]>         <html lang="<?php print $language->language; ?>" dir="<?php print $language->dir; ?>"<?php print $rdf_namespaces; ?> xmlns:og="http://opengraphprotocol.org/schema/" xmlns:fb="http://developers.facebook.com/schema/" itemscope itemtype="http://schema.org/Article" class="no-js ie ie8"> <![endif]-->
<!--[if IE 9]>         <html lang="<?php print $language->language; ?>" dir="<?php print $language->dir; ?>"<?php print $rdf_namespaces; ?> xmlns:og="http://opengraphprotocol.org/schema/" xmlns:fb="http://developers.facebook.com/schema/" itemscope itemtype="http://schema.org/Article" class="no-js ie ie9"> <![endif]-->
<!--[if gt IE 9]><!--> <html lang="<?php print $language->language; ?>" dir="<?php print $language->dir; ?>"<?php print $rdf_namespaces; ?> xmlns:og="http://opengraphprotocol.org/schema/" xmlns:fb="http://developers.facebook.com/schema/" itemscope itemtype="http://schema.org/Article" class="no-js"> <!--<![endif]-->
  <head profile="<?php print $grddl_profile; ?>">
    <meta name="HandheldFriendly" content="TRUE" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
    <?php print $head; ?>
    <title><?php print $head_title; ?></title>  
    <?php print $styles; ?>
    <?php print $scripts; ?>
    <!--[if lt IE 9]><script src="https://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
  </head>
  <body class="<?php print $classes; ?>" <?php print $attributes;?>>
    <div id="skip-link">
      <a href="#main-content" class="element-invisible element-focusable"><?php print t('Skip to main content'); ?></a>
    </div>
    <?php print $page_top; ?>
    <?php print $page; ?>
    <?php print $page_bottom; ?>
  </body>
</html>
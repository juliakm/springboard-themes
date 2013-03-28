<header class="clearfix">
  <?php //print theme_image($logo, $site_name, $site_name); ?>
  <?php if($is_front){ ?>
    <h1 id="site-name"><span><?php print($site_name); ?></span></h1><?php } else { print(l('<span>'.$site_name.'</span>', '<front>', array('html' => TRUE, 'attributes' => array('id' => 'site-name')))); } ?>
  <?php print render($page['header']); ?>
</header>
<div id="main" class="container clearfix">
  <?php print render($title_prefix); ?>
  <?php if ($title): ?>
    <h1 class="page-title"><?php print $title; ?></h1>
  <?php endif; ?>
  <?php print render($title_suffix); ?>
  <?php if($messages){ print $messages; } ?>
  <?php print render($tabs); ?>        
  <div class="element-invisible"><a id="main-content"></a></div>   
  <?php if ($action_links): ?><ul class="action-links"><?php print render($action_links); ?></ul><?php endif; ?> 
  <?php print render($page['content']); ?>
</div><!-- /main -->
<footer id="footer" class="clearfix region">
    <?php print render($page['footer']); ?>
</footer>
